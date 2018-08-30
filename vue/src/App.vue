<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Button>click</Button>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
