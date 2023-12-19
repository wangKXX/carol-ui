export enum EPositon {
  BOTTOM = 'BOTTOM',
  TOP = 'TOP'
}
export interface ISchemaItem {
  type: string
  options?: string[]
  value: string | number | boolean
  title?: string
}

export interface ISchema {
  [propName: string]: ISchemaItem | any
}
export interface ISheets {
  inlineSheets: string
  className: string
}

export interface IEvent {
  eventType: string
  defaultValue?: string
  description: string
  ES5Value?: string
}

export interface IComponent {
  componentName: string
  package: string
  version: string
  type: string
  exportName: string
  showName: string
  icon: string
  componentId?: string
  schema: ISchema
  sheets: ISheets
  events?: IEvent[]
  children: Array<IComponent>
}
