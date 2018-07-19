<template>
    <Form ref="paramsForm" :ruls="rules">
        <h2>搜索参数</h2>
        <FormItem prop="selectedYear">
            <DatePicker
                    v-model="selectedYear"
                    type="year"
                    size="large"
                    style="width: 100%;"
                    placeholder="选择年份">
            </DatePicker>
        </FormItem>
        <FormItem prop="selectedPlace">
            <search-place @on-select="handleSelectPlace"/>
        </FormItem>
        <FormItem>
            <Button
                    type="ghost"
                    style="width: 100%;"
                    @click="handleClickSearch">确定
            </Button>
        </FormItem>
    </Form>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Emit } from 'vue-property-decorator';
  import SearchPlace from './SearchPlace.vue';
  import PlaceItem from '../../types/place-item';
  import { Message } from '../../services/Message';

  @Component({
    components: {
      SearchPlace
    }
  })
  export default class MapQueryComponent extends Vue {
    public selectedPlace: PlaceItem;
    public selectedYear: number;
    public rules: {
      selectedPlace: [
        { required: true, message: '地点不能为空', trigger: 'blur' }
        ],
      selectedYear: [
        { required: true, message: '年份不能为空', trigger: 'blur' }
        ],
    };

    private messageService: Message;

    constructor() {
      super();
      this.messageService = new Message(this);
    }

    /* emit */
    /**
     * 表格填写提交，参数完成
     */
    @Emit()
    onSubmit() {}

    /* handler */
    handleSelectPlace(place: PlaceItem) {
      this.selectedPlace = place;
    }

    handleClickSearch() {
      if (!this.selectedYear) {
        // (this as any).$Message.error('请选择一个年份');
        this.messageService.error('请选择一个年份');
        return;
      }
      if (!this.selectedPlace) {
        // (this as any).$Message.error('请选择一个年份');
        this.messageService.error('请选择一个地点');
        return;
      }
      this.onSubmit();
    }
  }
</script>

<style scoped>
    .outer {
        width: 100%;
        padding: 10px;
    }

    .item-wrapper {
        margin: 10px 0;
    }
</style>