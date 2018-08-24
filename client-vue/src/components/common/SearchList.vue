<template>
    <div style="margin-top: 100px">
        <div v-for="searchTuplesAndKindItem in searchTuplesAndKind" :key="searchTuplesAndKindItem.kind">
            <div style="margin-left: 40px;margin-right: 40px;margin-top:40px">
                <Button type="primary" size="large" style="border-radius: 0">
                    {{searchTuplesAndKindItem.kind}}({{searchTuplesAndKindItem.result.length}})
                </Button>
                <div v-for="searchTuple in searchTuplesAndKindItem.result">
                    <div style="margin-top: 20px;">、
                        <a style="font-size: 16px;"
                           :href="searchTuple.href">{{searchTuple.title}}</a>
                        <div style="font-size: 12px;">
                            {{searchTuple.abstract_info}}
                        </div>
                        <div style="font-size: 10px;color: gray">
                            {{searchTuple.author}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import store from '../../store';
  import { api } from '../../services/api/ApiProvider';
  import { SearchResult } from '../../models/SearchResult';

  @Component
  export default class SearchList extends Vue {
    searchTuplesAndKind: SearchResult[] = [];

    async mounted() {
      let state: any = store.state;
      console.log(await api.searchService.search(state.search.kw));
      this.searchTuplesAndKind = await api.searchService.search(state.search.kw);
    }
  }
</script>

<style scoped>

</style>