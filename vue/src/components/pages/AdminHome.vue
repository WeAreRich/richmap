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
    </div>
</template>

<script>

  import {Menu, MenuItem} from 'iview'
  import FileUploader from "../common/FileUploader.vue";
  // import { APIROOTURL } from "../../services/api/HttpService";
  export default {
    components: {
      FileUploader, Menu, MenuItem
    },
    data(){
      return{
        pdfUrl: "http://www.injusalon.com/files/1532164287512.pdf",
        params : {
          fileName: "jjj"
        }
      }
    },
    methods:{
      getFileName(fileName) {
        // this.$nextTick(() => {
        // this.pdfUrl = APIROOTURL + "files/" + fileName;
        console.log("click " + this.pdfUrl);
      }
    }
  }
</script>

<style scoped>

</style>
