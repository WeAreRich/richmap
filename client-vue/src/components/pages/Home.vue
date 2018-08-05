<template>
    <layout>
        <search-bar/>
    </layout>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import Consulting from "../common/Consulting.vue";
  import SearchBar from "../common/SearchBar/SearchBar.vue";

  @Component({
    components: {Consulting, SearchBar}
  })

  export default class Home extends Vue {
  }
</script>

<style scoped>
</style>