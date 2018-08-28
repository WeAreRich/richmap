<template>
    <div class="layout">
        <div>
            <Layout style="min-height: 100vh;">
                <black-menu></black-menu>
                <router-view>
                    <slot/>
                </router-view>
            </Layout>
        </div>
        <black-footer></black-footer>
    </div>
</template>

<script lang="ts">
  declare var require : (filename,resolve)=>any;
  import { Vue, Component } from "vue-property-decorator";
  // import BlackMenu from "../common/BlackMenu.vue";
  // import BlackFooter from "../common/BlackFooter.vue";
  import {Layout} from 'iview';

  const BlackMenu = (r) => require(["../common/BlackMenu.vue"],r);
  const BlackFooter = (r) => require(["../common/BlackFooter.vue"],r);

  @Component({
    components: {BlackMenu, BlackFooter, Layout}
  })

  export default class BaseLayout extends Vue {
  }
</script>

<style scoped>

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        min-height: 100vh;
    }

    .layout-header-bar {
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo {
        width: auto;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 13px;
        left: 20px;
        margin-right: 25px;
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .menu-icon {
        transition: all .3s;
    }

    .rotate-icon {
        transform: rotate(-90deg);
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>