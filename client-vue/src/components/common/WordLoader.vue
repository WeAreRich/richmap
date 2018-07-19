<template>
    <div>
        <iframe :src="src"
                width='100%' height='1000px' frameborder='0'>
        </iframe>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class WordLoader extends Vue {
    @Prop()
    wordUrl: string = "http://www.injusalon.com/count/pictures/Pver.doc";

    baseUrl: string = "https://view.officeapps.live.com/op/embed.aspx?src=";

    src: string = this.baseUrl + this.wordUrl;

  }
</script>

