import request from '@/utils/request'

/**
 * 用户登陆
 * @param {Object} data
 */
export const userLogin = (data = {}) => {
  return request({
    url: '/system/login',
    method: 'POST',
    data
  })
}
/**
 * 用户注册
 * @param {Object} data
 */
export const userRegister = (data = {}) => {
  return request({
    url: '/system/register',
    method: 'POST',
    data
  })
}
