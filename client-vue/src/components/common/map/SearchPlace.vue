<template>
    <div>
        <AutoComplete
                :placeholder="mapSearch"
                size="large"
                clearable
                v-model.lazy="query"
                @on-select="handleSelectPlace"
                @on-search="handleSearch">
            <Option
                    v-for="(item, index) in searchItems"
                    :value="item.display_name"
                    :key="index">
                <span>{{item.display_name}}</span>
            </Option>
        </AutoComplete>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import PlaceItem from "../../../types/place-item";
  import NominatimService from "../../../services/nominatim.service";
  import { Emit, Component } from "vue-property-decorator";
  import { Logger } from "../../../services/Logger/index";
  import SENTENCES from "../../../assets/sentences";

  @Component
  export default class SearchPlace extends Vue {
    mapSearch: string = SENTENCES.SIDE_MENU.MAP_SEARCH;
    // 类数据
    private TAG = "SearchPlace";
    // services
    private nominatimService: NominatimService;
    // data
    public query: string;
    public searchItems: PlaceItem[];

    constructor() {
      super();
      // services
      this.nominatimService = new NominatimService();
      // data
      this.query = "";
      this.searchItems = [];
    }

    /* 事件发射 */

    @Emit()
    public onSelect(nominatimItem: PlaceItem) {
    }

    /* 事件处理 */

    // 搜索输入的名称 是否在地理上有对应的 项目
    public async handleSearch(query) {
      console.log(query);
      this.$emit('set-place',this.query);
      // Logger.info(this.TAG, "search", query);
      // // 检空
      // if (!query) {
      //   return;
      // }
      // }
      // this.searchItems = await this.nominatimService.search(query);
    }

    // 选择搜索出的某一地名
    public handleSelectPlace(value) {
      Logger.info(this.TAG, `select ${value}`);
      // this.$emit('set-place',value);
      // let index = this.searchItems.findIndex(
      //   item => item.display_name === value
      // );
      // if (index < 0) {
      //   Logger.error(this.TAG, `not found ${value}`);
      //   return;
      // }
      // let nominatimItem = this.searchItems[index];
      // this.onSelect(nominatimItem);
    }
  }
</script>

<style scoped>

</style>