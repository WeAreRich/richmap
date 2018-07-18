<template>
    <div class="outer">
        <div style="display: flex; flex-direction: row; justify-content: flex-end; width: 500px; margin-bottom: 20px;float: right;z-index:9999;position:relative">
            <div style="display: inline-block;">
                <Dropdown>
                    <a>展示选项</a>
                    <DropdownMenu slot="list" style="text-align: left;">
                        <div style="display: flex; flex-direction: column; padding: 10px;">
                            <Checkbox label="一级行政区边界" @on-change="handleChangeFirstLevelCheckBox">一级行政区边界</Checkbox>
                            <Checkbox label="二级行政区边界" @on-change="handleChangeSecondLevelCheckBox">二级行政区边界</Checkbox>
                            <Checkbox label="三级行政区边界" @on-change="handleChangeThirdLevelCheckBox">三级行政区边界</Checkbox>
                        </div>
                    </DropdownMenu>
                </Dropdown>
                <div style="display: inline-block; margin-left: 20px;">
                    <AutoComplete
                            icon="search"
                            placeholder="根据名称搜索地区"
                            clearable
                            v-model.lazy="query"
                            @on-select="handleSelectPlace"
                            @on-search="handleSearch">
                        <Option
                                v-for="(item, index) in searchItems"
                                :value="item.display_name"
                                :key="index">
                            <span>{{item.display_name}}</span>
                        </Option>
                    </AutoComplete>
                </div>
            </div>
        </div>
        <div id="map-container"></div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import NominatimService from '../../../services/nominatim.service';
    import {Logger} from '../../../services/Logger';
    import mapboxgl from 'mapbox-gl';
    import {ACCESS_TOKEN, CHINA_BOUNDS, CHINA_CENTER} from '../../../constants/mapbox';
    import {Nominatim} from '../../../types/nominatim';
    import MapDrawingRectangleService from "../../../services/map-drawing-rectangle.service";

    @Component
    export default class PovertyMap extends Vue {
        private TAG = 'PovertyMap';
        private FIRST_LEVEL_LAYER_ID = 'first-level';
        private SECOND_LEVEL_LAYER_ID = 'second-level';
        private THIRD_LEVEL_LAYER_ID = 'third-level';

        // 行政区域划分图层
        private firstLevelLayer: mapboxgl.Layer;
        private secondLevelLayer: mapboxgl.Layer;
        private thirdLevelLayer: mapboxgl.Layer;
        private map: mapboxgl.Map;

        // data
        public query: string;
        public searchItems: Nominatim[];

        // services
        private nominatimService: NominatimService;

        constructor() {
            super();
            Logger.info(this.TAG, 'constructor');
            this.query = '';
            this.searchItems = [];
            this.nominatimService = new NominatimService();
        }

        mounted() {
            Logger.info(this.TAG, 'mounted');
            this.initMap();
        }

        private initMap() {
            Logger.info(this.TAG, 'start init map');
            mapboxgl.accessToken = ACCESS_TOKEN;
            this.map = new mapboxgl.Map({
                container: 'map-container',
                // style: 'mapbox://styles/mapbox/streets-v10',
                style: 'mapbox://styles/mapbox/satellite-v9',
                // style: 'mapbox://styles/mapbox/satellite-streets-v10',
                center: CHINA_CENTER,
                maxBounds: CHINA_BOUNDS
            });
            // 增加控件
            this.map.addControl(new mapboxgl.NavigationControl());
            this.map.addControl(new mapboxgl.ScaleControl());
        }


        /* 下面是事件处理 */

        // 搜索输入的名称 是否在地理上有对应的 项目
        public async handleSearch(query) {
            // 检空
            if (!query) {
                return;
            }
            this.searchItems = await this.nominatimService.search(query);
        }

        // 选择搜索出的某一地名
        public handleSelectPlace(value) {
            let map = this.map;
            Logger.info(this.TAG, `select ${value}`);
            let index = this.searchItems.findIndex(
                item => item.display_name === value
            );
            if (index < 0) {
                Logger.error(this.TAG, `not found ${value}`);
                return;
            }
            let nominatimItem = this.searchItems[index];
            // 定位
            map.flyTo({
                center: [nominatimItem.lon, nominatimItem.lat],
                zoom: 9,
                curve: 1,
                easing(t) {
                    return t;
                }
            });
            // 显示一个标志
            new mapboxgl.Marker()
                .setLngLat([nominatimItem.lon, nominatimItem.lat])
                .addTo(map);
        }

        public handleChangeFirstLevelCheckBox(value) {
            if (value) {
                this.showFirstLevelBorder();
            } else {
                this.map.removeLayer(this.FIRST_LEVEL_LAYER_ID);
            }
        }

        public handleChangeSecondLevelCheckBox(value) {
            if (value) {
                this.showSecondLevelBorder();
            } else {
                this.map.removeLayer(this.SECOND_LEVEL_LAYER_ID);
            }
        }

        public handleChangeThirdLevelCheckBox(value) {
            if (value) {
                this.showThirdLevelBorder();
            } else {
                this.map.removeLayer(this.THIRD_LEVEL_LAYER_ID);
                this.map.removeSource(this.FIRST_LEVEL_LAYER_ID);
            }
        }

        public showFirstLevelBorder() {
            Logger.info(this.TAG, 'show first level border');
            // 未加载过
            if (!this.firstLevelLayer) {
                this.map.addSource(this.FIRST_LEVEL_LAYER_ID, {
                    type: 'geojson',
                    data: 'http://www.injusalon.com/count/pictures/region.json'
                });
                let layer: mapboxgl.Layer = {
                    id: this.FIRST_LEVEL_LAYER_ID,
                    type: 'line',
                    source: this.FIRST_LEVEL_LAYER_ID,
                    paint: {
                        'line-color': '#fff',
                        'line-width': 4
                    }
                };
                this.firstLevelLayer = layer;
            }
            this.map.addLayer(this.firstLevelLayer);
        }

        public showSecondLevelBorder() {
            Logger.info(this.TAG, 'showSecondLevelBorder');
            // 未加载过
            if (!this.secondLevelLayer) {
                this.map.addSource(this.SECOND_LEVEL_LAYER_ID, {
                    type: 'geojson',
                    data: 'http://www.injusalon.com/count/pictures/county.json'
                });
                let layer: mapboxgl.Layer = {
                    id: this.SECOND_LEVEL_LAYER_ID,
                    type: 'line',
                    source: this.SECOND_LEVEL_LAYER_ID,
                    paint: {
                        'line-color': '#fff',
                        'line-width': 4
                    }
                };
                this.secondLevelLayer = layer;
            }
            this.map.addLayer(this.secondLevelLayer);
        }

        public showThirdLevelBorder() {
            Logger.info(this.TAG, 'showThirdLevelBorder');
        }
    }
</script>

<style>
    .outer {
        position: relative;
        /*background-image: linear-gradient( 135deg, #92FFC0 30%, #00266150 100%);*/
        background: inherit;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px;
    }

    #map-container {
        height: 600px;
        width: 100%;
        margin: auto;
    }
</style>