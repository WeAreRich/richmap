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

<script lang="ts">
  import store from '../../store';

  declare var require: (filename, resolve) => any;
  const Consulting = (r) => require(['../common/Consulting.vue'], r);
  const DetectFixedSideMenu = (r) => require(['../common/DetectFixedSideMenu.vue'], r);
  const PovertyMap = (r) => require(['../common/map/poverty-map/PovertyMap.vue'], r);
  import { Vue, Component } from 'vue-property-decorator';
  // import Consulting from "../common/Consulting.vue";
  // import DetectFixedSideMenu from "../common/DetectFixedSideMenu.vue";
  // import PovertyMap from "../common/map/poverty-map/PovertyMap.vue";
  import { Logger } from '../../services/Logger';
  import { MapLocatePositionService } from '../../services/map-locate-position.service';
  import { MapSourceService } from '../../services/api/map-source/MapSourceService';
  import { api } from '../../services/api/ApiProvider';
  import { Message as MessageService } from '../../services/Message';
  import { HUBEI_BOUNDS, TOP_LAYER_ID } from '../../constants/mapbox';
  import { MapSourceAnimationService } from '../../services/map-source-animation.service';
  import { MapboxSource } from '../../types/mapbox-source';
  import { Sider, Layout, Icon, Menu, MenuItem } from 'iview';

  @Component({
    components: {Consulting, DetectFixedSideMenu, PovertyMap, Sider, Layout, Icon, Menu, MenuItem}
  })

  export default class MapHome extends Vue {
    private TAG = 'MapHome.vue';
    private map: mapboxgl.Map;
    private SHOWING_SOURCE = 'showing-source';
    private sourceApi: MapSourceService;
    private messageService: MessageService;
    private mapAnimationService: MapSourceAnimationService;

    private mapSources = {}; // 地图源
    isCollapsed: boolean = true;

    mounted() {
      this.sourceApi = api.mapSourceService;
      this.messageService = new MessageService(this);
      this.mapSources;

      let state: any = store.state;
      this.isCollapsed = !state.layout.isPC;
      let that = this;
      window.onresize = () => {
        let state: any = store.state;
        that.isCollapsed = !state.layout.isPC;
        console.log(that.isCollapsed);
      };

    }

    handleOnMapLoad(map: mapboxgl.Map) {
      Logger.info(this.TAG, 'map loaded', map);
      this.map = map;
      this.mapAnimationService = new MapSourceAnimationService(map);
    }

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
        let source: mapboxgl.RasterSource = {
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
    }


    handleSelectPalce(item) {
      const bounds = HUBEI_BOUNDS;
      const lon = item.lon;
      const lat = item.lat;
      if (lon < bounds[0][0] || lon > bounds[1][0] || lat < bounds[0][1] || lat > bounds[1][1]) {
        this.messageService.error('选择的地点超出范围');
      } else {
        MapLocatePositionService.locateToPosition([lon, lat], this.map);
      }
    }

    async handlePlayMap(startYear, endYear, name) {
      if (!this.mapSources[name]) {
        try {
          let res = await this.sourceApi.getByName(name);
          this.mapSources[name] = res;
          Logger.info(this.TAG, 'get sources', res);
          (this as any).$Spin.show();
          await this.mapAnimationService.addSources(this.mapSources[name]);
          Logger.info(this.TAG, '加载所有sources成功');
        } catch (e) {
        } finally {
          (this as any).$Spin.hide();
        }
      }
      Logger.info(this.TAG, this.mapSources[name]);
      this.mapAnimationService.autoDisplayByRange(startYear, endYear);
    }

    handleStopMap() {
      this.mapAnimationService.stop();
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