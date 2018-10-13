<template>
    <Form ref="paramsForm" :ruls="rules"
          style="padding:20px;background-color:whitesmoke;margin: 5px;-webkit-border-radius: 5px">
        <FormItem prop="selectedYear">
            <Tooltip title="地图年份">
            <DatePicker
                    v-model="selectedYear"
                    type="year"
                    size="large"
                    style="width: 100%;"
                    :placeholder="mapYear">
            </DatePicker>
            </Tooltip>
        </FormItem>
        <FormItem prop="selectedPlace">
            <!--<search-place v-on:on-select-place="handleSelectPlace"/>-->
            <Select placeholder="数据类型" size="large" v-model="dataType">
                <Option v-for="op in typeOptions" :value="op.value">
                    {{op.label}}
                </Option>
            </Select>
        </FormItem>
        <FormItem>
            <Button
                    type="primary"
                    style="width: 100%"
                    size="large"
                    @click="handleClickSearch">确定
            </Button>
        </FormItem>
    </Form>
</template>

<script>
  import SearchPlace from  './SearchPlace.vue';
  // import { Message } from '../../../services/Message/index';
  import {SENTENCES} from '../../../assets/sentences/index';
  import { Form, FormItem, Button, DatePicker, Select, Option, Tooltip } from 'iview';
  export default {
    components: {
      SearchPlace,
      Form,
      FormItem,
      Button,
      DatePicker,
      Select,
      Option,
        Tooltip
    },
    data(){
      return{
        mapYear: SENTENCES.SIDE_MENU.MAP_YEAR,
        selectedPlace: "",
        selectedYear:  new Date(),
        dataType : '',
        rules : {
        selectedPlace: [
          {required: true, message: '地点不能为空', trigger: 'blur'}
        ],
        selectedYear: [
          {required: true, message: '年份不能为空', trigger: 'blur'}
        ],
        },

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
      }
    },
    mounted(){
    },
    methods:{
      handleClickSearch() {
        if (!this.selectedYear) {
          // (this as any).$Message.error('请选择一个年份');
          this.$Message.error('请选择一个年份');
          return;
        }
        if (!this.dataType) {
          // (this as any).$Message.error('请选择一个年份');
          this.$Message.error('请选择一个类型');
          return;
        }
        this.$emit('child-say', this.selectedYear.getFullYear(), this.dataType);
      }
    }
  }
</script>

<style scoped>

</style>
