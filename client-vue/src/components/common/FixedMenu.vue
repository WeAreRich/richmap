<template>
    <Menu mode="horizontal" :theme="primary" active-name="1">
        <div class="layout-logo-text">
            <MenuItem>
                <img class="layout-logo" src="../../assets/logo.jpg"/>
                <h3 class="layout-text">{{logoName}}</h3>
            </MenuItem>
        </div>
        <div class="layout-nav">
            <MenuItem name="1">
                <Icon type="map"></Icon>
                {{menuBar1}}
            </MenuItem>
            <MenuItem name="2">
                <Icon type="stats-bars"></Icon>
                {{menuBar2}}
            </MenuItem>
            <MenuItem name="3">
                <Icon type="flash"></Icon>
                {{menuBar3}}
            </MenuItem>
            <MenuItem name="4">
                <Icon type="android-hand"></Icon>
                {{menuBar4}}
            </MenuItem>
            <MenuItem name="5">
                <Icon type="network"></Icon>
                {{menuBar5}}
            </MenuItem>
        </div>
        <div class="layout-user">
            <Button type="ghost" icon="person" size="large"></Button>
        </div>
    </Menu>
</template>
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
  import SENTENCES from "../../assets/sentences/index";

  @Component
  export default class FixedMenu extends Vue {
    @Prop()
    menuBar1: string = SENTENCES.MENU.MAP;
    @Prop()
    menuBar2: string = SENTENCES.MENU.RANK;
    @Prop()
    menuBar3: string = SENTENCES.MENU.DETECT;
    @Prop()
    menuBar4: string = SENTENCES.MENU.HELP_SERVICE;
    @Prop()
    menuBar5: string = SENTENCES.MENU.TYPICAL_COMPARISONS;
    @Prop()
    logoName: string = SENTENCES.MENU.LOGO_NAME;
  }
</script>

<style scoped>
    .layout-logo-text {
        margin-left: 15px;
        margin-right: 15px;
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

    .layout-text {
        display: table;
        color: #4274a5;
    }

    .layout-nav {
        width: auto;
        margin: 0 0px 0 auto;
    }

    .layout-user {
        text-align: right;
        margin-right: 15px;
    }
</style>