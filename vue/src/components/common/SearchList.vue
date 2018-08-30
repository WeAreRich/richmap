<template>
    <layout>
        <div style="padding-top: 100px">
            <div style="padding-left: 50px;">
                <Row>
                    <Col span="18">
                    <Input :placeholder="searchBar"
                           style="border-radius: 10px;border: 1px;width:100%;font-size: 24px;font-weight: bold"
                           v-on:input="changeValue"
                           @keyup.enter.native="startSearch" title="search" size="large"/>
                    </Col>
                    <Col span="6" style="text-align: left;vertical-align: center;padding-left:10px;padding-top: 1px">
                    <Button type="primary" style="display: inline-block" icon="ios-search" size="large"
                            @click.native="startSearch">搜索
                    </Button>
                    </Col>
                </Row>
            </div>
            <div style="margin-bottom: 20px;">
                <div v-if="searchTuplesAndKind.length<=0">
                    <Spin size="large" fix></Spin>
                </div>
                <div v-else v-for="searchTuplesAndKindItem in searchTuplesAndKind" :key="searchTuplesAndKindItem.kind">
                    <div style="margin-left: 40px;margin-right: 40px;margin-top:40px">
                        <Button type="primary" size="large" style="border-radius: 0">
                            {{searchTuplesAndKindItem.kind}}({{searchTuplesAndKindItem.result.length}})
                        </Button>
                        <div v-for="searchTuple in searchTuplesAndKindItem.result">
                            <div style="margin-bottom: 10px;margin-top: 10px">
                                <div v-if="searchTuple.picture" style="display: inline-block">
                                    <img :src="searchTuple.picture" style="width: 80px;height: 80px;padding: 5px"/>
                                </div>
                                <div style="display: inline-block;min-height: 80px;float: top;padding: 5px;">
                                    <a style="font-size: 18px;"
                                       :href="searchTuple.href">{{searchTuple.title}}</a>
                                    <div style="font-size: 14px;max-width: 1000px;">
                                        {{searchTuple.abstract_info}}
                                    </div>
                                    <div v-if="searchTuple.author" style="font-size: 10px;color: gray">
                                        {{searchTuple.author}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
  import store from '../../store/index';
  import { api } from '../../services/api/ApiProvider';
  import {Input, Button, Spin, Icon, Row, Col} from 'iview';
  import {SENTENCES} from '../../assets/sentences/index';
  const SearchBar = () => import('../common/searchbar/SearchBar.vue');
  const Introduction = () => import('../common/Introduction.vue');
  export default {
    components: {
      Input, Button, Spin, Icon, Row, Col
    },
    data(){
      return{
        searchBar: SENTENCES.SEARCH.TITLE,
        searchTuplesAndKind:[],
        kw: "",
      }
    },
    async mounted(){
      let state = store.state;
      if (state.search.isSearch) {
        await this.search();
        store.commit('notSearch');
      }
    },
    methods:{
      changeValue(value) {
        this.kw = value;
      },

      async startSearch() {
        store.commit('keyword', this.kw);
        await this.search();
      },

      async search() {
        store.commit('searchResult', []);
        let state = store.state;
        store.commit('searchResult', await api.searchService.searchOne(state.search.kw));
        this.searchTuplesAndKind = state.search.searchTuplesAndKind;
        let tempList = state.search.searchTuplesAndKind;
        let otherResult = await api.searchService.search(state.search.kw);
       otherResult.forEach((result) => tempList.push(result));
       store.commit('searchResult', tempList);
       this.searchTuplesAndKind = state.search.searchTuplesAndKind;
      }
    }
  }
</script>

<style scoped>
</style>
