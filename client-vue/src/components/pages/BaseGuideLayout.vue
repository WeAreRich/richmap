<template>
    <router-view></router-view>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class BaseGuideLayout extends Vue {
    }
</script>

<style scoped>

</style>