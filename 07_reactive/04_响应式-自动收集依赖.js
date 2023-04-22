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
// const dep = new Depnd()
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// 封装一个函数：负责通过obj的key获取对应的Depend对象
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 1.根据对象obj，找到对应的map对象
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }
  // 2.根据key，找到对应的depend对象
  let dep = map.get(key)
  if (!dep) {
    dep = new Depnd()
    map.set(key, dep)
  }
  return dep
}

// 方案一：   Object.defineProperty() ---vue2
Object.keys(obj).forEach((key) => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set: function (newValue) {
      value = newValue
      const dep = getDepend(obj, key)
      dep.notify()
    },
    get: function () {
      // console.log('get函数中：', obj, key)
      const dep = getDepend(obj, key)
      dep.addDepend(reactiveFn)
      return value
    },
  })
})

// 方案二
// new Proxy() ---- vue3

watchFn(function foo() {
  console.log('foo:', obj.name)
  // console.log('foo:', obj.age)
  console.log('foo function')
})
watchFn(function bar() {
  // console.log('bar:', obj.name + 'hello')
  console.log('bar:', obj.age + 10)
  console.log('bar function')
})

obj.name = 'nbcs'
console.log('name发生变化1-------')
// foo()
// bar()
// dep.notify()
// obj.name = 'nabg'
// console.log('name发生变化2-------')

obj.age = 80
console.log('age发生变化-------')
