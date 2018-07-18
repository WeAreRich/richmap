<template>
    <base-layout>
        <Sider hide-trigger>
            <fixed-side-menu></fixed-side-menu>
        </Sider>
        <Layout>
            <PovertyMap/>
            <Affix :offset-right="0">
                <consulting></consulting>
            </Affix>
        </Layout>
    </base-layout>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Consulting from '../Consulting.vue';
    import FixedSideMenu from '../FixedSideMenu.vue';
    import PovertyMap from '../map/poverty-map/PovertyMap.vue';

    @Component({
        components: {Consulting, FixedSideMenu, PovertyMap}
    })

    export default class Home extends Vue {
    }
</script>

<style scoped>
</style>