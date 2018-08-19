<template>
    <layout>
        <search-bar></search-bar>
        <introduction></introduction>
    </layout>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import Consulting from '../common/Consulting.vue';
  import SearchBar from '../common/searchbar/SearchBar.vue';
  import Introduction from '../common/introduce/Introduction.vue';

  @Component({
    components: {Consulting, SearchBar, Introduction}
  })

  export default class Home extends Vue {
  }
</script>

<style scoped>
</style>