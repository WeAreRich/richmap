<template>
    <div class="layout-side">
        <DatePicker type="year" size="large" :placeholder="mapYear" style="margin:20px"></DatePicker>
        <Select v-model="mapLevelValue" size="large" :placeholder="mapLevel"
                style="padding-left:20px;padding-right:20px;">
            <Option v-for="item in mapLevelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select
                v-model="mapSearchValue"
                :placeholder="mapSearch"
                filterable
                remote
                :remote-method="mapSearchMethod"
                style="padding:20px"
                size="large">
            <Option v-for="item in mapAreaList" :value="item" :key="item">{{item}}</Option>
        </Select>
        <Cascader :placeholder="mapType" size="large" :data="mapTypeList" v-model="mapTypeValue"
                  style="padding:20px"></Cascader>
    </div>
</template>
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
  import SENTENCES from "../../assets/sentences/index";
  import { MapLevel } from "../../models/MapLevel";

  interface MapLevelOption {
    value: MapLevel;
    label: string;
  }

  interface MapTypeOption {
    value: string;
    label: string;
    children: MapTypeOption[];
  }

  @Component
  export default class FixedSideMenu extends Vue {
    @Prop()
    onlineConsultTitle: string = SENTENCES.ONLINE_CONSULT.TITLE;
    @Prop()
    onlineConsultContent: string = SENTENCES.ONLINE_CONSULT.CONTENT;
    @Prop()
    mapYear: string = SENTENCES.SIDE_MENU.MAP_YEAR;
    @Prop()
    mapLevel: string = SENTENCES.SIDE_MENU.MAP_LEVEL.TITLE;
    @Prop()
    mapLevelProvince: string = SENTENCES.SIDE_MENU.MAP_LEVEL.PROVINCE;
    @Prop()
    mapLevelCity: string = SENTENCES.SIDE_MENU.MAP_LEVEL.CITY;
    @Prop()
    mapLevelCounty: string = SENTENCES.SIDE_MENU.MAP_LEVEL.COUNTY;
    @Prop()
    mapSearch: string = SENTENCES.SIDE_MENU.MAP_SEARCH;
    @Prop()
    mapType: string = SENTENCES.SIDE_MENU.MAP_TYPE.TITLE;
    @Prop()
    mapTypeAdministration: string = SENTENCES.SIDE_MENU.MAP_TYPE.ADMINISTRATION_MAP;
    @Prop()
    mapPoorState: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_STATE;
    @Prop()
    mapPoorDetect: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_DETECT;
    @Prop()
    mapPoorService: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_SERVICE;

    @Prop()
    mapLevelList: MapLevelOption[] = [
      {
        value: MapLevel.PROVINCE,
        label: this.mapLevelProvince
      },
      {
        value: MapLevel.CITY,
        label: this.mapLevelCity
      },
      {
        value: MapLevel.COUNTY,
        label: this.mapLevelCounty
      }
    ];

    @Prop()
    mapAreaList: string[] = [
      "中国",
      "江苏",
      "南京"
    ];

    @Prop()
    mapTypeList: MapTypeOption[] = [
      {
        value: this.mapTypeAdministration,
        label: this.mapTypeAdministration,
        children: []
      },
      {
        value: this.mapPoorState,
        label: this.mapPoorState,
        children: [
          {
            value: "综合贫困排名",
            label: "综合贫困排名",
            children: [
              {
                value: "VSR指标排名",
                label: "VSR指标排名",
                children: [
                  {
                    value: "夜间灯光指标",
                    label: "夜间灯光指标",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            value: "分类贫困排名",
            label: "分类贫困排名",
            children: [
              {
                value: "经济指标排名",
                label: "经济指标排名",
                children: [
                  {
                    value: "未来收入",
                    label: "未来收入",
                    children: []
                  }
                ]
              }
            ]
          },
        ]
      }
      ,
      {
        value: this.mapPoorDetect,
        label:
        this.mapPoorDetect,
        children:
          []
      }
      ,
      {
        value: this.mapPoorService,
        label:
        this.mapPoorService,
        children:
          []
      }
    ]

    @Prop()
    mapLevelValue: MapLevel = MapLevel.PROVINCE;
    @Prop()
    mapSearchValue: string = "";
    @Prop()
    mapTypeValue: string[] = [];

    mapSearchMethod() {

    }
  }
</script>

<style scoped>
    .layout-side {
        background-color: white;
    }
</style>