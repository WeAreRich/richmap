<template>
  <div style="margin: 20px;">
  </div>
</template>

<script>
import PovertyMap from './components/map/poverty-map';

export default {
  name: 'App',
  components: {
    PovertyMap,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
