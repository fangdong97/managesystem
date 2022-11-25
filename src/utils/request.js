import axios from 'axios'

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '真实上线URL',
  timeout: 8000, // 超时时间
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=utf-8'
  }
})
export default request
