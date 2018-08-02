<template>
    <div>
        <Menu mode="horizontal" :theme="light" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                数据录入
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people"></Icon>
                文章上传
            </MenuItem>
        </Menu>
        <FileUploader route="profile" :params=params v-on:getFileName="getFileName">

        </FileUploader>
        <PdfLoader :pdfUrl="tempUrl"/>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import FileUploader from "../common/FileUploader.vue";
  import PdfLoader from "../common/PdfLoader.vue";
  import { APIROOTURL } from "../../services/api/HttpService";

  @Component({
    components: {
      FileUploader,
      PdfLoader
    }
  })
  export default class AdminHome extends Vue {
    tempUrl: string = "http://www.hzadm.com/Uploads/201709/59bea7c8d62c8.pdf";

    params = {
      fileName: "jjj"
    };

    mounted() {
      console.log("hello");
    }

    getFileName(fileName) {
      this.$nextTick(() => {
        this.tempUrl = APIROOTURL + "files/" + fileName;
        console.log("click " + this.tempUrl);
      });

    }
  }
</script>

<style scoped>

</style>