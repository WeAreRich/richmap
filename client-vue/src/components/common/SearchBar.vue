<template>
    <div class="cover">
        <div class="search">
            <Input clearable v-model="kw" size="large" search enter-button :placeholder="searchBar"
                   :on-search="startSearch()"/>
        </div>
    </div>
</template>
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from "vue-property-decorator";
  import SENTENCES from "../../assets/sentences";
  import { api } from "../../services/api/ApiProvider";

  @Component
  export default class SearchBar extends Vue {
    searchBar: string = SENTENCES.SEARCH.TITLE;
    kw: string = "";

    startSearch = async () => {
      console.log(this.kw);
      const result = await api.searchService.search(this.kw);
      console.log(result);
    };
  }
</script>
<style>
    .cover {
        background-color: white;
    }

    .cover .search {
        padding: 10% 20% 20%;
    }
</style>