<template>
    <Menu mode="horizontal" :theme="light" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            数据录入
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            文章上传
        </MenuItem>
    </Menu>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'

    @Component
    export default class AdminHome extends Vue {

    }
</script>

<style scoped>

</style>