<template>
    <div class="layout-side">
        <div>
            <map-query-component v-on:child-say="listenToMyBoy"></map-query-component>
            <div style="background-color:whitesmoke;margin: 5px;-webkit-border-radius: 5px">
                <!--<Cascader :placeholder="dataType" size="large" :data="dataTypeList" v-model="dataTypeValue"-->
                <!--style="padding:20px"></Cascader>-->
                <Select placeholder="数据类型" size="large" v-model="dataType" style="padding: 10px 20px;">
                    <Option v-for="op in typeOptions" :value="op.value">
                        {{op.label}}
                    </Option>
                </Select>
                <DatePicker
                        type="year"
                        :placeholder="startDate"
                        v-model="startYear"
                        style="padding-left:20px;padding-right:20px;"></DatePicker>
                <DatePicker
                        type="year"
                        :placeholder="endDate"
                        v-model="endYear"
                        style="padding-left:20px;padding-right:20px;"></DatePicker>
                <div style="text-align: center;padding: 5px;">
                    <Button type="text" icon="md-play" size="large" @click="handlePlay" :disabled="isPlaying"></Button>
                    <Button type="text" icon="md-square" size="large" @click="handleStop"
                            :disabled="!isPlaying"></Button>
                </div>
            </div>
            <div style="background-color:whitesmoke;margin: 5px;-webkit-border-radius: 5px">
                <SearchPlace @on-select-place="handleSelectPlace"></SearchPlace>
            </div>
            <!--<Cascader :placeholder="mapType" size="large" :data="mapTypeList" v-model="mapTypeValue"-->
            <!--style="padding:20px"></Cascader>-->
        </div>
    </div>
</template>
<script lang="ts">
  declare var require: (filename, resolve) => any;
  import { Component, Vue } from 'vue-property-decorator';
  import SENTENCES from '../../assets/sentences/index';
  import { MapTypeOption } from '../../models/MapTypeOption';
  import { api } from '../../services/api/ApiProvider';
  // import MapQueryComponent from './map/MapQueryComponent.vue';
  const MapQueryComponent = (r) => require(['./map/MapQueryComponent.vue'], r);
  const SearchPlace = (r) => require(['./map/SearchPlace'], r);
  // import SearchPlace from './map/SearchPlace';
  import { Logger } from '../../services/Logger';
  import { Message } from '../../services/Message';
  import { Select, Option, Button, DatePicker, Icon } from 'iview';
  import store from '../../store';


  const TAG = 'DetectFixedSideMenu';


  @Component({
    components: {SearchPlace, MapQueryComponent, Select, Option, Button, DatePicker, Icon}
  })
  export default class DetectFixedSideMenu extends Vue {
    dataType: string = '';
    startDate: string = SENTENCES.SIDE_MENU.START_DATE;
    endDate: string = SENTENCES.SIDE_MENU.END_DATE;
    mapType: string = SENTENCES.SIDE_MENU.MAP_TYPE.TITLE;
    mapTypeAdministration: string = SENTENCES.SIDE_MENU.MAP_TYPE.ADMINISTRATION_MAP;
    mapPoorState: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_STATE;
    mapPoorDetect: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_DETECT;
    mapPoorService: string = SENTENCES.SIDE_MENU.MAP_TYPE.POOR_SERVICE;

    messageService: Message;

    dataTypeList: MapTypeOption[] = [];
    mapTypeList: MapTypeOption[] = [];

    startYear: Date = new Date();
    endYear: Date = new Date();

    isPlaying: boolean = false;
    isPC: boolean = true;

    public typeOptions = [{
      label: 'DEM',
      value: 'hubeiDEM'
    }, {
      label: 'GDP',
      value: 'hubeiGDP'
    }, {
      label: '坡度',
      value: 'hubeiSlope'
    }, {
      label: '夜间灯光',
      value: 'hubeiNightLight'
    }];


    dataTypeValue: string[] = [];
    mapTypeValue: string[] = [];

    listenToMyBoy(year, place) {
      console.log(year + ' ' + place);
      this.$emit('child-say', year, place);
    }

    constructor(props) {
      super(props);
      console.log('构造了');
    }


    mounted() {
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
      this.messageService = new Message(this);
    };

    handleSelectPlace(item) {
      Logger.info(TAG, item);
      this.$emit('on-select-place', item);
    }

    handlePlay() {
      Logger.info(TAG, this.startYear, this.endYear, this.dataType);
      if (!this.startYear || !this.endYear || !this.dataType) {
        this.messageService.error('请确保填写了各项参数');
      } else {
        this.isPlaying = true;
        this.$emit('on-play', this.startYear.getFullYear(), this.endYear.getFullYear(), this.dataType);
      }
    }

    handleStop() {
      this.$emit('on-stop');
      this.isPlaying = false;
    }
  }
</script>

<style scoped>
</style>