<template>
    <p v-html="html"></p>
</template>

<script lang="ts">
  import { Component, Prop } from "vue-property-decorator";
  import Vue from "vue";

  @Component({
    components: {
      HtmlPanel
    }
  })

  export default class HtmlPanel extends Vue {
    @Prop()
    url: string;

    html: string = "123";

    mounted() {
      this.load(this.url);
    }

    load(url) {
      if (url && url.length > 0) {
        // let param = {
        //   accept: "text/html, text/plain"
        // };
        fetch(url).then((response) => {
          this.html = response.body.toString();
        }).catch(() => {
          this.html = "加载失败";
        });
      }
    }
  }
</script>

<style scoped>

</style>