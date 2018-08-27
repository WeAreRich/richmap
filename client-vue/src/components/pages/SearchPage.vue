<template>
    <layout>
        <search-list></search-list>
    </layout>
</template>

<script lang="ts">
  declare var require : (filename,resolve)=>any;
  import { Vue, Component } from 'vue-property-decorator';
  import SearchList from '../common/SearchList';
  //   const SearchList = (r) => require(['../common/SearchList'], r);

  @Component({
    components: {SearchList}
  })

  export default class SearchPage extends Vue {
  }
</script>

<style scoped>

</style>