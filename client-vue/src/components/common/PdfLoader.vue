<template>
    <div>
        <div>{{pdfUrl}}</div>
        <div>
            <iframe :src="pdfUrl" width='100%' height='1000px' frameborder='0'></iframe>
        </div>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class PdfLoader extends Vue {
    @Prop()
    pdfUrl: string;

    mounted() {
      // this.tempUrl = "";
    }
  }
</script>

