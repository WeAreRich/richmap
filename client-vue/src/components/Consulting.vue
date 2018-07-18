<template>
    <div class="fixed-consult">
        <Poptip trigger="hover" :title="onlineConsultTitle" :content="onlineConsultContent">
            <Button icon="chatbox-working" size="large" type="primary">{{onlineConsultTitle}}</Button>
        </Poptip>
    </div>
</template>
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
  import SENTENCES from "../assets/sentences/index";

  @Component
  export default class Consulting extends Vue {
    @Prop()
    onlineConsultTitle: string = SENTENCES.ONLINE_CONSULT.TITLE;
    @Prop()
    onlineConsultContent: string = SENTENCES.ONLINE_CONSULT.CONTENT;
  }
</script>

<style scoped>
    .fixed-consult {
        position: fixed;
        z-index: 9999;
        right: 10px;
        bottom: 0px;
    }
</style>