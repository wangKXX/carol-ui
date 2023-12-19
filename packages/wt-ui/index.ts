import { App } from 'vue'
import WtButton from '@carol-ui/button'
import WtContent from '@carol-ui/content'
import WtTable from '@carol-ui/table'
import WtDialog from '@carol-ui/dialog'

const components = [WtButton, WtContent, WtTable, WtDialog]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export default {
  install,
  WtButton,
  WtContent,
  WtTable,
  WtDialog
}
