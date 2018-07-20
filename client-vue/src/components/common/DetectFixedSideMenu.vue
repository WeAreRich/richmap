<template>
    <div class="layout-side">
        <map-query-component></map-query-component>
        <div style="background-color:whitesmoke;margin: 5px;-webkit-border-radius: 5px">
            <Cascader :placeholder="dataType" size="large" :data="dataTypeList" v-model="dataTypeValue"
                      style="padding:20px"></Cascader>
            <DatePicker type="year" :placeholder="startDate" style="padding-left:20px;padding-right:20px;"></DatePicker>
            <DatePicker type="year" :placeholder="endDate" style="padding-left:20px;padding-right:20px;"></DatePicker>
            <div style="text-align: center">
                <Button type="text" icon="play" size="large"></Button>
                <Button type="text" icon="stop" size="large"></Button>
            </div>
        </div>
        <Cascader :placeholder="mapType" size="large" :data="mapTypeList" v-model="mapTypeValue"
                  style="padding:20px"></Cascader>
    </div>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import SENTENCES from "../../assets/sentences/index";
  import { MapTypeOption } from "../../models/MapTypeOption";
  import { api } from "../../services/api/ApiProvider";
  import MapQueryComponent from "./map/MapQueryComponent.vue";

  @Component({
    components: {MapQueryComponent}
  })

  export default class DetectFixedSideMenu extends Vue {
    dataType: string = SENTENCES.SIDE_MENU.DATA_TYPE;
    startDate: string = SENTENCES.SIDE_MENU.START_DATE;
    endDate: string = SENTENCES.SIDE_MENU.END_DATE;
    mapType: string = SENTENCES.SIDE_MENU.MAP_TYPE.TITLE;
    mapTypeAdministration: string = SENTENCES.SIDE_MENU.MAP_TYPE.ADMINISTRATION_MAP;
    mapPoorState: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_STATE;
    mapPoorDetect: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_DETECT;
    mapPoorService: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_SERVICE;

    dataTypeList: MapTypeOption[] = [];
    mapTypeList: MapTypeOption[] = [];


    dataTypeValue: string[] = [];
    mapTypeValue: string[] = [];

    async mounted() {
      this.dataTypeList = await api.dataAnalysisService.getPoorState();
      this.mapTypeList = [
        {
          value: this.mapTypeAdministration,
          label: this.mapTypeAdministration,
          children: []
        },
        {
          value: this.mapPoorState,
          label: this.mapPoorState,
          children: this.dataTypeList
        }
        ,
        {
          value: this.mapPoorDetect,
          label: this.mapPoorDetect,
          children: []
        }
        ,
        {
          value: this.mapPoorService,
          label: this.mapPoorService,
          children: []
        }
      ];
    };
  }
</script>

<style scoped>
    .layout-side {
        background-color: white;
    }
</style>