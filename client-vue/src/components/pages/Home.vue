<template>
    <layout>
        <sider style="background-color: white" hide-trigger>
            <fixed-side-menu></fixed-side-menu>
        </sider>
        <layout>
            <poverty-map/>
            <consulting></consulting>
        </layout>
    </layout>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Consulting from '../common/Consulting.vue';
    import FixedSideMenu from '../common/FixedSideMenu.vue';
    import PovertyMap from '../common/map/poverty-map/PovertyMap.vue';

    @Component({
        components: {Consulting, FixedSideMenu, PovertyMap}
    })

    export default class Home extends Vue {
    }
</script>

<style scoped>
</style>