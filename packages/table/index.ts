// @ts-ignore
import WtTable from './src/index.vue'
import { App } from 'vue'

WtTable.name = 'wt-table'

WtTable.install = (app: App): void => {
  // 注册组件
  app.component(WtTable.name, WtTable)
}

export default WtTable
