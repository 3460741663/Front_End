- canvas 
- JS异步是和核心问题
    事件 定时器  fetch/ajax 让代码的编写顺序和执行顺序不一样
    代码的可读性下降
    loadAssets() 1秒 为什么不等待？
    hideWelcome() 在他之后执行
    实际： 先hideWelcome() 后loadsAssets执行完成
    JS单线程语言  JAVA多线程
    所以在一次执行中，会把立即执行的代码执行掉，再把事件监听/定时器/Ajax 事件轮询中
    使用回调函数
    img.onload
    window.onload 开始我们的表演太慢了，整个窗口加载之后
    document.ready()早于window，且晚于html， css加载完，让图片自己个慢慢加载

-函数式编程
    写代码？完成开发需求 复杂 ，<= 独立的多个子需求来完成 <= 单独封装成一个函数
    init();
    drawSnake();
    addEvent();
    refreshSnake();
    winOrLoose();
    showResult();
