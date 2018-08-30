<template>
    <Layout>
        <search-bar></search-bar>
        <introduction></introduction>
    </Layout>
</template>

<script>
import {Layout, Checkbox} from 'iview'
const SearchBar = () => import('../common/searchbar/SearchBar.vue')
const Introduction = () => import('../common/Introduction.vue')
export default {
  components: {
    SearchBar, Introduction, Layout, Checkbox
  }
}
</script>

<style scoped>
</style>
