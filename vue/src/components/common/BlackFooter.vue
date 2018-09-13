<template>
    <Footer class="layout-footer-center">
        <Row>
            <Col span="6">
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
            <Col span="6">
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
            <Col span="6">
            <div>
                <h3>友情链接</h3>
                <div style="text-align: center;padding-top: 5px;">
                    <a href="https://cn.aliyun.com/" style="display: inline-block;text-align: center;padding: 1px;">
                        <img class="layout-logo" src="../../assets/aliyun_logo.gif"/>
                    </a>
                    <a href="http://www.shiwangme.com/" style="display: inline-block;text-align: center;padding: 1px;">
                        <img class="layout-logo" src="../../assets/shiwangme_logo.png"/>
                    </a>
                </div>
            </div>
            </Col>
            <Col span="6">
            </Col>
        </Row>
    </Footer>
</template>

<script>
  import {Footer, Row, Col, Icon} from 'iview';

  const SearchBar = () => import('../common/searchbar/SearchBar.vue')
  const Introduction = () => import('../common/Introduction.vue')
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
        background-color: #5b6270;
        text-align: center;
        color: white;
    }

    .footer-line {

        white-space: pre-wrap;
        display: inline;
    }

    .layout-logo {
        width: 30px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        display: inline-block;
    }

    .layout-text {
        color: white;
        padding-top: 3px;
        padding-left: 2px;
        display: inline-block;
    }
</style>
