<template>
    <div>
        <div class="top">

        </div>
        <layout>
            <Sider style="background-color: white" hide-trigger>
                <detect-fixed-side-menu
                        v-on:child-say="chooseMap"
                        v-on:on-select-place="handleSelectPalce"
                        v-on:on-play="handlePlayMap"
                        v-on:on-stop="handleStopMap"
                ></detect-fixed-side-menu>
            </Sider>
            <Layout>
                <poverty-map @on-map-load="handleOnMapLoad"></poverty-map>
                <consulting></consulting>
            </Layout>
        </layout>
    </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import Consulting from "../common/Consulting.vue";
  import DetectFixedSideMenu from "../common/DetectFixedSideMenu.vue";
  import PovertyMap from "../common/map/poverty-map/PovertyMap.vue";
  import { Logger } from '../../services/Logger';
  import { MapLocatePositionService } from '../../services/map-locate-position.service';
  import { MapSourceService } from '../../services/api/map-source/MapSourceService';
  import { api } from '../../services/api/ApiProvider';
  import { Message } from '../../services/Message';
  import { HUBEI_BOUNDS } from '../../constants/mapbox';
  import { MapSourceAnimationService } from '../../services/map-source-animation.service';
  import { MapboxSource } from '../../types/mapbox-source';

  @Component({
    components: {Consulting, DetectFixedSideMenu, PovertyMap}
  })

  export default class MapHome extends Vue {
    private TAG = 'MapHome.vue';
    private map: mapboxgl.Map;
    private SHOWING_SOURCE = 'showing-source';
    private sourceApi: MapSourceService;
    private messageService: Message;
    private mapAnimationService: MapSourceAnimationService;

    private mapSources: MapboxSource[] = []; // 地图源

    mounted() {
      this.sourceApi = api.mapSourceService;
      this.messageService = new Message(this);
    }

    handleOnMapLoad(map: mapboxgl.Map) {
      Logger.info(this.TAG, 'map loaded', map);
      this.map = map;
      this.mapAnimationService = new MapSourceAnimationService(map);
    }

    async chooseMap(year, name){
      console.log(year, name);
      console.log('in map home');
      // const map = this.map;
      if (!this.map) {
        this.messageService.error('请等待地图组件加载完成...')
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
        });
      } catch (e) {}
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
      if (!this.mapSources.length) {
        try {
          let res = await this.sourceApi.getByName(name);
          this.mapSources = res;
          Logger.info(this.TAG, 'get sources', res);
          await this.mapAnimationService.addSources(this.mapSources);
        } catch (e) {}
      }
      Logger.info(this.TAG, this.mapSources.length);
      this.mapAnimationService.autoDisplayByRange(startYear, endYear);
    }

    handleStopMap() {
      this.mapAnimationService.hideAllLayer();
    }
  }
</script>

<style scoped>
    .top{
        height: 100px;
    }
</style>