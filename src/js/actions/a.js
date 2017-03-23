'use strict';
/*
 * @author dipu 2017-03-09
 * @version 1.0.0
 * action 类型
 */
export const A_ADD = 'A_ADD';
export const A_REDUCE = 'A_REDUCE';
/*
 * action 创建函数
 * @method  aAdd  A页面的+动作
 * @param  {String} text 加几
 */
const aAdd = (number) => ({
    type: A_ADD,
    payload:number
})
/*
 * action 创建函数
 * @method  aAdd  A页面的-动作
 * @param  {String} text 减几
 */
const aReduce = (number) => ({
    type: A_REDUCE,
    payload:number
})


/* default 导出所有 Action Creators */
export default {
    // 虽然是同步的函数，但请不要自行 bindActionCreators
    // 皆因调用 connect 后，react-redux 已经帮我们做了，见：
    // https://github.com/reactjs/react-redux/blob/master/src/utils/wrapActionCreators.js
    aAdd,aReduce
}