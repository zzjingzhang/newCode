class Depnd {
  constructor() {
    this.reactiveFns = new Set()
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.add(fn)
    }
  }
  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach((fn) => fn())
  }
}

// 设置一个专门执行响应式函数的函数
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

// function reactive(obj) {
//   Object.keys(obj).forEach((key) => {
//     let value = obj[key]
//     Object.defineProperty(obj, key, {
//       set: function (newValue) {
//         value = newValue
//         const dep = getDepend(obj, key)
//         dep.notify()
//       },
//       get: function () {
//         const dep = getDepend(obj, key)
//         // dep.addDepend(reactiveFn)
//         dep.depend()
//         return value
//       },
//     })
//   })
//   return obj
// }

// 方案二
// new Proxy() ---- vue3

function reactive(obj) {
  const objProxy = new Proxy(obj, {
    set: function (target, key, newValue, receiver) {
      // target[key] = newValue
      Reflect.set(target, key, newValue, receiver)
      const dep = getDepend(target, key)
      dep.notify()
    },
    get: function (target, key, receiver) {
      const dep = getDepend(target, key)
      dep.depend()
      // return target[key]
      return Reflect.get(target, key, receiver)
    },
  })

  return objProxy
}

// ================= 业务代码  =========

const obj = reactive({
  name: 'abc',
  age: 18,
  address: 'bjs',
})

watchFn(function () {
  console.log(obj.name)
  console.log(obj.age)
})
watchFn(function () {
  console.log(obj.address)
})

watchFn(function () {
  console.log(obj.age)
  console.log(obj.address)
})
console.log('------')

// 修改name
obj.name = '88888'

// obj.age = 80
// console.log('age发生变化-------')
