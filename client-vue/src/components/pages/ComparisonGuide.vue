<template>
    <layout>
        <Sider style="background-color: white" hide-trigger>
            <Cascader :placeholder="dataType" size="large" :data="instanceList" v-model="instanceVaule"
                      style="padding:20px"></Cascader>
        </Sider>
        <Layout :style="{padding: '0 50px',margin:'20px'}">
            <div style="text-align: center;margin: 20px;">
                <div style="padding: 20px;">
                    <h1 style="text-align: center;display: inline;">
                        {{instanceTitle}}
                    </h1>
                </div>
            </div>
            <Card>
                <word-loader></word-loader>
                <consulting></consulting>
            </Card>
        </Layout>
    </layout>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import Consulting from "../common/Consulting.vue";
  import WordLoader from "../common/WordLoader.vue";
  import { MapTypeOption } from "../../models/MapTypeOption";

  @Component({
    components: {Consulting, WordLoader}
  })

  export default class ComparisonGuide extends Vue {
    instanceTitle: string = "案例1";
    instanceList: MapTypeOption[] = [];

    instanceVaule: string[] = [];

    async mounted() {
      this.instanceList = [
        {
          value: "自然资源丰富县",
          label: "自然资源丰富县",
          children: [{
            value: "xxx县",
            label: "xxx县",
            children: []
          }]
        },
        {
          value: "旅游资源丰富县",
          label: "自然资源丰富县",
          children: [{
            value: "xxx县",
            label: "xxx县",
            children: []
          }]
        }
      ];
    };
  }
</script>

<style scoped>
</style>