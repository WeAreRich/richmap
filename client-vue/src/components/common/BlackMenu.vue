<template>
    <Header :style="{position: 'fixed', width: '100%',zIndex:999}">
        <Menu mode="horizontal" theme="dark" active-name="0">
            <router-link :to="{path: '/'}">
                <MenuItem name="0">
                    <img class="layout-logo" src="../../assets/logo.png"/>
                    <div class="layout-text">
                        <h3 style="height: 30px;">
                            {{logoName}}
                        </h3>
                        <h6 style="height: 15px;margin-top:-7px">
                            China Poverty Online
                        </h6>
                    </div>
                </MenuItem>
            </router-link>
            <div class="layout-nav" v-if="isPC">
                <router-link :to="{path: '/map'}">
                    <MenuItem name="1">
                        <Icon type="md-map"></Icon>
                        {{menuBar1}}
                    </MenuItem>
                </router-link>
                <router-link :to="{path: '/guide/rank'}">
                    <MenuItem name="2">
                        <Icon type="md-stats"></Icon>
                        {{menuBar2}}
                    </MenuItem>
                </router-link>
                <router-link :to="{path: '/guide/detect'}">
                    <MenuItem name="3">
                        <Icon type="md-flash"></Icon>
                        {{menuBar3}}
                    </MenuItem>
                </router-link>
                <router-link :to="{path: '/guide/help'}">
                    <MenuItem name="4">
                        <Icon type="md-hand"></Icon>
                        {{menuBar4}}
                    </MenuItem>
                </router-link>
                <router-link :to="{path: '/guide/comparison'}">
                    <MenuItem name="5">
                        <Icon type="md-git-network"></Icon>
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
                            <router-link :to="{path: '/map'}">
                                <Icon type="md-map"></Icon>
                                {{menuBar1}}
                            </router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link :to="{path: '/guide/rank'}">
                                <Icon type="md-stats"></Icon>
                                {{menuBar2}}
                            </router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link :to="{path: '/guide/detect'}">
                                <Icon type="md-flash"></Icon>
                                {{menuBar3}}
                            </router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link :to="{path: '/guide/help'}">
                                <Icon type="md-hand"></Icon>
                                {{menuBar4}}
                            </router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link :to="{path: '/guide/comparison'}">
                                <Icon type="md-git-network"></Icon>
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
  import { Header, Icon, Menu, MenuItem, Dropdown, DropdownMenu, DropdownItem } from 'iview';
  import store from '../../store';

  @Component({
    components: {Header, Icon, Menu, MenuItem, Dropdown, DropdownMenu, DropdownItem}
  })
  export default class BlackMenu extends Vue {
    menuBar1: string = SENTENCES.MENU.MAP;
    menuBar2: string = SENTENCES.MENU.RANK;
    menuBar3: string = SENTENCES.MENU.DETECT;
    menuBar4: string = SENTENCES.MENU.HELP_SERVICE;
    menuBar5: string = SENTENCES.MENU.TYPICAL_COMPARISONS;
    logoName: string = SENTENCES.MENU.LOGO_NAME;

    isPC: boolean = true;

    mounted() {
      if (document.documentElement.clientWidth > 895) {
        store.commit('toPC');
      } else {
        store.commit('toMobile');
      }
      let state: any = store.state;
      this.isPC = state.layout.isPC;
      window.onresize = () => {
        if (document.documentElement.clientWidth > 895) {
          store.commit('toPC');
        } else {
          store.commit('toMobile');
        }
        let state: any = store.state;
        this.isPC = state.layout.isPC;
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
        margin-top: -10px;
        padding-left: 10px;
    }
</style>
