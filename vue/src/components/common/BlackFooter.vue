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
                <div class="center">
                    <div>
                        <h4 class="footer-line">{{footer2Content1}}</h4>
                        <h4 class="footer-line">{{footer2Content2}}</h4>
                    </div>
                    <div>
                        <h4 class="footer-line">{{footer2Content3}}</h4>
                        <h4 class="footer-line">{{footer2Content4}}</h4>
                    </div>
                </div>
            </div>
            </Col>
            <Col span="8">
            </Col>
        </Row>
        <div>
            <hr style="background:#757575;margin-top: 10px;margin-bottom: 10px"/>
        </div>
        <div>
            <router-link class="sub-layout-text" :to="{path: '/about'}">
                <div>关于我们
                </div>
            </router-link>
            <a class="sub-layout-text">法律声明及隐私权政策</a>
            <a class="sub-layout-text">廉政举报</a>
        </div>
    </Footer>
</template>

<script>
  import {Footer, Row, Col, Icon} from 'iview';

  import {SENTENCES} from "../../assets/sentences/index";

  export default {
    components: {
      Footer, Row, Col, Icon
    },
    data() {
      return {
        footer1Title: SENTENCES.FOOTER.UNIQUE_SERVICE.TITLE,
        footer1Content1: SENTENCES.FOOTER.UNIQUE_SERVICE.LEVEL_EVALUATE,
        footer1Content2: SENTENCES.FOOTER.UNIQUE_SERVICE.DATA_SUPPLY,
        footer1Content3: SENTENCES.FOOTER.UNIQUE_SERVICE.HELP_RECOMMEND,
        footer1Content4: SENTENCES.FOOTER.UNIQUE_SERVICE.PLAN_ESTABLISH,
        footer2Title: SENTENCES.FOOTER.CONTACT.TITLE,
        footer2Content1: SENTENCES.FOOTER.CONTACT.PHONE_CHENGDU,
        footer2Content2: SENTENCES.FOOTER.CONTACT.NAME_CHENGDU,
        footer2Content3: SENTENCES.FOOTER.CONTACT.PHONE_NANJING,
        footer2Content4: SENTENCES.FOOTER.CONTACT.NAME_NANJING,
      }
    }
  }

</script>

<style scoped>
    .layout-footer-center {
        background-color: #2e323a;
        text-align: center;
        color: white;
    }

    .footer-line {
        white-space: pre-wrap;
        display: inline;
    }

    .layout-logo-aliyun {
        width: auto;
        height: 50px;
        border-radius: 3px;
        display: inline-block;
        margin-bottom: -10px;
        margin-top: -16px;
        z-index: 998;
        position: relative;
    }

    .layout-logo-shiwangme {
        width: auto;
        height: 18px;
        border-radius: 3px;
        display: inline-block;
        z-index: 999;
        position: relative;
    }

    .layout-text {
        color: white;
        display: inline-block;
        text-align: center;
        font-size: smaller;
        padding-left: 4px;
        z-index: 999;
        position: relative;
    }

    .sub-layout-text {
        color: #757575;
        display: inline-block;
        z-index: 999;
        position: relative;
        padding-left: 5px;
        padding-right: 5px;
    }

    .layout-logo-container {
        display: flex;
        text-align: center;
        justify-content: center;
    }
</style>
