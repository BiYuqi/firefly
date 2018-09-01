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
