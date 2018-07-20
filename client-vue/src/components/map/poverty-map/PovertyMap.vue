<template>
    <div class="outer">
        <div class="border-control">
            <Dropdown trigger="click">
                <Tooltip content="边界" placement="top">
                    <Button icon="ios-browsers"></Button>
                </Tooltip>
                <DropdownMenu slot="list" style="text-align: left; width: 130px;">
                    <div style="display: flex; flex-direction: column; padding: 10px;">
                        <Checkbox label="一级行政区边界" @on-change="handleChangeFirstLevelCheckBox">一级行政区边界</Checkbox>
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
  import { Component, Emit } from 'vue-property-decorator';
  import NominatimService from '../../../services/nominatim.service';
  import { Logger } from '../../../services/Logger';
  import mapboxgl from 'mapbox-gl';
  import { ACCESS_TOKEN, CHINA_BOUNDS, CHINA_CENTER } from '../../../constants/mapbox';
  import PlaceItem from '../../../types/place-item';
  import MapDrawingLineService from "../../../services/map-drawing-line.service";

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
    public searchItems: PlaceItem[];

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
        // style: {
        //   'version': 8,
        //   'name': 'Mapbox Streets',
        //   'sprite': 'mapbox://sprites/mapbox/streets-v8',
        //   'glyphs': 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
        //   "layers": [{
        //     "id": "simple-tiles",
        //     "type": "raster",
        //     "source": "osm-tiles",
        //     "minzoom": 0,
        //     "maxzoom": 22
        //   }],
        //   'sources': {
        //     'osm-tiles': {
        //       'type': 'raster',
        //       'tiles': [
        //         // 'https://api.openstreetmap.org/api/0.6/map?bbox=11.54,48.14,11.543,48.145'
        //         'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
        //         // 'https://planet.openstreetmap.org/pbf/planet-latest.osm.pbf'
        //         // 'http://download.geofabrik.de/asia/china-latest.osm.pbf'
        //       ],
        //       'tileSize': 256
        //     }
        //   }
        // },
        center: CHINA_CENTER,
        maxBounds: CHINA_BOUNDS
      });
      // 增加控件
      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.addControl(new mapboxgl.ScaleControl());
      // 初始化完成
      this.map.on('load', () => {
        this.onMapLoad(this.map);
        Logger.info(this.TAG, 'start drawing line');
        // let drawLine = new MapDrawingLineService(this.map, (path: Position[]) => {Logger.info(this.TAG, '画线完成', path)});
      });
    }

    /* 事件emit */
    @Emit()
    public onMapLoad(map: mapboxgl.Map) {
    }

    /* 下面是事件处理 */

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
          // data: 'http://www.injusalon.com/count/pictures/county.json'
          data: 'http://www.injusalon.com/count/pictures/result.json'
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

<style scoped>
    .outer {
        position: relative;
        /*background-image: linear-gradient( 135deg, #92FFC0 30%, #00266150 100%);*/
        background: inherit;
        padding: 20px;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px;
    }

    #map-container {
        height: 600px;
        width: 100%;
        margin: auto;
    }

    .border-control {
        padding: 10px;
        display: inline-block;
        position: absolute;
        z-index: 999;
    }
</style>