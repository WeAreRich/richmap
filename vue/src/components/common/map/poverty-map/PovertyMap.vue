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
                            <!--<Button @click="handleChangeFirstLevelCheckBox"></Button>-->
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

<script>
  import NominatimService from '../../../../services/nominatim.service';
  import { Logger } from '../../../../services/Logger';
  import mapboxgl from 'mapbox-gl';
  import { ACCESS_TOKEN, CHINA_BOUNDS, CHINA_CENTER, HUBEI_BOUNDS, HUBEI_CENTER } from '../../../../constants/mapbox';
  import {Dropdown, Tooltip, DropdownMenu, Button} from 'iview';
  export default {
    components: {
      Dropdown, Tooltip, DropdownMenu, Button
    },
    data(){
      return{
        TAG : 'PovertyMap',
        FIRST_LEVEL_LAYER_ID : 'first-level',
        SECOND_LEVEL_LAYER_ID : 'second-level',
        THIRD_LEVEL_LAYER_ID : 'third-level',
        borderPaint : {
          'line-color': 'rgba(255,255,255,0.5)',
          'line-width': 2
        },

        firstLevelLayer:  undefined,
        secondLevelLayer:  undefined,
        thirdLevelLayer: undefined,
        map: "",

        firstCheck : false,
        secondCheck : false,
        thirdCheck : false,

        mapUrl : 'mapbox://styles/wenxiangdong/cjleq0gru5sag2slq2xqqtojn',
        query: "",
        searchItems: [],
        nominatimService: ""
      }
    },
    mounted(){
      this.query = "";
      this.searchItems = [];
      this.nominatimService = new NominatimService();
      Logger.info(this.TAG, "constructor");
      this.query = "";
      this.searchItems = [];
      this.nominatimService = new NominatimService();
      this.initMap();
    },
    methods:{
      initMap() {
        Logger.info(this.TAG, "start init map");
        mapboxgl.accessToken = ACCESS_TOKEN;
        this.map = new mapboxgl.Map({
          container: 'map-container',
          style: this.mapUrl,
          maxBounds: HUBEI_BOUNDS,
          center: HUBEI_CENTER
        });
        // 增加控件
        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.addControl(new mapboxgl.ScaleControl());
        // 初始化完成
        this.map.on("load", () => {
        this.$emit('on-map-load', this.map);
        console.log(this.map.getStyle().layers);
        });
      },

      click(){
        console.log("hhhhh")
      },

  /* 下面是事件处理 */


      handleChangeFirstLevelCheckBox() {
        console.log("here");
        this.firstCheck = !this.firstCheck;
        if (this.firstCheck) {
          this.showFirstLevelBorder();
        } else {
        this.map.removeLayer(this.FIRST_LEVEL_LAYER_ID);
        }
       },

  handleChangeSecondLevelCheckBox() {
    this.secondCheck = !this.secondCheck;
    if (this.secondCheck) {
      this.showSecondLevelBorder();
    } else {
      this.map.removeLayer(this.SECOND_LEVEL_LAYER_ID);
    }
  },

  handleChangeThirdLevelCheckBox() {
    this.thirdCheck = !this.thirdCheck;
    if (this.thirdCheck) {
      this.showThirdLevelBorder();
    } else {
      this.map.removeLayer(this.THIRD_LEVEL_LAYER_ID);
    }
  },

  showFirstLevelBorder() {
    Logger.info(this.TAG, "show first level border");
    // 未加载过
    if (!this.firstLevelLayer) {
      console.log("add first");
      this.map.addSource(this.FIRST_LEVEL_LAYER_ID, {
        type: 'vector',
        url: 'mapbox://vsr2018.78vj6bhk'
      });
      let layer = {
        id: this.FIRST_LEVEL_LAYER_ID,
        type: "line",
        source: this.FIRST_LEVEL_LAYER_ID,
        'source-layer': 'first-6jawx0',
        paint: {
          'line-color': 'rgba(255,10,10,0.5)',
          'line-width': 3
        }
      };
      this.firstLevelLayer = layer;
      console.log(this.firstLevelLayer)
    }
    this.map.addLayer(this.firstLevelLayer, "country-label-lg");
    this.map.on('sourcedata', this.FIRST_LEVEL_LAYER_ID, () => {
      Logger.info(this.TAG, 'load layer');
    })
  },

  showSecondLevelBorder() {
    Logger.info(this.TAG, "showSecondLevelBorder");
    // 未加载过
    if (!this.secondLevelLayer) {
      this.map.addSource(this.SECOND_LEVEL_LAYER_ID, {
        type: 'vector',
        url: 'mapbox://vsr2018.050px5x2'
      });
      let layer = {
        id: this.SECOND_LEVEL_LAYER_ID,
        type: "line",
        source: this.SECOND_LEVEL_LAYER_ID,
        paint: {
          'line-color': 'rgba(10,255,10,0.5)',
          'line-width': 2
        },
        'source-layer': 'second-dsvifq'
      };
      this.secondLevelLayer = layer;
    }
    this.map.addLayer(this.secondLevelLayer, "country-label-lg");
  },

  showThirdLevelBorder() {
    Logger.info(this.TAG, "showThirdLevelBorder");
    // 未加载过
    if (!this.thirdLevelLayer) {
      this.map.addSource(this.THIRD_LEVEL_LAYER_ID, {
        type: 'vector',
        url: 'mapbox://vsr2018.5tz0fat5'
      });
      let layer = {
        id: this.THIRD_LEVEL_LAYER_ID,
        type: "line",
        source: this.THIRD_LEVEL_LAYER_ID,
        paint: {
          'line-color': 'rgba(10,10,255,0.5)',
          'line-width': 2
        },
        'source-layer': 'third-dppmjz'
      };
      this.thirdLevelLayer = layer;
    }
    this.map.addLayer(this.thirdLevelLayer, "country-label-lg");
  }
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
