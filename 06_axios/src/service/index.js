import axios from "axios"


class MYRequest {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

    }
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({ ...config, method: 'get' })
    }

    post(config) {
        return this.request({ ...config, method: 'post' })
    }

}

// 可以创建多个实例
// const myRequest1 = new MYRequest('http://123.207.32.32:8000')
// const myRequest2 = new MYRequest('http://123.207.32.32:9001')
export default new MYRequest('http://123.207.32.32:8000')

// export {
//     myRequest1,
//     myRequest2
// }