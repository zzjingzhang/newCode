// 将多个路径拼接在一起，最终一定返回一个绝对路径：path.resolve()
const path = require('path')
console.log('resolve')
console.log(path.resolve("./abc/cba", "/kobe", "./abc.txt"))
console.log(path.resolve("./abc/cba", "../kobe", "./abc.txt"))
console.log(path.resolve())