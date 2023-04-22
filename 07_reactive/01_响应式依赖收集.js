const obj = {
  name: 'abc',
  age: 18,
}

// function foo() {
//   console.log('foo:', obj.name)
//   console.log('foo:', obj.age)
//   console.log('foo function')
// }

// function bar() {
//   console.log('bar:', obj.name + 'hello')
//   console.log('bar:', obj.age + 10)
//   console.log('bar function')
// }

// 设置一个专门执行响应式函数的函数
const reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
  fn()
}

watchFn(function foo() {
  console.log('foo:', obj.name)
  console.log('foo:', obj.age)
  console.log('foo function')
})
watchFn(function bar() {
  console.log('bar:', obj.name + 'hello')
  console.log('bar:', obj.age + 10)
  console.log('bar function')
})

// obj.name = 'nbcs'
// foo()
// bar()
reactiveFns.forEach((fn) => {
  fn()
})
