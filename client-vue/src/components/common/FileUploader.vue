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
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from "vue-property-decorator";
  import { APIROOTURL } from '../../services/api/HttpService';

  @Component({
  })
  export default class App extends Vue {
    @Prop()
    route:string;

    @Prop()
    params;

    @Prop()
    styles;

    fileName;

    fileRoute:string = APIROOTURL+this.route;

    mounted() {
      console.log("启动");
      this.fileRoute = APIROOTURL+this.route;
      console.log(this.fileRoute);
    }

    handleBeforeUpload(file): Boolean {
      console.log("before upload");
      return true;
    }

    handleSuccess(res, file){
      console.log("success");
      this.fileName = res;
      this.$emit('getFileName', this.fileName)
    }

    onerror(error, file, fileList) {
      console.log(error);
    }
  }
</script>