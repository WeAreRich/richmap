<template>
    <Footer class="layout-footer-center">
        <Row>
            <Col span="8">
            <div>
                <h3>{{footer1Title}}</h3>
                <div>
                    <h4 class="footer-line">{{footer1Content1}}</h4>
                    <h4 class="footer-line">{{footer1Content2}}</h4>
                </div>
                <div>
                    <h4 class="footer-line">{{footer1Content3}}</h4>
                    <h4 class="footer-line">{{footer1Content4}}</h4>
                </div>
            </div>
            </Col>
            <Col span="8">
            <div>
                <h3>{{footer2Title}}</h3>
                <div>
                    <h4 class="footer-line">{{footer2Content1}}</h4>
                    <h4 class="footer-line">{{footer2Content2}}</h4>
                </div>
                <div>
                    <h4 class="footer-line">{{footer2Content3}}</h4>
                    <h4 class="footer-line">{{footer2Content4}}</h4>
                </div>
            </div>
            </Col>
            <Col span="8">
            </Col>
        </Row>
    </Footer>
</template>
<script lang="ts">
    import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
    import SENTENCES from "../../assets/sentences/index";

    @Component
    export default class FixedFooter extends Vue {
        footer1Title: string = SENTENCES.FOOTER.UNIQUE_SERVICE.TITLE;
        footer1Content1: string = SENTENCES.FOOTER.UNIQUE_SERVICE.LEVEL_EVALUATE;
        footer1Content2: string = SENTENCES.FOOTER.UNIQUE_SERVICE.DATA_SUPPLY;
        footer1Content3: string = SENTENCES.FOOTER.UNIQUE_SERVICE.HELP_RECOMMEND;
        footer1Content4: string = SENTENCES.FOOTER.UNIQUE_SERVICE.PLAN_ESTABLISH;
        footer2Title: string = SENTENCES.FOOTER.CONTACT.TITLE;
        footer2Content1: string = SENTENCES.FOOTER.CONTACT.PHONE_CHENGDU;
        footer2Content2: string = SENTENCES.FOOTER.CONTACT.NAME_CHENGDU;
        footer2Content3: string = SENTENCES.FOOTER.CONTACT.PHONE_NANJING;
        footer2Content4: string = SENTENCES.FOOTER.CONTACT.NAME_NANJING;
    }
</script>

<style scoped>
    .layout-footer-center {
        background-color: #4274a5;
        text-align: center;
        color: white;
    }

    .footer-line {
        display: inline;
    }
</style>