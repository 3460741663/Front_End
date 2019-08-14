- prototype的三角恋
    构造函数(constructor) 构造函数的原型对象 {} 实例
    Person.prototype = {}
    Person.prototype.getName

    es6 class 只是语法糖 只是模拟了一下class
    Person 构造函数都会有prototype属性 指向一个原型对象
    实例会通过 prototype属性拿到所有的方法
    person.getName();

    person.prototype.constructor = Person()
    Person 1=> n person

    person person.prototype
    实例如何拿到原型链上的方法呢？

    person.__proto__获得某个对象的原型对象
    person.__proto__ == Person.prototype

- 继承的实现
    Person.prototype = new Animal('earth');