// 1.类似于window的全局对象
// console.log(globalThis)
// console.log(global)

// console.log(global === globalThis)  // true


// 2.特殊的全局对象 
//  __dirname当前文件所在的目录结构
// console.log(__dirname, '---')
// __filename  当前目录+文件名
// console.log(__filename, 'filename')

// 3.常见的全局对象(了解)
// console.log(process)  // 进程里面的信息
// console.log(process.argv) // 参数

// 4.定时器方法
setTimeout(() => {
    console.log('settimeout')
}, 100);
setInterval(() => {
    console.log('setInterval')
}, 50000);


// Immediate: 立即/立刻
// 立即执行
setImmediate(() => {
    console.log("setImmediate")
})


// 额外执行函数
// // 添加到下一次tick队列中
process.nextTick(() => {
    console.log('nexttick')
})
