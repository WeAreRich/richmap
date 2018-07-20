<template>
    <div>
        <iframe :src="pdfUrl" width='100%' height='1000px' frameborder='0'></iframe>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  export default class PdfLoader extends Vue {
    pdfUrl: string = "http://www.injusalon.com/count/pictures/map.pdf";
  }
</script>

