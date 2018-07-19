<template>
    <div style="width: 80%; margin: auto;">
        <poverty-map @on-map-load="handleOnMapLoad"></poverty-map>
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

  @Component({
    components: {
      MapQueryComponent,
      PovertyMap
    }
  })
  export default class Try extends Vue {
    private TAG = 'Try.vue';

    handleSelect (n) {
      Logger.info(this.TAG, n);
    }

    handleOnMapLoad(map) {
      Logger.info(this.TAG, map);
    }
  }
</script>

<style>
</style>