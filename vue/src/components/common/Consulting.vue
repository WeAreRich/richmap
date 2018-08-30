<template>
    <Affix :offset-right="0">
        <div class="fixed-consult">
            <Poptip trigger="hover" :title="onlineConsultTitle" :content="onlineConsultContent">
                <Button icon="chatbox-working" size="large" type="primary">{{onlineConsultTitle}}</Button>
            </Poptip>
        </div>
    </Affix>
</template>
<script>
  import { Affix, Poptip, Button } from 'iview';
  import {SENTENCES} from '../../assets/sentences/index';
  export default {
    components: {
      Affix, Poptip, Button
    },
    data(){
      return{
        onlineConsultTitle: SENTENCES.ONLINE_CONSULT.TITLE,
      onlineConsultContent: SENTENCES.ONLINE_CONSULT.CONTENT
      }
    }
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
