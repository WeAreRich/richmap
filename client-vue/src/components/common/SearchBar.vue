<template>
    <div class="cover">
        <div class="search">
            <Input size="large" search enter-button :placeholder="searchBar" :on-enter=""/>
        </div>
    </div>
</template>
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from "vue-property-decorator";
  import SENTENCES from "../../assets/sentences";
  import { api } from '../../services/api/ApiProvider';

  @Component({})
  export default class SearchBar extends Vue {
    searchBar: string = SENTENCES.SEARCH.TITLE;

    search=async (kw:string)=>{
      await api.searchService(kw);
    }
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