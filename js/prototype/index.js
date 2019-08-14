//es5的面向对象
function Person(name){//女主角
    //constructor构造函数
    //Object
    this.name = name;
}
Person.prototype = {
    getName : function(){
        return this.name
    },
    playHpjy : function(){
        console.log('今晚吃鸡，大吉大利！');
    }
}

// new + function()返回一个对象
//实例 第三者
let person = new Person('赵小猛');
console.log(person);
