const fname = 'foo'
const fage = 18
function sayhello() {
    console.log('hello')
}

// 导出
export {
    fname,
    fage,
    sayhello
}

console.log(import.meta)