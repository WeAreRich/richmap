<template>
    <layout>
        <Sider style="background-color: white" hide-trigger>
            <detect-fixed-side-menu></detect-fixed-side-menu>
        </Sider>
        <Layout>
            <poverty-map/>
            <consulting></consulting>
        </Layout>
    </layout>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Consulting from '../common/Consulting.vue';
    import DetectFixedSideMenu from '../common/DetectFixedSideMenu.vue';
    import PovertyMap from '../common/map/poverty-map/PovertyMap.vue';

    @Component({
        components: {Consulting, DetectFixedSideMenu, PovertyMap}
    })

    export default class Detect extends Vue {
    }
</script>

<style scoped>
</style>