<template>
  <div class="site">
    <h1>组件库测试站点 wt-ui</h1>
    <wt-button type="primary" content="测试"></wt-button>
    <wt-content></wt-content>
    <wt-table></wt-table>
    <wt-button type="primary" content="open dialog" @click="handleClick"></wt-button>
    <wt-dialog ref="dialog" :preview="true" :confirmTxt="'确认'"></wt-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const dialog = ref<any>(null)
const handleClick = () => {
  dialog.value?.show()
}
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
</style>
