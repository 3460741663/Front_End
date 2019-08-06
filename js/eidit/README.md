-   如果我们有好多信息要从用户收集
    表单不要太长 让表单更加易用
    移动 分页之后一次性提交
    pc端，多个表单 通过document.forms['userForm'];来获取

-   JS在面向对象中
    this指向谁？
    EditInPlace 类 抽象概念 老板
    let eidit = new EditInPlace();//员工
    this 指向的是editor
    this.staticElement = document.createElement('span')
    this.convertToText()//既是函数，又是对象的方法，this指向对象
    this.staticElement.addEventListen('click',function(){
        this => 对象 此时this指向了事件发生的对象
        这时需要重新绑定this
        作为事件来执行 内部的this 指向事件发生的元素
    })

-   函数内部的this是动态决定的，执行的方式来决定的
    this.converToText(); //函数是作为对象的方法被调用 this指向对象

- EditInPlace 类 constructor + prototype