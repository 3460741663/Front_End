#BFC 概念
Block Formatting context(块级格式化上下文)

#BFC 的渲染规则
1. BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔绝的空间，外面的元素不会影响BFC里面的元素，反之，里面的元素也不会影响
    外面的元素
2. BFC的区域不会与浮动元素box重叠
3. 垂直方向上的外边距会发生边距重叠（包括父子元素，兄弟元素）

#BFC的创建方法
根元素或其它包含它的元素；
浮动 (元素的float不为none)；
绝对定位元素 (元素的position为absolute或fixed)；
行内块inline-blocks(元素的 display: inline-block)；
表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
overflow的值不为visible,initial,unset的元素；
弹性盒 flex boxes (元素的display: flex或inline-flex)；

但其中，最常见的就是overflow:hidden、float:left/right、position:absolute。也就是说，每次看到这些属性的时候，就代表了该元素以及创建了一个BFC了。
