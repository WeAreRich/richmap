<template>
    <div style="width: 80%; margin: auto;">
        <poverty-map></poverty-map>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PovertyMap from './map/poverty-map/PovertyMap.vue';
    import {Component} from 'vue-property-decorator';

    @Component({
        components: {
            PovertyMap
        }
    })
    export default class Try extends Vue {
    }
</script>

<style>
</style>