import axios from 'axios'

// 创建其他的实例发送网络请求

const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 6000,
    headers: {}
})
const instance2 = axios.create({
    baseURL: 'http://123.207.32.32:5000',
    timeout: 8000,
    headers: {}
})