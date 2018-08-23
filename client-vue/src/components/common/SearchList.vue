<template>
    <div style="margin-top: 100px">
        <div v-for="searchTuplesAndKindItem in searchTuplesAndKind" :key="searchTuplesAndKindItem.kind">
            <div style="margin-left: 40px;margin-right: 40px;">
                <Button type="primary" size="large" style="border-radius: 0">{{searchTuplesAndKindItem.kind}}(10)
                </Button>
                <div v-for="searchTuple in searchTuplesAndKindItem.searchTuples">
                    <div>
                        <a style="font-size: 16px;"
                           :href="searchTuple.href">{{searchTuple.title}}</a>
                        <div style="font-size: 12px;">
                            {{searchTuple.abstract_info}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  interface SearchTuple {
    href: string,
    title: string,
    author: string,
    abstract_info: string
  }

  interface SearchTuplesAndKind {
    kind: string,
    searchTuples: SearchTuple[]
  }

  @Component
  export default class SearchList extends Vue {
    searchTuplesAndKind: SearchTuplesAndKind[] = [];

    async mounted() {
      console.log(this['$router']);
      this.searchTuplesAndKind =
        [
          {
            kind: '百度',
            searchTuples: [
              {
                href: 'http://xueshu.baidu.com/s?wd=paperuri%3A%28c0d80011d09eb7ea37a11cc022f247c6%29&filter=sc_long_sign&sc_ks_para=q%3DErlotinib%20in%20previously%20treated%20non-small-cell%20lung%20cancer.&sc_us=13141422607335615986&tn=SE_baiduxueshu_c1gjeupa&ie=utf-8',
                title: 'Erlotinib in previously treated non-small-cell lung cancer.',
                author: '123',
                abstract_info: 'TheNewEnglandJournalofMedicine[2005,353(2):123-132]Type:ClinicalTrial,ClinicalTrial,PhaseIII,JournalArticle,MulticenterStudy,RandomizedControlledTrial,ResearchSupport,Non-U.S.Gov\'tDOI:10.1056/NEJMoa050753...'
              }
            ]
          }
        ];
    }
  }
</script>

<style scoped>

</style>