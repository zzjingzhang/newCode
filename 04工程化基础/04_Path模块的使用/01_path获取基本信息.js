const path = require('path')
// console.log(path)
const filepath = "C://abc/cba/nba.txt"
// 获取后缀名
console.log(path.extname(filepath))
// 文件名
console.log(path.basename(filepath))
// 获取文件的父文件夹
console.log(path.dirname(filepath))


// 将多个路径拼接在一起
const path1 = "/abc/cba"
const path2 = "../kobe/james.txt"
console.log(path.join(path1, path2))