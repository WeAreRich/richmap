<template>
    <div ref="control" id="map-border-control"><
        <Dropdown>
            <a>展示选项</a>
            <DropdownMenu slot="list" style="text-align: left;">
                <div style="display: flex; flex-direction: column; padding: 10px;">
                    <Checkbox label="一级行政区边界" @on-change="handleChangeFirstLevelCheckBox">一级行政区边界</Checkbox>
                    <Checkbox label="二级行政区边界" @on-change="handleChangeSecondLevelCheckBox">二级行政区边界</Checkbox>
                    <Checkbox label="三级行政区边界" @on-change="handleChangeThirdLevelCheckBox">三级行政区边界</Checkbox>
                </div>
            </DropdownMenu>
        </Dropdown>
        </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import IControl = mapboxgl.IControl;
    export default class MapBorderControl extends Vue implements IControl{
      _map: mapboxgl.Map;
      getDefaultPosition(): string {
        return '';
      }

      onAdd(map: mapboxgl.Map): HTMLElement {
        this._map = map;
        return this.$refs.control as HTMLElement;
      }

      onRemove(map: mapboxgl.Map): any {
        this._map=undefined;
      }
    }
</script>

<style scoped>

</style>