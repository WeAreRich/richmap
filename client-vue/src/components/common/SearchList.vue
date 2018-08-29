<template>
    <layout>
        <div style="padding-top: 100px">
            <div style="padding-left: 30px;">
                <Input :placeholder="searchBar"
                       style="border-radius: 10px;border: 1px;width:90%;font-size: 24px;height:200%;font-weight: bold"
                       v-on:input="changeValue"
                       @keyup.enter.native="startSearch" title="search" size="large"/>
                <Button type="primary" icon="ios-search" size="large" @click.native="startSearch">搜索</Button>
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

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import store from '../../store';
  import { api } from '../../services/api/ApiProvider';
  import { SearchResult } from '../../models/SearchResult';
  import { Input, Button, Spin, Icon } from 'iview';
  import SENTENCES from '../../assets/sentences';

  @Component({
    components: {Input, Button, Spin, Icon}
  })
  export default class SearchList extends Vue {
    searchBar: string = SENTENCES.SEARCH.TITLE;
    searchTuplesAndKind: SearchResult[] = [];
    kw: string;


    async mounted() {
      let state: any = store.state;
      if (state.search.isSearch) {
        await this.search();
        store.commit('notSearch');
      }
    }

    changeValue(value) {
      this.kw = value;
    };

    async startSearch() {
      store.commit('keyword', this.kw);
      await this.search();
    };

    async search() {
      store.commit('searchResult', []);
      let state: any = store.state;
      store.commit('searchResult', await api.searchService.searchOne(state.search.kw));
      this.searchTuplesAndKind = state.search.searchTuplesAndKind;
      let tempList = state.search.searchTuplesAndKind;
      let otherResult = await api.searchService.search(state.search.kw);
      otherResult.forEach((result) => tempList.push(result));
      store.commit('searchResult', tempList);
      this.searchTuplesAndKind = state.search.searchTuplesAndKind;
    }
  }
</script>

<style scoped>
</style>