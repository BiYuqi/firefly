import socket from './socket'

export const sendMsg = (event, data = {}) => {
  return new Promise((resolve, reject) => {
    socket.emit(event, data, (status) => {
      resolve(status)
    })
  })
}
