import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { EnhanceAppContext } from 'vitepress'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import CarolUi from '@carol-ui/carol-ui'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(ElementPlus)
    ctx.app.use(CarolUi)
    ctx.app.component('demo-preview', AntDesignContainer)
  }
}
