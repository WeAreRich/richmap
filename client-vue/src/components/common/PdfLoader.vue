<template>
    <div>
        <div>{{pdfUrl}}</div>
        <iframe :src="pdfUrl" width='100%' height='1000px' frameborder='0' @load="handleLoad"></iframe>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Watch } from "vue-property-decorator";
  import Vue from 'vue';

  @Component
  export default class PdfLoader extends Vue {
    @Prop()
    public pdfUrl: string;
    @Watch('pdfUrl')
    onPdfUrlChange(val: string, oldVal: string) {
      console.log(val, oldVal);
    }
    handleLoad() {
      console.log('loaded');
    }
  }
</script>

