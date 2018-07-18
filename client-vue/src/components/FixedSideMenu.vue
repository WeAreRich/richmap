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
    import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
    import SENTENCES from "../assets/sentences/index";
    import {MapLevel} from "../models/MapLevel";
    import {MapTypeOption} from "../models/MapTypeOption";
    import {api} from "../services/api/ApiProvider";

    interface MapLevelOption {
        value: MapLevel;
        label: string;
    }

    @Component
    export default class FixedSideMenu extends Vue {
        onlineConsultTitle: string = SENTENCES.ONLINE_CONSULT.TITLE;
        onlineConsultContent: string = SENTENCES.ONLINE_CONSULT.CONTENT;
        mapYear: string = SENTENCES.SIDE_MENU.MAP_YEAR;
        mapLevel: string = SENTENCES.SIDE_MENU.MAP_LEVEL.TITLE;
        mapLevelProvince: string = SENTENCES.SIDE_MENU.MAP_LEVEL.PROVINCE;
        mapLevelCity: string = SENTENCES.SIDE_MENU.MAP_LEVEL.CITY;
        mapLevelCounty: string = SENTENCES.SIDE_MENU.MAP_LEVEL.COUNTY;
        mapSearch: string = SENTENCES.SIDE_MENU.MAP_SEARCH;
        mapType: string = SENTENCES.SIDE_MENU.MAP_TYPE.TITLE;
        mapTypeAdministration: string = SENTENCES.SIDE_MENU.MAP_TYPE.ADMINISTRATION_MAP;
        mapPoorState: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_STATE;
        mapPoorDetect: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_DETECT;
        mapPoorService: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_SERVICE;

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

        mapAreaList: string[] = [
            "中国",
            "江苏",
            "南京"
        ];

        mapTypeList: MapTypeOption[] = [];


        mapLevelValue: MapLevel = MapLevel.PROVINCE;
        mapSearchValue: string = "";
        mapTypeValue: string[] = [];

        mapSearchMethod = () => {
        };

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