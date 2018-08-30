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

<script>
  import NominatimService from "../../../services/nominatim.service";
  import { Logger } from "../../../services/Logger/index";
  import {SENTENCES} from "../../../assets/sentences/index";
  import {AutoComplete, Option} from 'iview';

  export default {
    components: {
      AutoComplete, Option
    },
    data(){
      return{
        mapSearch:  SENTENCES.SIDE_MENU.MAP_SEARCH,
        // 类数据
        TAG : "SearchPlace",
        // services
        nominatimService: "",
        // data
        query: "",
        searchItems: []
      }
    },
    mounted(){
      this.nominatimService = new NominatimService();
      // data
      this.query = "";
      this.searchItems = [];
    },
    methods:{
      async handleSearch(query) {
        console.log(query);
        // this.$emit('set-place',this.query);
        Logger.info(this.TAG, "search", query);
        // 检空
        if (!query) {
          return;
        }
        try {
          this.searchItems = await this.nominatimService.search(query);
        } catch (e) {}
      },

      // 选择搜索出的某一地名
      handleSelectPlace(value) {
        Logger.info(this.TAG, `select ${value}`);
        this.$emit('set-place',value);
        let index = this.searchItems.findIndex(
          item => item.display_name === value
        );
        if (index < 0) {
          Logger.error(this.TAG, `not found ${value}`);
          return;
        }
        let nominatimItem = this.searchItems[index];
       this.$emit('on-select-place', nominatimItem);
      }
    }
  }
</script>

<style scoped>

</style>
