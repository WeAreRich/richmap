<template>
    <guide-layout :title="guideTitle" :content="guideContent"></guide-layout>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import GuideLayout from '../GuideLayout.vue';

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