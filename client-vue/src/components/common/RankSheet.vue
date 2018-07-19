<template>
    <div>
        <Table :data="data" :columns="columns"  ></Table>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import {RankItem} from "../../module/RankItem";

    interface column{
        title:string;
        key:string;
    }

    interface Item{
        rank:number;
        name:string;
        value:string;
    }

    @Component
    export default class RankSheet extends Vue {
        @Prop()
        time: string;

        @Prop()
        type: string;


        columns: column[] =  [
            {
                title: '排名',
                key: 'rank'
            },
            {
                title: '县区名',
                key: 'name'
            },
            {
                title: '数据',
                key: 'value'
            }
        ];

        data: Item[] = [];

        mounted() {
            /**
             *   获取数据接口 todo
             */
            this.data = [];
            let rankItem:RankItem[] =[
                {
                    name: "A县",
                    value: "111"
                },
                {
                    name: "B县",
                    value: "222"
                }
            ];

            for(let i =0; i<rankItem.length; i++){
                let item: Item ={
                    rank: i+1,
                    name: rankItem[i].name,
                    value: rankItem[i].value
                };
                this.data.push(item)
            }
            console.log(this.data)
        }

    }
</script>