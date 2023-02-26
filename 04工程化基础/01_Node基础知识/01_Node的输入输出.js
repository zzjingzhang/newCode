// 输出的内容
console.log('999')

// 给程序输入内容
// node index.js dev=development  // 
console.log(process.argv)
setTimeout(() => {
    // console.clear() // 清空控制台
    console.trace()  // 执行调用栈

}, 1000)
