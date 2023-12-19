export const splitCssKeyValue = (str: string, pattern: string): string[] => {
  const index = str.indexOf(pattern)
  return [str.substring(0, index), str.substring(index + 1)]
}

// css字符串转换
export const parseCssCode = (str: string = ''): { [propName: string]: string } => {
  str = str.replace(/\n/g, '').replace(/\{\s?(.+)\s?\}/, '$1')
  return str.split(';').reduce((prev: { [propName: string]: string }, curr) => {
    const [key, value] = splitCssKeyValue(curr, ':')
    if (key && value) prev[key] = value
    return prev
  }, {})
}
export const isEmptyCss = (str: string) => str === '{}'
// 添加css值
export const replaceCssCode = (str: string, cssName: string, cssValue: string): string => {
  str ||= '{}'
  if (!str.includes(cssName)) return str.replace(/\}/, `${isEmptyCss(str) ? '\n' : ''}${cssName}: ${cssValue};\n}`)
  const regx = new RegExp(`([^-])${cssName}\\s*:\\s*[^;]+;`)
  return str.replace(regx, `$1${cssName}: ${cssValue};`)
}

// 获取css值
export const getCssValue = (str: string = '{}', cssName: string): string => {
  const regx = new RegExp(`([^-])${cssName}\\s*:\\s*([^;]+)+;`)
  return str.match(regx)?.pop() || ''
}

// url类型值转为普通链接
export const formatUrlToStr = (str: string, cssName: string): string => {
  return (
    getCssValue(str, cssName)
      .replace(/url\((.+)\)/, '$1')
      .trim() || ''
  )
}

// 删除css
export const removeCssByCssName = (str: string, cssName: string): string => {
  const regx = new RegExp(`([^-])${cssName}\\s*:\\s*[^;]+;\n`)
  return str.replace(regx, '$1')
}
