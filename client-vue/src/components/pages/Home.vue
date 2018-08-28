<template>
    <Layout>
        <search-bar></search-bar>
        <introduction></introduction>
    </Layout>
</template>

<script lang="ts">
  declare var require : (filename,resolve)=>any;
  import Vue from 'Vue'
  import { Component } from 'vue-property-decorator';
  // const SearchBar = (r) => require(['../common/searchbar/SearchBar.vue'],r);
  // const Introduction = (r) => require(['../common/Introduction.vue'],r);
  import SearchBar from '../common/searchbar/SearchBar.vue';
  import Introduction from '../common/Introduction.vue';
  import {Layout,Checkbox} from 'iview'

  @Component({
    components: { SearchBar, Introduction, Layout,Checkbox}
  })

  export default class Home extends Vue {

      constructor(){
        super();
        console.log('here')
      }

      mounted(){
         console.log('lawlawlaw')
      }
      created(){
        console.log('lawlawlaw')
      }
  }
</script>

<style scoped>
</style>