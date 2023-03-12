import { createApp } from 'vue'
// import axios from 'axios'
import App from './App.vue'
import myRequest from './service/index'

createApp(App).mount('#app')

myRequest.request({
    url: '/home/multidata'
}).then(res => {
    console.log(res, 'res')
})


// myRequest.get({
//     url: 'http://123.207.32.32:9001/lyric',
//     params: {
//         id: "500665346"
//     }
// }).then(res => {
//     console.log(res, 'res')
// })







