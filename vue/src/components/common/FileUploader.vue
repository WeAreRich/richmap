<template>
    <div>
      <div class = "top">
      </div>
        <Upload
                ref="upload"
                :show-upload-list="false"
                :before-upload="handleBeforeUpload"
                :on-success="handleSuccess"
                :on-error="onerror"
                multiple
                :data = params
                :action=fileRoute
                :style =styles>
            <div>
                <Button>
                    请点击上传文件
                </Button>
            </div>
        </Upload>
    </div>
</template>
<script>
  import {Upload,Button} from 'iview'
  // import { APIROOTURL } from '../../services/api/HttpService';
  export default {
    components: {
      Upload,Button
    },
    props:{
      route:'',
      params:'',
      styles: '',
    },
    data(){
      return{
        fileName:'',
        fileRoute: '' + this.route
      }
    },
    mounted(){
      console.log("启动");
      this.fileRoute = '' + this.route;
      console.log(this.fileRoute);
    },
    methods:{
      handleBeforeUpload(file){
        console.log("before upload");
        return true;
      },

      handleSuccess(res, file){
        console.log("success");
        this.fileName = res;
        this.$emit('getFileName', this.fileName)
      },

      onerror(error, file, fileList) {
        console.log(error);
      }
    }
  }
</script>
