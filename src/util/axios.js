import axios from 'axios'

const instance = axios.create({ baseURL: 'https://charted-server.herokuapp.com' })
instance.defaults.headers.post['Content-Type'] = 'application/json'

export default instance