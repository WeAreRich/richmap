<template>
    <div>
    <Upload
        ref="upload"
        :show-upload-list="false"
        :before-upload="handleBeforeUpload"
        :on-success="handleSuccess"
        :on-error="onerror"
        multiple
        :data="data"
        action="http://127.0.0.1:3000/profile"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
        </div>
    </Upload>
    <RankSheet>

    </RankSheet>
    <wordLoader wordUrl="http://www.injusalon.com/count/pictures/map.doc">

    </wordLoader>
    </div>
</template>
<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import wordLoader from './Wordloader.vue'
import RankSheet from './RankSheet.vue'
@Component({
    components: {
        wordLoader,RankSheet
    }
})
export default class App extends Vue {
    fileName:string = '11';
    handleBeforeUpload (file):Boolean {
        let data = new FormData();
        fetch("http://127.0.0.1:3000/test/file", {
                      method: 'get',
                  })
                  .then(res => res.text())
                  .then(text => {
                        console.log(JSON.parse(text))
                 });
        console.log(file);
        this.fileName = file.name;
        return true;
    }

    handleSuccess (res, file) {
        console.log("success");
    }

    onerror (error,file,fileList){
        console.log(error);
    }
}
</script>
<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>