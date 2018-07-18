<template>
    <div class="layout-side">
        <DatePicker type="year" :placeholder="mapYear" style="margin:20px"></DatePicker>
        <Select v-model="mapLevelValue" :placeholder="mapLevel" style="padding-left:20px;padding-right:20px;">
            <Option v-for="item in mapLevelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select
                v-model="mapSearchValue"
                filterable
                remote
                :remote-method="mapSearchMethod">
            <Option v-for="(option, index) in mapValue" :value="option.value" :key="index">{{option.label}}</Option>
        </Select>
        <Input v-model="mapSearchValue" :placeholder="mapSearch" style="padding:20px">
        <Button slot="append" icon="ios-search"></Button>
        </Input>
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
    mapLevelValue: MapLevel = MapLevel.PROVINCE;
    @Prop()
    mapSearchValue: string = "";

    mapSearchMethod() {

    }
  }
</script>

<style scoped>
    .layout-side {
        background-color: white;
    }
</style>