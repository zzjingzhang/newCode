
import axios from 'axios'
axios.interceptors.request.use(config => {
    console.log('请求成功的拦截')
    // 1.开始loading动画
    // 2.对原来的配置进行一些修改
    // 2.1header
    // 2.2 认证登录 token/cookie
    // 2.3 请求参数进行某些转换
    config.headers['token'] = '123'
    return config
}, err => {
    console.log('请求失败的拦截')
    return err
})

axios.interceptors.response.use(res => {
    // 响应成功的拦截
    console.log('响应成功的拦截')
    return res.data
}, err => {
    // 响应失败的拦截
    console.log('响应失败的拦截')

    return err
})