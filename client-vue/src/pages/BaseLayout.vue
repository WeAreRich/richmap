<template>
    <div class="layout" :style="{ 'min-height': pageHeight + 'px'}">
        <Layout>
            <fixed-menu/>
            <Layout>
                <slot/>
            </Layout>
            <fixed-footer/>
        </Layout>
    </div>
</template>

<script lang="ts">
  import { Prop, Vue } from 'vue-property-decorator'
  import FixedMenu from '../components/common/FixedMenu.vue'
  import FixedFooter from '../components/common/FixedFooter.vue'

  export default {
    components: {FixedMenu, FixedFooter}
  };

  export class BaseLayout extends Vue {
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