<template>
    <div class="layout-side">
        <map-query-component></map-query-component>
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

  export default class FixedSideMenu extends Vue {
    mapType: string = SENTENCES.SIDE_MENU.MAP_TYPE.TITLE;
    mapTypeAdministration: string = SENTENCES.SIDE_MENU.MAP_TYPE.ADMINISTRATION_MAP;
    mapPoorState: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_STATE;
    mapPoorDetect: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_DETECT;
    mapPoorService: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_SERVICE;

    mapTypeList: MapTypeOption[] = [];

    mapTypeValue: string[] = [];

    async mounted() {
      this.mapTypeList = [
        {
          value: this.mapTypeAdministration,
          label: this.mapTypeAdministration,
          children: []
        },
        {
          value: this.mapPoorState,
          label: this.mapPoorState,
          children: await api.dataAnalysisService.getPoorState()
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