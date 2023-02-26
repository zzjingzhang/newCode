// 1.导入方式一

// import { fname, fage, sayhello } from "./foo.js";
// console.log(fage)
// console.log(fname)
// sayhello()

// 2.导入方式二
// import { fname as name, fage, sayhello } from "./foo.js"
// console.log(fage)
// console.log(name)
// sayhello()

// 3.导入时可以给整个模块起别名
import * as foo from './foo.js'

console.log(foo.fage)
console.log(foo.fname)
foo.sayhello()