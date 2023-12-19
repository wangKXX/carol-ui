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
