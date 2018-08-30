<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {Button} from 'iview'
export default {
  name: 'App',
  components: {
    Button
  }
}
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

</style>
