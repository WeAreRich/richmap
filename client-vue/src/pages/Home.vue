<template>
    <div class="layout" :style="{ 'min-height': pageHeight + 'px'}">
        <Layout>
            <fixed-menu/>
            <Layout>
                <Sider hide-trigger>
                    <fixed-side-menu/>
                </Sider>
                <Layout>
                    <Affix :offset-right="0">
                        <consulting/>
                    </Affix>
                </Layout>
            </Layout>
            <fixed-footer/>
        </Layout>
    </div>
</template>

<script lang="ts">
  import { Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
  import FixedMenu from '../components/common/FixedMenu.vue'
  import Consulting from '../components/common/Consulting.vue'
  import FixedSideMenu from '../components/common/FixedSideMenu'
  import FixedFooter from '../components/common/FixedFooter'

  export default {
    components: {FixedMenu, Consulting, FixedSideMenu, FixedFooter}
  };

  export class Home extends Vue {
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
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
</style>