<template>
    <Affix :offset-right="0">
        <div class="fixed-consult">
            <Poptip trigger="hover" :title="onlineConsultTitle" :content="onlineConsultContent">
                <Button icon="chatbox-working" size="large" type="primary">{{onlineConsultTitle}}</Button>
            </Poptip>
        </div>
    </Affix>
</template>
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';
  import SENTENCES from '../../assets/sentences/index';
  import { Affix, Poptip, Button } from 'iview';

  @Component({
    components: {Affix, Poptip, Button}
  })
  export default class Consulting extends Vue {
    onlineConsultTitle: string = SENTENCES.ONLINE_CONSULT.TITLE;
    onlineConsultContent: string = SENTENCES.ONLINE_CONSULT.CONTENT;
  }
</script>

<style scoped>
    .fixed-consult {
        position: absolute;
        z-index: 9999;
        right: 10px;
        bottom: 50%;
    }
</style>