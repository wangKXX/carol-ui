import { App } from 'vue'
import WtButton from '@wt-ui/button'
import WtContent from '@wt-ui/content'
import WtTable from '@wt-ui/table'
import WtDialog from '@wt-ui/dialog'

const components = [WtButton, WtContent, WtTable, WtDialog]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
  WtButton,
  WtContent,
  WtTable,
  WtDialog
}
