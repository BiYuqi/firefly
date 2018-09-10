/**
 * @author BiYuqi
 * @param {将要打开的链接} url
 * @param {是否在新标签页打开} isblank
 */
export const openPage = (url, isblank = true) => {
  const a = document.createElement('a')
  if (isblank) {
    a.setAttribute('target', '_blank')
  }
  a.href = url
  a.click()
}
/**
 * 防止接口异步返回没有数据，导致报错
 * @param {*} data
 * @param {*} str
 * @param {*} def
 */
export const chaining = (data, str, def) => {
  if (!str || typeof str !== 'string') {
    return new Error('参数不能为空')
  }
  const dots = str.split('.')
  return dots.reduce((prev, curr) => {
    return prev && prev[curr]
  }, data) || def
}
