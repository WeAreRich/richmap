<template>
    <Form ref="paramsForm" :ruls="rules"
          style="padding:20px;background-color:whitesmoke;margin: 5px;-webkit-border-radius: 5px">
        <FormItem prop="selectedYear">
            <DatePicker
                    v-model="selectedYear"
                    type="year"
                    size="large"
                    style="width: 100%;"
                    :placeholder="mapYear">
            </DatePicker>
        </FormItem>
        <FormItem prop="selectedPlace">
            <search-place v-on:set-place="handleSelectPlace"/>
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

<script lang="ts">
  import Vue from "vue";
  import { Component, Emit } from "vue-property-decorator";
  import SearchPlace from "./SearchPlace.vue";
  import PlaceItem from "../../../types/place-item";
  import { Message } from "../../../services/Message/index";
  import SENTENCES from "../../../assets/sentences";

  @Component({
    components: {
      SearchPlace
    }
  })

  export default class MapQueryComponent extends Vue {
    mapYear: string = SENTENCES.SIDE_MENU.MAP_YEAR;
    public selectedPlace: PlaceItem;
    public selectedYear: number;
    public rules: {
      selectedPlace: [
        { required: true, message: "地点不能为空", trigger: "blur" }
        ],
      selectedYear: [
        { required: true, message: "年份不能为空", trigger: "blur" }
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
    @Emit('child-say')
    onSubmit() {

    }

    /* handler */
    handleSelectPlace(place: PlaceItem) {
      this.selectedPlace = place;
    }

    handleClickSearch() {
      if (!this.selectedYear) {
        // (this as any).$Message.error('请选择一个年份');
        this.messageService.error("请选择一个年份");
        return;
      }
      if (!this.selectedPlace) {
        // (this as any).$Message.error('请选择一个年份');
        this.messageService.error("请选择一个地点");
        return;
      }
      this.$emit('child-say', this.selectedYear, this.selectedPlace);
      // this.onSubmit();
    }
  }
</script>

<style scoped>

</style>