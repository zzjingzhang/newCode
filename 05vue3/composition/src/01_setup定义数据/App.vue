<template>
  <div class="app">message:{{ message }}</div>
  <div class="app">message:{{ message2 }}</div>
  <button @click="changeMessage">改变message的值</button>
  <hr />
  <h2>账号：{{ account.userName }}</h2>
  <h2>密码：{{ account.pwd }}</h2>
  <button @click="changeAccount">改变账号</button>
  <hr />
  <!-- 默认情况下，在template中使用ref时，vue会自动对其进行解包（取出其中的value） -->
  <h2>当前计数:{{ count }}</h2>
  <button @click="increment">count+1</button>
  <hr />
  <!-- 使用的时候不要.value -->
  <h2>当前计数:{{ info.count }}</h2>
  <!-- 修改的时候需要.value -->
  <button @click="info.count.value++">+1</button>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    // 1.定义的普通数据，可以被正常使用
    // 缺点：不是响应式的
    let message = 'hello'

    // 2定义响应式数据
    // 2.1 reactive函数，定义复杂类型的数据
    const account = reactive({
      userName: 'abc',
      pwd: '1234456',
    })

    const changeAccount = () => {
      console.log(account.userName)
      account.userName = 'new name'
      account.pwd = 'new pwd'
      console.log(account.userName)
    }
    // 2.2 ref函数 定义简单类型的数据(也可以定义复杂类型的数据)
    let message2 = ref('hello2')
    let account2 = ref({ userName: 'account2', pwd: 'acount2 pwd' })
    const changeMessage = () => {
      console.log(account2.value.userName)
      message = 'new message'
      message2.value = 'new message2'
      console.log(message)
      console.log(message2.value)
    }

    const count = ref(0)
    const increment = () => {
      count.value++
    }
    // 3.ref是浅层解包
    const info = {
      count,
    }

    return {
      message,
      message2,
      account,
      count,
      info,
      increment,
      changeMessage,
      changeAccount,
    }
  },
})
</script>

<style scoped></style>
