<template>
    <div>
        <div>
            <div class="banner banner-1"></div>
        </div>
        <div class="search">
       <span class="input input--kyo">
		   <input class="input__field input__field--kyo" :placeholder="searchBar" style="font-size: 20px"
                  type="text"
                  @keyup.enter="startSearch()"
                  @input="changeValue"/>
		   <label class="input__label input__label--kyo">
		   </label>
	   </span>
        </div>
    </div>
</template>
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from "vue-property-decorator";
  import SENTENCES from "../../../assets/sentences/index";
  import { api } from "../../../services/api/ApiProvider";

  @Component
  export default class SearchBar extends Vue {
    searchBar: string = SENTENCES.SEARCH.TITLE;
    kw: string;

    changeValue = (value) => {
      this.kw = value.target.value;
    };

    startSearch = async () => {
      console.log(this.kw);
      const result = await api.searchService.search(this.kw);
      console.log(result);
    };
  }
</script>
<style>
    @import "./css/component.css";
    @import "./css/demo.css";
    @import "./css/normalize.css";

    .search {
        text-align: center;
        position: fixed;
        top: 354px;
        margin-left: 38%;
        margin-right: 38%;
    }

    .banner-1 {
        background: url(../../../assets/images/banner-1.jpg) no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        -ms-background-size: cover;
        min-height: 780px;
    }
</style>