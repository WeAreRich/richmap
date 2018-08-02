<template>
    <layout>
    </layout>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import Consulting from '../common/Consulting.vue';

  @Component({
    components: {Consulting}
  })

  export default class Home extends Vue {
  }
</script>

<style scoped>
</style>