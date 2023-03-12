
import axios from 'axios'
// baseURL
const baseURL = 'http://123.207.32.32:8000'

// 给axios实例配置公共的基础配置
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 1000
axios.defaults.headers = {}

axios.get("/home/multidata").then(res => {
    console.log(res)
})

// axios发送多个请求
axios.all([
    axios.get("/home/multidata"),
    axios.post("http://123.207.32.32:5000/login", {
        name: 'coderwhy',
        password: '123456'
    })
]).then(res => {
    console.log(res, 'all')
})
