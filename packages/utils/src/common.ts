import type { IComponent } from './types'
import { EPositon } from './types'
export const throttle = (fn: (...params: any) => any, delay: number) => {
  let timer: any
  return (...args: any) => {
    if (timer) return
    timer = setTimeout(() => {
      fn(...args)
      timer = undefined
      clearTimeout(timer)
    }, delay)
  }
}

// 组件树查询方法
export const findComponent: (id: string, pageTree: IComponent[]) => IComponent | null = (
  id,
  pageTree
) => {
  let retComponent = null
  for (let i = 0; i < pageTree.length; i++) {
    const { componentId, children } = pageTree[i]
    if (componentId === id) return pageTree[i]
    if (children?.length) {
      retComponent = findComponent(id, children)
      if (retComponent) return retComponent
    }
  }
  return retComponent
}

// 组件当前index查询
export const findComponentIndex: (id: string, pageTree: IComponent[]) => number = (
  id,
  pageTree
) => {
  for (let i: number = 0; i < pageTree.length; i++) {
    const { componentId, children } = pageTree[i]
    if (componentId === id) return i
    if (children?.length) {
      const retIndex = findComponentIndex(id, children)
      if (retIndex !== -1) return retIndex
    }
  }
  return -1
}

// 获取当前组件移动定位坐标
export const getRepalceIndex = (index: number, position: EPositon) => {
  if (position === EPositon.BOTTOM) return index + 1
  return index
}

// 全局删除组件

export const globalRemoveComponentById = (id: string, pageTree: IComponent[]): boolean => {
  let ret = false
  for (let i: number = 0; i < pageTree.length; i++) {
    const { componentId, children } = pageTree[i]
    if (componentId === id) return !!pageTree.splice(i, 1)
    if (children?.length) {
      ret = globalRemoveComponentById(id, children)
      if (ret) return ret
    }
  }
  return ret
}
