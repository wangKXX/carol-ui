// @ts-ignore
import WtDialog from './src/index.vue'
import { App } from 'vue'

WtDialog.name = 'wt-dialog'

WtDialog.install = (app: App): void => {
  // 注册组件
  app.component(WtDialog.name as string, WtDialog)
}

export default WtDialog
