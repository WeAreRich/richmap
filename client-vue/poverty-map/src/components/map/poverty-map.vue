<template>
  <div id="map-container"></div>
</template>

<script>
import mapboxGL from 'mapbox-gl';
import { MAPBOX_TOKEN } from './constants';

export default {
  mounted() {
    mapboxGL.accessToken = MAPBOX_TOKEN;
    const CONTAINER_ID = 'map-container';
    const map = new mapboxGL.Map({
      container: CONTAINER_ID,
      style: 'mapbox://styles/mapbox/streets-v9',
    });
    map.on('click', () => {});
  },
};
</script>

<style>
#map-container {
  height: 90vh;
}
</style>
