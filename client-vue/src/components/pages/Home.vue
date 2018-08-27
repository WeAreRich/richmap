<template>
    <layout>
        <search-bar></search-bar>
        <introduction></introduction>
    </layout>
</template>

<script lang="ts">
  declare var require : (filename,resolve)=>any;
  import { Vue, Component } from 'vue-property-decorator';
  const SearchBar = (r) => require(['../common/searchbar/SearchBar.vue'],r);
  const Introduction = (r) => require(['../common/Introduction.vue'],r);
  // import SearchBar from '../common/searchbar/SearchBar.vue';
  // import Introduction from '../common/Introduction.vue';

  @Component({
    components: { SearchBar, Introduction}
  })

  export default class Home extends Vue {
  }
</script>

<style scoped>
</style>