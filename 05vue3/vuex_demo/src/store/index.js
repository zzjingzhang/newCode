import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            counter: 40,
            name: 'abc',
            level: 10,
        }
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2
        },

        message(state, getters) {
            // 在该getters属性中，获取其他的getters

        },
        // getters 也可以传递其他参数
        // 
        getUserById(state) {
            // 只是一个样例
            return (id) => {
                return state.name + id
            }
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        }
    },
    actions: {},
    modules: {
        a: {
            state() {
                return {

                }
            }
        }
    }
})

export default store
