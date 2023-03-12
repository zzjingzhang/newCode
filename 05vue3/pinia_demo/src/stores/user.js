import { defineStore } from "pinia";
const useUser = defineStore('user', {
    state() {
        return {
            name: 'abc',
            age: 18,
            height: 1.88

        }
    }
})


export default useUser