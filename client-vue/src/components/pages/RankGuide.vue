<template>
    <layout>
        <Sider style="background-color: white" hide-trigger>
            <Cascader :placeholder="dataType" size="large" :data="dataTypeList" v-model="mapTypeValue"
                      style="padding:20px"></Cascader>
        </Sider>
        <Layout :style="{padding: '0 50px',margin:'20px'}">
            <div style="text-align: center;margin: 20px;">
                <Row>
                    <Col span="6">
                    <DatePicker
                            v-model="selectedYear"
                            type="year"
                            size="large"
                            style="text-align: left;padding: 20px;display: inline;"
                            :placeholder="dataYear">
                    </DatePicker>
                    </Col>
                    <div style="padding: 20px;">
                        <h1 style="text-align: center;display: inline;">
                            {{guideTitle}}
                        </h1>
                        <Button type="text" icon="document-text" size="large"
                                style="padding-left: 20px;">
                            导出
                        </Button>
                        <Button type="text" icon="connection-bars" size="large" style="padding-left: 20px;">
                            <router-link :to="{path: '/detect'}">
                                可视化
                            </router-link>
                        </Button>
                        <Button type="text" icon="ios-printer" size="large" style="padding-left: 20px;">
                            打印
                        </Button>
                    </div>
                </Row>
            </div>
            <Card>
                <div style="min-height: 200px;">
                    {{guideContent}}
                </div>
                <rank-sheet></rank-sheet>
                <consulting></consulting>
            </Card>
        </Layout>
    </layout>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import Consulting from "../common/Consulting.vue";
  import RankSheet from "../common/RankSheet.vue";
  import SENTENCES from "../../assets/sentences";
  import { MapTypeOption } from "../../models/MapTypeOption";
  import { api } from "../../services/api/ApiProvider";

  @Component({
    components: {Consulting, RankSheet}
  })

  export default class RankGuide extends Vue {
    dataYear: string = SENTENCES.GUIDE.DATA_YEAR;
    dataType: string = SENTENCES.SIDE_MENU.DATA_TYPE;

    guideTitle: string = "贫困排名";
    guideContent: string = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    dataTypeList: MapTypeOption[] = [];

    selectedYear: number;

    async mounted() {
      this.dataTypeList = await api.dataAnalysisService.getPoorState();
    };
  }
</script>

<style scoped>
</style>