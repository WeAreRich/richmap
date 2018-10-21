<template>
    <div class="services">
        <div class="container">
            <div style="color: rgb(0, 160, 233);font-size: 24px;margin-top: 40px;text-align: center">
                <h3>助力精准扶贫</h3>
            </div>
            <div style="line-height: 40px;color: rgb(153, 151, 151);font-size: 14px;text-align: center">
                <h6>多途径、高精度，助力精准扶贫政策</h6>
            </div>
            <div style="text-align: center">
                <div style="display: inline-block;margin: 2.5%">
                    <div class="float-box">
                        <Icon type="map" color="#00a0e9" style="font-size: 75px;"></Icon>
                        <div>
                            <span style="font-size: 20px;color: rgb(0, 160, 233);">贫困地图</span>
                        </div>
                        <div>
                            <span style="font-size: 14px;line-height: 29px">动态扶贫相关地图</span>
                        </div>
                        <div>
                            <router-link :to="{path: '/'}">
                                <Button type="primary" style="font-size: 14px;margin-top: 20px">查看详情</Button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div style="display: inline-block;margin: 2.5%">
                    <div class="float-box">
                        <Icon type="stats-bars" color="#00a0e9" style="font-size: 75px;"></Icon>
                        <div>
                            <span style="font-size: 20px;color: rgb(0, 160, 233);">贫困排名</span>
                        </div>
                        <div>
                            <span style="font-size: 14px;line-height: 29px">扶贫相关排名数据</span>
                        </div>
                        <div>
                            <router-link :to="{path: '/guide/rank'}">
                                <Button type="primary" style="font-size: 14px;margin-top: 20px">查看详情</Button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div style="display: inline-block;margin: 2.5%">
                    <div class="float-box">
                        <Icon type="flash" color="#00a0e9" style="font-size: 75px;"></Icon>
                        <div>
                            <span style="font-size: 20px;color: rgb(0, 160, 233);">贫困监测</span>
                        </div>
                        <div>
                            <span style="font-size: 14px;line-height: 29px">贫困数据动态监测</span>
                        </div>
                        <router-link :to="{path: '/guide/detect'}">
                            <div>
                                <Button type="primary" style="font-size: 14px;margin-top: 20px">查看详情</Button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {Button,Icon} from 'iview'
  export default {
    components: {
      Button,Icon
    }
  }
</script>

<style scoped>
    .float-box {
        box-shadow: 0px 0px 1px #000;
        border-radius: 5px;
        margin: 5%;
        padding: 60px 90px;
        text-align: center;
        width: 100%;
    }
</style>
