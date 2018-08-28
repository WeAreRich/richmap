<template>
    <Layout>
        <search-bar></search-bar>
        <introduction></introduction>
        <Checkbox label="一级行政区边界" @on-change="handleChangeFirstLevelCheckBox">一级行政区边界</Checkbox>
    </Layout>
</template>

<script lang="ts">
  declare var require : (filename,resolve)=>any;
  import { Vue, Component } from 'vue-property-decorator';
  // const SearchBar = (r) => require(['../common/searchbar/SearchBar.vue'],r);
  // const Introduction = (r) => require(['../common/Introduction.vue'],r);
  import SearchBar from '../common/searchbar/SearchBar.vue';
  import Introduction from '../common/Introduction.vue';
  import {Layout,Checkbox} from 'iview'

  @Component({
    components: { SearchBar, Introduction, Layout,Checkbox}
  })

  export default class Home extends Vue {

    public handleChangeFirstLevelCheckBox(){
      console.log("here")
    }
  }
</script>

<style scoped>
</style>