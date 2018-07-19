<template>
    <Layout :style="{padding: '0 50px',margin:'20px'}">
        <div style="text-align: center;margin: 20px;">
            <h1 style="text-align: center;display: inline;">
                {{title}}
            </h1>
            <Button type="text" icon="connection-bars" size="large" style="padding-left: 20px;font-size: 150%">可视化
            </Button>
        </div>
        <Card>
            <div style="min-height: 200px;">
                {{content}}
            </div>
            <consulting></consulting>
        </Card>
    </Layout>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Consulting from './Consulting.vue';

    @Component({
        components: {Consulting}
    })

    export default class GuideLayout extends Vue {
        @Prop()
        title: string;
        @Prop()
        content: string;
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