<template>
    <guide-layout :title="guideTitle" :content="guideContent">
        <router-link :to="{path: '/detect'}">
            可视化
        </router-link>
    </guide-layout>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import GuideLayout from "../common/GuideLayout.vue";

  @Component({
    components: {GuideLayout}
  })

  export default class DetectGuide extends Vue {
    guideTitle: string = "贫困监测";
    guideContent: string = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  }
</script>

<style scoped>
</style>