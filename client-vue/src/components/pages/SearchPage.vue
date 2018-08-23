<template>
    <layout>
        <search-list></search-list>
    </layout>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import SearchList from '../common/SearchList';

  @Component({
    components: {SearchList}
  })

  export default class SearchPage extends Vue {
  }
</script>

<style scoped>

</style>