<template>
    <div>

    </div>
</template>
<script lang="ts">
  import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
  import SENTENCES from "../../assets/sentences/index";

  @Component
  export default class FixedSideMenu extends Vue {
    @Prop()
    onlineConsultTitle: string = SENTENCES.ONLINE_CONSULT.TITLE;
    @Prop()
    onlineConsultContent: string = SENTENCES.ONLINE_CONSULT.CONTENT;
  }
</script>

<style scoped>

</style>