<template>
    <Header :style="{position: 'fixed', width: '100%',zIndex:999}">
        <Menu mode="horizontal" theme="dark" active-name="0">
            <router-link :to="{path: '/'}">
                <MenuItem name="0">
                    <img class="layout-logo" src="../../assets/logo.jpg"/>
                    <h3 class="layout-text">
                        {{logoName}}
                    </h3>
                </MenuItem>
            </router-link>
            <div class="layout-nav" v-if="isPC">
                <router-link :to="{path: '/'}">
                    <MenuItem name="1">
                        <Icon type="map"></Icon>
                        {{menuBar1}}
                    </MenuItem>
                </router-link>
                <router-link :to="{path: '/guide/rank'}">
                    <MenuItem name="2">
                        <Icon type="stats-bars"></Icon>
                        {{menuBar2}}
                    </MenuItem>
                </router-link>
                <router-link :to="{path: '/guide/detect'}">
                    <MenuItem name="3">
                        <Icon type="flash"></Icon>
                        {{menuBar3}}
                    </MenuItem>
                </router-link>
                <router-link :to="{path: '/guide/help'}">
                    <MenuItem name="4">
                        <Icon type="android-hand"></Icon>
                        {{menuBar4}}
                    </MenuItem>
                </router-link>
                <router-link :to="{path: '/guide/comparison'}">
                    <MenuItem name="5">
                        <Icon type="network"></Icon>
                        {{menuBar5}}
                    </MenuItem>
                </router-link>
            </div>
            <div class="layout-nav" v-else>
                <Dropdown trigger="click">
                    <p style="display:inline-block;color: white">
                        导航
                    </p>
                    <Icon type="ios-arrow-down" color="white"></Icon>
                    <DropdownMenu slot="list">
                        <DropdownItem>
                            <router-link :to="{path: '/'}">
                                <Icon type="map"></Icon>
                                {{menuBar1}}
                            </router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link :to="{path: '/guide/rank'}">
                                <Icon type="stats-bars"></Icon>
                                {{menuBar2}}
                            </router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link :to="{path: '/guide/detect'}">
                                <Icon type="flash"></Icon>
                                {{menuBar3}}
                            </router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link :to="{path: '/guide/help'}">
                                <Icon type="android-hand"></Icon>
                                {{menuBar4}}
                            </router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link :to="{path: '/guide/comparison'}">
                                <Icon type="network"></Icon>
                                {{menuBar5}}
                            </router-link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </Menu>
    </Header>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import SENTENCES from '../../assets/sentences/index';

  @Component
  export default class BlackMenu extends Vue {
    menuBar1: string = SENTENCES.MENU.MAP;
    menuBar2: string = SENTENCES.MENU.RANK;
    menuBar3: string = SENTENCES.MENU.DETECT;
    menuBar4: string = SENTENCES.MENU.HELP_SERVICE;
    menuBar5: string = SENTENCES.MENU.TYPICAL_COMPARISONS;
    logoName: string = SENTENCES.MENU.LOGO_NAME;

    isPC: boolean = true;

    mounted() {
      this.isPC = document.documentElement.clientWidth > 895;
      const that = this;
      window.onresize = () => {
        that.isPC = document.documentElement.clientWidth > 895;
      };
    }
  }
</script>

<style scoped>
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

    .layout-nav {
        margin: 0 20px 0 auto;
        float: right;
    }

    .layout-text {
        display: table;
        color: white;
    }
</style>