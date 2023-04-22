import { createApp } from 'vue'
// import App from './01_自定义指令/App.vue'
// import App from './02_内置组件补充/App.vue'
// import App from './03_安装插件/App.vue'
// import App from './04_Render函数/App.vue'
// import App from './05_JSX语法使用/App.vue'
import App from './06_过渡动画/App.vue'
// import useDirectives from './01_自定义指令/directives'
import directives from './01_自定义指令/directives'

const app = createApp(App)
// 全局自定义指令
// app.directive('focus', {
//   mounted(el) {
//     console.log('全局自定义指令 v-focus应用的元素被挂载了', el)
//     el?.focus()
//   },
// })

// useDirectives(app)

app.use(directives)

app.mount('#app')
