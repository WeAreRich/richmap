<template>
    <base-layout>
        <Sider hide-trigger>
            <fixed-side-menu></fixed-side-menu>
        </Sider>
        <Layout>
            <Affix :offset-right="0">
                <consulting></consulting>
            </Affix>
        </Layout>s
    </base-layout>
</template>

<script lang="ts">
    import {Prop, Vue, Component} from 'vue-property-decorator';
    import {Consulting} from '../Consulting';
    import {FixedSideMenu} from '../FixedSideMenu';

    @Component({
        components: {Consulting, FixedSideMenu}
    })

    export default class Home extends Vue {
        @Prop()
        pageHeight: string = '100';

        mounted() {
            const that = this;
            this.pageHeight = `${document.documentElement.clientHeight}px`;
            window.onresize = function getSize() {
                that.pageHeight = `${document.documentElement.clientHeight}px`;
            };
        }
    }
</script>

<style scoped>
</style>