//一个字符
//let phoneReg = /1[3-9][0-9]{9}$/;//^xxx以什么什么开头 $以什么什么结尾
//console.log(phoneReg.test("我的手机号18770869179"));
// let phoneReg = /(1[3-9][0-9])[0-9]{8}/;
// let str = "我的号码是18296653815,收下18296653815吧";
// // 得到手机号，判断服务商
// console.log(str.match(phoneReg));
// 3460741663@qq.com邮箱
let emailReg =  /^[0-9a-zA-Z\-_]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;//+号匹配一次或者多次
console.log(emailReg.test("3460741663@qq.com"));
