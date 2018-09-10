<template>
    <layout>
        <div style="height: 100vh;">
            <!--<div>-->
            <div class="banner banner-1"></div>
            <!--</div>-->
            <div class="search">
                <h1 style="color: orange;font-size:45px;">
                    中国贫困在线
                </h1>
                <h2 style="color: orange;font-size:24px;">China Poverty Online</h2>
                <h3 style="color: white;font-size:24px;padding: 30px">
                    —— 打造第一助贫服务平台 ——
                </h3>
                <Row>
                    <Col span="18" style="text-align: right">
                    <Input :placeholder="searchBar"
                           style="border-radius: 10px;border: 1px;width:80%;font-size: 24px;font-weight: bold"
                           v-on:input="changeValue" search
                           @keyup.enter.native="startSearch" title="search" size="large"/>
                    </Col>
                    <Col span="6" style="text-align: left;vertical-align: center;padding-left:10px;padding-top: 1px">
                    <Button type="primary" style="display: inline-block" icon="ios-search" size="large"
                            @click.native="startSearch">搜索
                    </Button>
                    </Col>
                </Row>
            </div>
        </div>
    </layout>
</template>
<script>
import { Button, Input, Layout, Col, Row } from 'iview'
import store from '../../../store/index'
import {SENTENCES} from '../../../assets/sentences/index'
export default {
  components: {
    Button, Input, Layout, Col, Row
  },
  data () {
    return {
      searchBar: SENTENCES.SEARCH.TITLE,
      kw: ''
    }
  },
  methods: {
    changeValue (value) {
      this.kw = value
    },
    startSearch () {
      this['$router'].push({path: 'search', params: {kw: this.kw}})
      store.commit('keyword', this.kw)
      store.commit('toSearch')
    }
  }
}
</script>
<style scoped>
    .search {
        text-align: center;
        position: absolute;
        top: 354px;
        width: 50%;
        margin-left: 25%;
    }

    @media screen and (max-device-width: 500px) {
        .search {
            width: 70%;
            margin-left: 15%;
        }
    }

    .banner-1 {
        background: url(../../../assets/images/background.jpg) fixed;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        -ms-background-size: cover;
        min-height: 100%;
    }
</style>
