<template>
    <div style="width: 80%; margin: auto;">
        <poverty-map @on-map-load="handleOnMapLoad"></poverty-map>
        <Button @click="handleChange">change</Button>
        <Button @click="handleHide">hide</Button>
        <ol>
            <li v-for="id in ids">
                {{id}}
                <Button @click="handleShow(id)">显示</Button>
            </li>
        </ol>
        <Button @click="handleAuto">Auto</Button>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import PovertyMap from '../common/map/poverty-map/PovertyMap.vue';
  import { Component } from 'vue-property-decorator';
  // import MapQueryComponent from '../map/MapQueryComponent.vue';
  import { mapStyles } from '../../constants/mapbox';
  import { MapSourceAnimationService } from '../../services/map-source-animation.service';
  import { Logger } from '../../services/Logger';

  @Component({
    components: {
      PovertyMap
    }
  })
  export default class Try extends Vue {
    private TAG = 'Try.vue';
    private mapStyles = mapStyles;
    private map: mapboxgl.Map;
    private animationService: MapSourceAnimationService;
    private id: string;

    urls = ['mapbox://wenxiangdong.0u7nbzi0', 'mapbox://wenxiangdong.dhr5yy3g'];
    ids = [];

    index = 'night-light-2013';

    handleSelect(n) {
      Logger.info(this.TAG, n);
    }

    handleOnMapLoad(map: mapboxgl.Map) {
      Logger.info(this.TAG, 'map loaded', map);
      this.map = map;
    }
    handleChange() {
      Logger.info(this.TAG, 'change');
      // let url = 'mapbox://wenxiangdong.dhr5yy3g';
      this.map.addSource('hubei', {
        type: 'raster',
        url: 'mapbox://vsr2018.2g41qcaf'
      });
      this.map.addLayer({
        id: 'hubei',
        type: 'raster',
        source: 'hubei',
        'source-layer': '1-6zujon'
      });

    }
    handleShow(id) {
      Logger.info(this.TAG, id);
      this.animationService.showLayer(id);
    }
    handleHide() {
      if (!this.animationService) return;
      this.animationService.hideLayer(this.id);
    }

    handleAuto() {
      this.animationService.autoDisplay();
    }
  }
</script>

<style>
</style>