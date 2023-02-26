const UTIL_NAME = 'util'
function add() {
    console.log('add')
    return 'add1'
}

function sub() {
    console.log('sub')
    return 'sub1'
}
// console.log(exports)  exports 是一个空对象
exports.UTIL_NAME = UTIL_NAME
exports.add = add
exports.sub = sub