##高阶函数及其使用
* 参数 js的参数比较松散 arguments都能拿到
    event对象是一定会传的 事件注册和处理函数的分离
    event.target event.target.tagName 事件目标对象
    this指向事件发生的元素，但是箭头函数内部this丢失，默认指向它的上一级
    事件注册不能一次性给数组元素注册
    dateset.id(...)用来获取data-id(...)属性值
* ajax fetch 让页面可以主动的发起请求，变成动态网页
    fetch返回readablestream可读流，但是页面并不能处理<!-- fetch('/data.json') -->
    data.json把可读流变成json数据格式<!-- fetch('/data.json').then(data =>data.json()) -->
    之后就能把json数据打印出来
* 事件注册
    