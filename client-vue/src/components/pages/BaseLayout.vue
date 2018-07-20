<template>
    <div class="layout" :style="{ 'min-height': pageHeight + 'px'}">
        <Layout>
            <fixed-menu/>
            <Layout>
                <router-view>
                    <slot/>
                </router-view>
            </Layout>
            <fixed-footer/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import FixedMenu from '../common/FixedMenu.vue';
    import FixedFooter from '../common/FixedFooter.vue';

    @Component({
        components: {FixedMenu, FixedFooter}
    })

    export default class BaseLayout extends Vue {
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
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
</style>