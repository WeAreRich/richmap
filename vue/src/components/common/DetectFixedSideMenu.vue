<template>
    <div class="layout-side">
        <div>
            <div style="background-color:whitesmoke;margin: 5px;-webkit-border-radius: 5px">
                <Select placeholder="查询类型" v-model="queryType">
                    <Option :value="SINGLE_YEAR">单一年份查询</Option>
                    <Option :value="RANGE_YEAR">年份变化查询</Option>
                </Select>
            </div>
            <map-query-component  v-show="queryType === SINGLE_YEAR" v-on:child-say="listenToMyBoy"></map-query-component>
            <div v-show="queryType === RANGE_YEAR" style="background-color:whitesmoke;margin: 5px;-webkit-border-radius: 5px">
                <!--<Cascader :placeholder="dataType" size="large" :data="dataTypeList" v-model="dataTypeValue"-->
                <!--style="padding:20px"></Cascader>-->
                <Select placeholder="数据类型" size="large" v-model="dataType" style="padding: 10px 20px;">
                    <Option v-for="op in typeOptions" :value="op.value">
                        {{op.label}}
                    </Option>
                </Select>
                <Tooltip title="起始年份">
                <DatePicker
                        type="year"
                        :placeholder="startDate"
                        v-model="startYear"
                        style="padding-left:20px;padding-right:20px;"></DatePicker>
                </Tooltip>
                <Tooltip title="终止年份">
                <DatePicker
                        type="year"
                        :placeholder="endDate"
                        v-model="endYear"
                        style="padding-left:20px;padding-right:20px;"></DatePicker>
                </Tooltip>
                <div style="text-align: center;padding: 5px;">
                    <Button type="text" icon="play" size="large" @click="handlePlay" :disabled="isPlaying"></Button>
                    <Button type="text" icon="stop" size="large" @click="handleStop"
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
<script>
  const MapQueryComponent = () => import('./map/MapQueryComponent.vue')
  const SearchPlace = () => import('./map/SearchPlace')
  import {SENTENCES} from '../../assets/sentences/index';
  import { Logger } from '../../services/Logger';
  import { Select, Option, Button, DatePicker, Icon, Tooltip } from 'iview';
  const TAG = 'DetectFixedSideMenu';
  export default {
    components: {
      SearchPlace, MapQueryComponent, Select, Option, Button, DatePicker, Icon, Tooltip
    },
    data(){
      return {
        dataType: '',
        startDate: SENTENCES.SIDE_MENU.START_DATE,
        endDate: SENTENCES.SIDE_MENU.END_DATE,
        mapType: SENTENCES.SIDE_MENU.MAP_TYPE.TITLE,
        mapTypeAdministration:  SENTENCES.SIDE_MENU.MAP_TYPE.ADMINISTRATION_MAP,
        mapPoorState: SENTENCES.SIDE_MENU.MAP_TYPE.POOR_STATE,
        mapPoorDetect: SENTENCES.SIDE_MENU.MAP_TYPE.POOR_DETECT,
        mapPoorService: SENTENCES.SIDE_MENU.MAP_TYPE.POOR_SERVICE,
        // $Message: Message,

        dataTypeList:  [],
        mapTypeList: [],

        startYear:  new Date(),
        endYear: new Date(),

        isPlaying:  false,
        isPC:  true,
        typeOptions : [{
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
        }],
        dataTypeValue: [],
        mapTypeValue: [],

          // 查询方式 是单一年份还是 年份范围动态数据
          SINGLE_YEAR: 1,
          RANGE_YEAR: 2,
          queryType: 0
      }
    },
    mounted(){
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
    },
    methods:{
      listenToMyBoy(year, place) {
        console.log(year + ' ' + place);
        this.$emit('child-say', year, place);
      },
      handleSelectPlace(item) {
        Logger.info(TAG, item);
        this.$emit('on-select-place', item);
      },

      handlePlay() {
        Logger.info(TAG, this.startYear, this.endYear, this.dataType);
        if (!this.startYear || !this.endYear || !this.dataType) {
          this.$Message.error('请确保填写了各项参数');
        } else {
          this.isPlaying = true;
          this.$emit('on-play', this.startYear.getFullYear(), this.endYear.getFullYear(), this.dataType);
        }
      },

      handleStop() {
        this.$emit('on-stop');
        this.isPlaying = false;
      },
        handleChangeQueryType(type) {
          if (this.isPlaying) {
              this.$Message.warn('请等待播放完成');
              return;
          }
          this.queryType = type;
        }

    }
  }
</script>

<style scoped>
</style>
