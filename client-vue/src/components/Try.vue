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
  import PovertyMap from './map/poverty-map/PovertyMap.vue';
  import { Component } from 'vue-property-decorator';
  import { Logger } from '../services/Logger';
  import MapQueryComponent from './map/MapQueryComponent.vue';
  import { mapStyles } from '../constants/mapbox';
  import { MapDrawingRectangleService } from '../services/map-drawing-rectangle.service';
  import { MapLocatePositionService } from '../services/map-locate-position.service';
  import { MapSourceAnimationService } from '../services/map-source-animation.service';

  @Component({
    components: {
      MapQueryComponent,
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
      this.animationService = new MapSourceAnimationService(this.map);
      let animation = this.animationService;
      let promises = this.urls.map(
        url => animation.addSource(url)
      );
      this.animationService.addSources(this.urls)
        .then(res => {
          Logger.info(this.TAG, res);
          this.ids = [];
          this.ids = res;
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