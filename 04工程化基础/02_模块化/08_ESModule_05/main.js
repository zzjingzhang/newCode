// 导入
import { fname, fage, sayhello } from "./foo.js";

console.log(fage)
console.log(fname)
sayhello()

// import 函数的使用
let flag = true
if (flag) {
    // 不允许在逻辑代码中编写import导入声明语法, 只能写到js代码顶层
    // import { fname, fage, sayhello } from "./foo.js";  // 这种写法会报错


    // 如果确实是逻辑成立时，才需要导入某个模块
    // 可以使用import函数
    // const importPromise = import('./foo.js')
    // importPromise.then(res => {
    //     console.log(res)
    // })

    // import('./foo.js').then(res => {
    //     console.log(res)
    // })
}