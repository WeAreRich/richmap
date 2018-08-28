<template>
    <div class="outer">
        <div class="border-control">
            <Dropdown trigger="click" style="position: relative" placement="bottom-start">
                <Tooltip content="边界" placement="right">
                    <Button icon="ios-browsers"></Button>
                </Tooltip>
                <DropdownMenu slot="list" style="text-align: left; width: 130px;">
                    <div style="display: flex; flex-direction: column; padding: 10px;">
                        <div>
                            <input type="checkbox" id="first" @click="handleChangeFirstLevelCheckBox">
                            <label for="first">一级行政区边界</label>
                        </div>
                        <div>
                            <input type="checkbox" id="second" @click="handleChangeSecondLevelCheckBox">
                            <label for="second">二级行政区边界</label>
                        </div>
                        <div>
                            <input type="checkbox" id="third" @click="handleChangeThirdLevelCheckBox">
                            <label for="third">三级行政区边界</label>
                            <Button @click="handleChangeFirstLevelCheckBox"></Button>
                        </div>
                        <!--<Checkbox label="一级行政区边界" @on-change="handleChangeFirstLevelCheckBox">一级行政区边界</Checkbox>-->
                        <!--<Checkbox label="二级行政区边界" @on-change="handleChangeSecondLevelCheckBox">二级行政区边界</Checkbox>-->
                        <!--<Checkbox label="三级行政区边界" @on-change="handleChangeThirdLevelCheckBox">三级行政区边界</Checkbox>-->
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div id="map-container"></div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  declare var require : (filename,resolve)=>any;
  import { Component, Emit, Prop, Watch } from 'vue-property-decorator';
  import NominatimService from '../../../../services/nominatim.service';
  import { Logger } from '../../../../services/Logger';
  import mapboxgl from 'mapbox-gl';
  // const mapboxgl = (a) => require('mapbox-gl.js',a);
  import { ACCESS_TOKEN, CHINA_BOUNDS, CHINA_CENTER, HUBEI_BOUNDS } from '../../../../constants/mapbox';
  import PlaceItem from '../../../../types/place-item';
  import {Dropdown, Tooltip, DropdownMenu, Button} from 'iview';

  @Component({
    components: {Dropdown, Tooltip, DropdownMenu, Button}
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
    private firstLevelLayer: mapboxgl.Layer = undefined;
    private secondLevelLayer: mapboxgl.Layer = undefined;
    private thirdLevelLayer: mapboxgl.Layer = undefined;
    private map: mapboxgl.Map;

    public firstCheck = false;
    public secondCheck = false;
    public thirdCheck = false;


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
      this.firstLevelLayer = undefined;
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
        this.$emit('on-map-load', this.map);
        // console.log(this.map.getZoom());
      });
    }

    public click(){
      console.log("hhhhh")
    }

    /* 下面是事件处理 */


    public handleChangeFirstLevelCheckBox() {
      console.log("here");
      this.firstCheck = !this.firstCheck;
      if (this.firstCheck) {
        this.showFirstLevelBorder();
      } else {
        this.map.removeLayer(this.FIRST_LEVEL_LAYER_ID);
      }
    }

    public handleChangeSecondLevelCheckBox() {
      this.secondCheck = !this.secondCheck;
      if (this.secondCheck) {
        this.showSecondLevelBorder();
      } else {
        this.map.removeLayer(this.SECOND_LEVEL_LAYER_ID);
      }
    }

    public handleChangeThirdLevelCheckBox() {
      this.thirdCheck = !this.thirdCheck;
      if (this.thirdCheck) {
        this.showThirdLevelBorder();
      } else {
        this.map.removeLayer(this.THIRD_LEVEL_LAYER_ID);
      }
    }

    public showFirstLevelBorder() {
      Logger.info(this.TAG, "show first level border");
      // 未加载过
      if (!this.firstLevelLayer) {
        console.log("add first");
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