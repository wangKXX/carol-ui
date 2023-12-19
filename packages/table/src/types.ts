import { ExtractPropTypes } from 'vue'

export interface IEvent {
  eventType: string;
  defaultValue?: string;
  description: string;
  ES5Value?: string;
}

export const wtButtonProps = {
  size: String,
  type: String,
  plain: Boolean,
  content: String,
  events: Array<IEvent>,
  router: Object
} as const

export type WtButtonProps = ExtractPropTypes<typeof wtButtonProps>;

export enum ESize {
  large = 'large',
  default = 'default',
  small = 'small',
}
export interface IButton {
  size: ESize;
  type: string;
  plain: boolean;
  content: string;
  events: IEvent[];
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

export enum EPositon {
  BOTTOM = 'BOTTOM',
  TOP = 'TOP'
}
export interface IChangeComponent {
  componentId?: string
  position: EPositon
  clear: () => void,
  parentMateData: IComponent[]
  globalPageData: IComponent
}
