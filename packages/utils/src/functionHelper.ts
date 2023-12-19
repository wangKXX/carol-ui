import type { IEvent } from './types'
declare let window: any

export const getFunctionBody = (fun: string): string => {
  fun.match(/^(const customEvent = ({router, fetch, refs, extra}) => {)(\W|\w|\s)}$/)
  return ''
}

export const dispatchEvent = async (eventType: string, events: IEvent[], router: any) => {
  try {
    for await (const customEvent of events) {
      if (customEvent.eventType === eventType) {
        Function(customEvent.ES5Value || '').call({}).call({}, { router, refs: window.globalRefs })
      }
    }
  } catch (error) {
    console.warn(`[component event:${eventType}] error`, error)
  }
}
