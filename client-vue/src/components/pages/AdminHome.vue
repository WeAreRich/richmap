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
        <PdfLoader :pdfUrl="pdfUrl">

        </PdfLoader>
    </div>
</template>

<script lang="ts">
    import { Component, Prop} from 'vue-property-decorator'
    import FileUploader from '../common/FileUploader.vue'
    import PdfLoader from '../common/PdfLoader.vue'
    import { APIROOTURL } from '../../services/api/HttpService';
    import Vue from 'vue';
    @Component({
      components: {
        FileUploader,
        PdfLoader
      }
    })
    export default class AdminHome extends Vue {
        pdfUrl:string = "http://www.injusalon.com/files/1532164287512.pdf";

        params = {
          fileName: "jjj"
        };

        mounted(){
          console.log("hello");
        }

        getFileName (fileName) {
          // this.$nextTick(() => {
            this.pdfUrl = APIROOTURL+"files/"+fileName;
            console.log("click "+this.pdfUrl);
          // })

        }
    }
</script>

<style scoped>

</style>