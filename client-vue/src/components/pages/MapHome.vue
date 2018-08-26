<template>
    <div>
        <div class="top">

        </div>
        <layout>
            <Sider style="background-color: white" hide-trigger>
                <detect-fixed-side-menu v-on:child-say="chooseMap"></detect-fixed-side-menu>
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

  @Component({
    components: {Consulting, DetectFixedSideMenu, PovertyMap}
  })

  export default class MapHome extends Vue {
    private TAG = 'Try.vue';
    private map: mapboxgl.Map;

    handleOnMapLoad(map: mapboxgl.Map) {
      Logger.info(this.TAG, 'map loaded', map);
      this.map = map;
    }

    chooseMap(year, place){
       console.log('here');
       console.log(year+" "+place);

       this.map.addSource('hubei', {
          type: 'raster',
          url: 'mapbox://vsr2018.5s4x1oqd'
       });
       this.map.addLayer({
          id: 'hubei',
          type: 'raster',
          source: 'hubei',
          'source-layer': 'GDP-0ewvfw'
       });
    }


  }
</script>

<style scoped>
    .top{
        height: 100px;
    }
</style>