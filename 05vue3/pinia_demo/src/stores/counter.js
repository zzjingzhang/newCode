// 定义关于counter的store

import { defineStore } from "pinia";
import useUser from "./user.js";



// 第一个参数，对应store的名字
// 第二个参数是一个对象
// 返回一个函数
const useCounter = defineStore('counter', {
    // state() {
    //     return {
    //         count: 99
    //     }
    // }
    state: () => ({
        count: 99,
        friends: [
            { id: 1, name: 'a1' },
            { id: 2, name: 'a2' },
            { id: 3, name: 'a3' },
            { id: 4, name: 'a4' },
        ]
    }),
    getters: {
        // 1.基本使用
        doubleCount(state) {
            return state.count * 2
        },

        // 2一个getter引入另一个getter
        doubleCountAddone() {
            // this 是store实例
            return this.doubleCount + 1
        },
        // 3.getters也支持返回一个函数
        getFriendById(state) {
            return function (id) {
                return state.friends.find(item => item.id === id)
            }
        },
        // 4.getters中用到别的store中的数据
        showMessage(state) {
            // 获取user信息
            const userStore = useUser()
            // 2获取自己的信息
            // 3.拼接信息
            return `name:${userStore.name}---count:${state.count}`

        }

    },
    actions: {
        increment() {
            this.count++
        },
        incrementNum(num) {
            this.count += num
        }
    }
})


export default useCounter