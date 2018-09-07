import crypto from 'crypto-js'

/**
 * 加密
 * @param {*} data
 */
export function getMd5 (data) {
  return crypto.MD5(data).toString()
}

export function getSha1 (data) {
  return crypto.SHA1(data).toString()
}

/**
 * 校验群组
 * @method checkGroup
 */
export const checkGroup = (group) => {
  return /^([\u4e00-\u9fa5]|[_a-zA-Z0-9]){4, 16}$/.test(group)
}

/**
 * 校验昵称
 * @method checkName
 */

export const checkName = (name) => {
  return /^([\u4e00-\u9fa5]|[_a-zA-Z0-9]){4,16}$/.test(name)
}
/**
 * 校验密码
 * @method checkPass
 */
export const checkPass = (pass) => {
  return /^(?=.*?[0-9])(?=.*?[a-z])[0-9a-z]{6,16}$/.test(pass)
}
