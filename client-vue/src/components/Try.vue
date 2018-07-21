<template>
    <div style="width: 80%; margin: auto;">
        <poverty-map @on-map-load="handleOnMapLoad" :mapUrl="mapStyles['night-light-2013']"></poverty-map>
        <div style="width: 400px; float: right; margin-top: 40px;">
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import PovertyMap from './map/poverty-map/PovertyMap.vue';
  import { Component } from 'vue-property-decorator';
  import { Logger } from '../services/Logger';
  import MapQueryComponent from './map/MapQueryComponent.vue';
  import { mapStyles } from '../constants/mapbox';
  import { MapDrawingRectangleService } from "../services/map-drawing-rectangle.service";
  import { MapLocatePositionService } from '../services/map-locate-position.service';

  @Component({
    components: {
      MapQueryComponent,
      PovertyMap
    }
  })
  export default class Try extends Vue {
    private TAG = 'Try.vue';
    private mapStyles = mapStyles;

    handleSelect (n) {
      Logger.info(this.TAG, n);
    }

    handleOnMapLoad(map: mapboxgl.Map) {
      Logger.info(this.TAG, 'map loaded', map);
      let drawingRect = new MapDrawingRectangleService(map, (rec: mapboxgl.LngLatBounds) => {
        Logger.info(this.TAG, rec);
        MapLocatePositionService.locateToBounds(rec, map);
      })
    }
  }
</script>

<style>
</style>