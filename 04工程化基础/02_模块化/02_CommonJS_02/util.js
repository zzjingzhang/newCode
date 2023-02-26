const UTIL_NAME = 'util'
function add() {
    console.log('add')
    return 'add1'
}

function sub() {
    console.log('sub')
    return 'sub1'
}
// module.exports.UTIL_NAME = UTIL_NAME
// module.exports.add = add
// module.exports.sub = sub
// module对象的exports属性是exports对象的一个引用
// console.log(module.exports === exports)  //true

// 开发中常用的导出
// 下面这种写 法就和exports没有关系了。是一个新的对象
// 在Node中真正用于导出的其实根本不是exports，而是module.exports
module.exports = {
    UTIL_NAME,
    add,
    sub
}