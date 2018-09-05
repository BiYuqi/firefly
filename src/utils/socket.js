import IO from 'socket.io-client'

const BaseUrl = 'http://localhost:8976'

const socket = new IO(BaseUrl, {})

export default socket
