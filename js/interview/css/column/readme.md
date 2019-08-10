- 两列布局 一列固定布局 一列自适应
  解一：弹性布局一个设置宽度，一个flex :1 
  解二：float使用bfc容器

- Object.defineProperty(obj,'txt',{
            get:function(){
                console.log('获得属性');
                return obj;
            },
            set:function(newValue){
                console.log('设置属性');
                render(newValue);
            }
    })
    在设置值或取值的时候，绑定事件