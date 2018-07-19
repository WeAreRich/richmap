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
    import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
    import SENTENCES from "../assets/sentences/index";

    @Component
    export default class Consulting extends Vue {
        onlineConsultTitle: string = SENTENCES.ONLINE_CONSULT.TITLE;
        onlineConsultContent: string = SENTENCES.ONLINE_CONSULT.CONTENT;
    }
</script>

<style scoped>
    .fixed-consult {
        position: fixed;
        z-index: 9999;
        right: 10px;
        bottom: 30%;
    }
</style>