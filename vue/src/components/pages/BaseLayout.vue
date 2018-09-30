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

<script>
  import {Layout} from 'iview'

  const BlackMenu = () => import("../common/BlackMenu.vue")
  const BlackFooter = () => import("../common/BlackFooter.vue")
  export default {
    components: {
      Layout, BlackMenu, BlackFooter
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
        min-height: 100vh;
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
