class Depnd {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach((fn) => fn())
  }
}

const obj = {
  name: 'abc',
  age: 18,
}

// 设置一个专门执行响应式函数的函数
const dep = new Depnd()
const reactiveFns = []
function watchFn(fn) {
  dep.addDepend(fn)
  fn()
}

// 方案一：   Object.defineProperty() ---vue2
Object.keys(obj).forEach((key) => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set: function (newValue) {
      value = newValue
      dep.notify()
    },
    get: function () {
      return value
    },
  })
})

// 方案二
// new Proxy() ---- vue3

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

obj.name = 'nbcs'
console.log('name发生变化1-------')
// foo()
// bar()
// dep.notify()
obj.name = 'nabg'
console.log('name发生变化2-------')

obj.age = 80
console.log('age发生变化-------')
