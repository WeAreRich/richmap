<template>
    <div>
        <div class="top">
        </div>
        <layout>
            <Sider collapsible v-model="isCollapsed"
                   style="background-color: white;text-align: center;width: auto;">
                <Menu active-name="1-2" width="auto">
                    <MenuItem name="1-1">
                        <Icon size="36px" type="ios-navigate"></Icon>
                        <div v-if="!isCollapsed">
                            <detect-fixed-side-menu
                                    v-on:child-say="chooseMap"
                                    v-on:on-select-place="handleSelectPalce"
                                    v-on:on-play="handlePlayMap"
                                    v-on:on-stop="handleStopMap"
                            ></detect-fixed-side-menu>
                        </div>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <poverty-map @on-map-load="handleOnMapLoad"></poverty-map>
                <consulting></consulting>
            </Layout>
        </layout>
    </div>
</template>

<script>
  import store from '../../store/index';
  import {Sider, Layout, Icon, Menu, MenuItem } from 'iview'
  import { Logger } from '../../services/Logger';
  import { MapLocatePositionService } from '../../services/map-locate-position.service';
  import mapboxgl from 'mapbox-gl';
  // import { MapSourceService } from '../../services/api/map-source/MapSourceService';
  import { api } from '../../services/api/ApiProvider';
  import { HUBEI_BOUNDS, TOP_LAYER_ID } from '../../constants/mapbox';
  import { MapSourceAnimationService } from '../../services/map-source-animation.service';
  const Consulting = () => import('../common/Consulting.vue');
  const DetectFixedSideMenu = () => import('../common/DetectFixedSideMenu.vue');
  const PovertyMap = () => import('../common/map/poverty-map/PovertyMap.vue');
  export default {
    components: {
      Consulting, DetectFixedSideMenu, PovertyMap, Sider, Layout, Icon, Menu, MenuItem
    },
    data(){
      return{
        TAG : 'MapHome.vue',
        map: undefined,
        SHOWING_SOURCE : 'showing-source',
        sourceApi: undefined,
        messageService: undefined,
        mapAnimationService: undefined,
        mapSources : {},
        isCollapsed: true
      }
    },
    mounted(){
      this.sourceApi = api.mapSourceService;

      let state = store.state;
      this.isCollapsed = !state.layout.isPC;
      let that = this;
      window.onresize = () => {
        let state = store.state;
        that.isCollapsed = !state.layout.isPC;
        // console.log(that.isCollapsed);
      };

      if (!this.isGoodBrowser() || !mapboxgl.supported()) {
        alert('当前浏览器支持效果较差，为保证浏览质量，请使用Chrome、Safari、IE11浏览器');
      } else {
        Logger.info(this.TAG, '浏览器支持');
      }
    },
    methods:{
      handleOnMapLoad(map) {
        Logger.info(this.TAG, 'map loaded', map);
        this.$Message.success('地图加载完成');
        this.map = map;
        this.mapAnimationService = new MapSourceAnimationService(map);
      },

      async chooseMap(year, name) {
        console.log(year, name);
        console.log('in map home');
        // const map = this.map;
        if (!this.map) {
          this.messageService.error('请等待地图组件加载完成...');
        }
        // MapLocatePositionService.locateToPosition([place.lon, place.lat], this.map);
        if (this.map.isSourceLoaded(this.SHOWING_SOURCE)) {
          this.map.removeLayer(this.SHOWING_SOURCE);
          this.map.removeSource(this.SHOWING_SOURCE);
        }
        try {
          let res = await this.sourceApi.getByNameAndYear(name, year);
          const item = res[0];
          console.log('【MapHome】', item);
          if (!item) throw new Error('no source result');
          let source = {
            type: 'raster',
            url: item.url
          };
          this.map.addSource(this.SHOWING_SOURCE, source);
          this.map.addLayer({
            id: this.SHOWING_SOURCE,
            type: 'raster',

            source: this.SHOWING_SOURCE
          }, TOP_LAYER_ID);
        } catch (e) {
        }
      },


      handleSelectPalce(item) {
        const bounds = HUBEI_BOUNDS;
        const lon = item.lon;
        const lat = item.lat;
        if (lon < bounds[0][0] || lon > bounds[1][0] || lat < bounds[0][1] || lat > bounds[1][1]) {
          this.$Message.error('选择的地点超出范围');
        } else {
          MapLocatePositionService.locateToPosition([lon, lat], this.map);
        }
      },

      async handlePlayMap(startYear, endYear, name) {
        if (!this.mapAnimationService) {
          this.$Message.error('请等待地图加载完成');
        }
        if (!this.mapSources[name]) {
          try {
            let res = await this.sourceApi.getByName(name);
            this.mapSources[name] = res;
            Logger.info(this.TAG, 'get sources', res);
            (this).$Spin.show();
            await this.mapAnimationService.addSources(this.mapSources[name]);
            Logger.info(this.TAG, '加载所有sources成功');
          } catch (e) {
          } finally {
            (this).$Spin.hide();
          }
        }
        Logger.info(this.TAG, this.mapSources[name]);
        this.mapAnimationService.autoDisplayByRange(startYear, endYear);
      },

      handleStopMap() {
        this.mapAnimationService.stop();
      },

      isGoodBrowser() {
        const userAgent = navigator.userAgent;
        // if (userAgent.match(/Chrome/i) == 'Chrome' || userAgent.match(/Safari/i) == 'Safari' || )
        //Chrome
        if(userAgent.match(/Chrome/i) == 'Chrome') {
          return 'Chrome';
        }
        //Safari
        else if(userAgent.match(/Safari/i) == 'Safari') {
          return true;
        }
        //IE
        if(!!window.ActiveXObject || "ActiveXObject" in window) {
          var version = navigator.userAgent.match(/MSIE (\d+)/);
          version = version && version[1];
          console.log('version', version);
          if (version) return false;
          else return true;
        }
        return false;
      }
    }
  }
</script>

<style scoped>
    .top {
        height: 65px;
    }

    .layout-con {
        height: 100%;
        width: 100%;
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
