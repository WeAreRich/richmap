<template>
    <base-layout>
        <Sider hide-trigger>
            <fixed-side-menu></fixed-side-menu>
        </Sider>
        <Layout>
             <Affix :offset-right="0">
                <consulting></consulting>
            </Affix>
        </Layout>
    </base-layout>
</template>

<script lang="ts">
    import {Prop, Vue, Component} from 'vue-property-decorator';
    import Consulting from '../Consulting.vue';
    import FixedSideMenu from '../FixedSideMenu.vue';

    @Component({
        components: {Consulting, FixedSideMenu}
    })

    export default class Home extends Vue {
    }
</script>

<style scoped>
</style>