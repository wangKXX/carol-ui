// @ts-ignore
import WtButton from './src/index.vue'
import { App } from 'vue'

WtButton.name = 'wt-button'

WtButton.install = (app: App): void => {
  // 注册组件
  app.component(WtButton.name as string, WtButton)
}

export default WtButton
