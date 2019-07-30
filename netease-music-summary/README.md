##
position: static 默认，
position: absolute;相对于父级第一个 非 static 定位的元素

## linear-gradient
渐变角度，to bottom
渐变线

## 适配
transform：scale(.75)
transform：scale(.5)
transform：scale(.3)

///xxx.png
自动补全
http http:
https https:

position 脱离文档流
动画就是css属性的改变
当一个css属性改变了，浏览器将其绘制在页面上 同时也会影响其他元素
让其他元素少受到该元素的影响

/* 设计很巧妙 */
.f-aniLineUp{
  opacity: 0;
  transform: translateY(6px);
}
.swiper-slide-active .f-aniLineUp{
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1.2s,transform 1s;
}
