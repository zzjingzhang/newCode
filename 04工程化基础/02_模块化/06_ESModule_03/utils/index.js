import { formatCount, formatDate } from "./format.js";
import { parseLyric } from "./parse.js";

export {
    formatCount,
    formatDate,
    parseLyric
}

// 优化一  先导入 然后再导出
// export { formatCount, formatDate } from './format.js'
// export { parseLyric } from './parse.js'

// 优化二
// export * from './format.js'
// export * from './parse.js'