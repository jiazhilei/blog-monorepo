import axios from 'axios'
import { message } from 'antd'
const httpProvider = axios.create({
  baseURL: 'http://localhost:3500/api',
  timeout: 15000 // 超时配置
})
// 添加请求拦截器
httpProvider.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
httpProvider.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const { base_resp } = response.data
    if (base_resp?.code === 200) {
      return response.data
    } else {
      message.error(base_resp?.message)
      return Promise.reject(response?.data)
    }
  },
  error => {
    // 对响应错误做点什么
    // console.log('error-response:', error.response)
    // console.log('error-config:', error.config)
    // console.log('error-request:', error.request)
    // if (error.response) {
    //   if (error.response.status === 401) {
    //     jumpLogin()
    //   }
    // }
    message.error(error?.response?.data?.message || '服务端异常')
    return Promise.reject(error)
  }
)
export default httpProvider