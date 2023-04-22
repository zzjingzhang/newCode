export default function directiveFocus(app) {
  app.directive('focus', {
    mounted(el) {
      console.log('全局自定义指令 v-focus应用的元素被挂载了', el)
      el?.focus()
    },
  })
}
