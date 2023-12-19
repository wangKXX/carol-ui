// @ts-ignore
import WtContent from './src/index.vue'
import { App } from 'vue'

WtContent.name = 'wt-content'

WtContent.install = (app: App): void => {
  // 注册组件
  app.component(WtContent.name as string, WtContent)
}

export default WtContent
