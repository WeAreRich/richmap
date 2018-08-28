<template>
    <div class="outer">
        <div class="border-control">
            <Dropdown trigger="click" style="position: relative" placement="bottom-start">
                <Tooltip content="边界" placement="right">
                    <Button icon="ios-browsers"></Button>
                </Tooltip>
                <DropdownMenu slot="list" style="text-align: left; width: 130px;">
                    <div style="display: flex; flex-direction: column; padding: 10px;">
                        <Checkbox label="一级行政区边界" @on-change="handleChangeFirstLevelCheckBox" @onclick="click">一级行政区边界</Checkbox>
                        <Checkbox label="二级行政区边界" @on-change="handleChangeSecondLevelCheckBox">二级行政区边界</Checkbox>
                        <Checkbox label="三级行政区边界" @on-change="handleChangeThirdLevelCheckBox">三级行政区边界</Checkbox>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div id="map-container"></div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Emit, Prop, Watch } from 'vue-property-decorator';
  import NominatimService from '../../../../services/nominatim.service';
  import { Logger } from '../../../../services/Logger';
  import mapboxgl from 'mapbox-gl';
  import { ACCESS_TOKEN, CHINA_BOUNDS, CHINA_CENTER, HUBEI_BOUNDS } from '../../../../constants/mapbox';
  import PlaceItem from '../../../../types/place-item';
  import {Dropdown, Tooltip, DropdownMenu, Checkbox, Button} from 'iview';

  @Component({
    components: {Dropdown, Tooltip, DropdownMenu, Checkbox, Button}
  })
  export default class PovertyMap extends Vue {
    private TAG = 'PovertyMap';
    private FIRST_LEVEL_LAYER_ID = 'first-level';
    private SECOND_LEVEL_LAYER_ID = 'second-level';
    private THIRD_LEVEL_LAYER_ID = 'third-level';
    private borderPaint = {
      'line-color': 'rgba(255,255,255,0.5)',
      'line-width': 2
    };

    // 行政区域划分图层
    private firstLevelLayer: mapboxgl.Layer;
    private secondLevelLayer: mapboxgl.Layer;
    private thirdLevelLayer: mapboxgl.Layer;
    private map: mapboxgl.Map;


    // 基础地图源
    @Prop({
      default: () => 'mapbox://styles/mapbox/satellite-v9'
    })
    public mapUrl: string;


    @Watch('mapUrl')
    onMapUrlChange(val: string, oldVal: string) {
      Logger.info(this.TAG, val, oldVal);
      this.map.setStyle(val);
    }

    // data
    public query: string;
    public searchItems: PlaceItem[];

    // services
    private nominatimService: NominatimService;

    constructor() {
      super();
      Logger.info(this.TAG, "constructor");
      this.query = "";
      this.searchItems = [];
      this.nominatimService = new NominatimService();
    }

    mounted() {
      Logger.info(this.TAG, "mounted");
      this.initMap();
    }

    private initMap() {
      Logger.info(this.TAG, "start init map");
      mapboxgl.accessToken = ACCESS_TOKEN;
      this.map = new mapboxgl.Map({
        container: 'map-container',
        style: this.mapUrl,
        // center: CHINA_CENTER,
        maxBounds: HUBEI_BOUNDS
      });
      // 增加控件
      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.addControl(new mapboxgl.ScaleControl());
      // 初始化完成
      this.map.on("load", () => {
        this.onMapLoad(this.map);
        // console.log(this.map.getZoom());
      });
    }

    public click(){
      console.log("hhhhh")
    }

    /* 事件emit */
    // 地图加载完成，返回一个 mapboxgl 地图对象
    @Emit()
    public onMapLoad(map: mapboxgl.Map) {}

    /* 下面是事件处理 */

    public handleChangeFirstLevelCheckBox(value) {
      console.log("加载第一级");
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
      Logger.info(this.TAG, "show first level border");
      // 未加载过
      if (!this.firstLevelLayer) {
        this.map.addSource(this.FIRST_LEVEL_LAYER_ID, {
          type: 'vector',
          url: 'mapbox://vsr2018.78vj6bhk'
        });
        let layer: mapboxgl.Layer = {
          id: this.FIRST_LEVEL_LAYER_ID,
          type: "line",
          source: this.FIRST_LEVEL_LAYER_ID,
          'source-layer': 'first-6jawx0',
          paint: this.borderPaint
        };
        this.firstLevelLayer = layer;
      }
      this.map.addLayer(this.firstLevelLayer);
      this.map.on('sourcedata', this.FIRST_LEVEL_LAYER_ID, () => {
        Logger.info(this.TAG, 'load layer');
      })
    }

    public showSecondLevelBorder() {
      Logger.info(this.TAG, "showSecondLevelBorder");
      // 未加载过
      if (!this.secondLevelLayer) {
        this.map.addSource(this.SECOND_LEVEL_LAYER_ID, {
          type: 'vector',
          url: 'mapbox://vsr2018.050px5x2'
        });
        let layer: mapboxgl.Layer = {
          id: this.SECOND_LEVEL_LAYER_ID,
          type: "line",
          source: this.SECOND_LEVEL_LAYER_ID,
          paint: this.borderPaint,
          'source-layer': 'second-dsvifq'
        };
        this.secondLevelLayer = layer;
      }
      this.map.addLayer(this.secondLevelLayer);
    }

    public showThirdLevelBorder() {
      Logger.info(this.TAG, "showThirdLevelBorder");
      // 未加载过
      if (!this.thirdLevelLayer) {
        this.map.addSource(this.THIRD_LEVEL_LAYER_ID, {
          type: 'vector',
          url: 'mapbox://vsr2018.5tz0fat5'
        });
        let layer: mapboxgl.Layer = {
          id: this.THIRD_LEVEL_LAYER_ID,
          type: "line",
          source: this.THIRD_LEVEL_LAYER_ID,
          paint: this.borderPaint,
          'source-layer': 'third-dppmjz'
        };
        this.thirdLevelLayer = layer;
      }
      this.map.addLayer(this.thirdLevelLayer);
    }
  }
</script>


<style scoped>
    .outer {
        position: relative;
        /*background-image: linear-gradient( 135deg, #92FFC0 30%, #00266150 100%);*/
        background: inherit;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px;
    }

    #map-container {
        height: 800px;
        width: 100%;
    }

    .border-control {
        top: 10px;
        left: 10px;
        display: inline-block;
        /*width: 20px;*/
        position: absolute;
        z-index: 999;
    }
</style>