export default {
  name:'小李',
  arg:123,
  fun:function () {
    console.log('default输出');
  }
}
//应为default默认以default变量名输出，所以上下两种方式一样
// let add = {
//   name:'小李',
//   arg:123,
//   fun:function () {
//     console.log('default输出');
//   }
// }
// export { add as default}

export let others='其他单个输出';
