function Block() {
    this.upDivWrap = null;
    this.downDivWrap = null;
    this.downHeight = baseObj.ramdomNum(0,150);
    this.gapHeight = baseObj.ramdomNum(150,160);
    this.upHeight = 312 - this.downHeight - this.gapHeight;
    //用来生成div的方法
    this.creatDiv = function (url, height, positionType, left, top){
        var newDiv = document.createElement('div');
        newDiv.style.width = '62px';
        newDiv.style.height = height;
        newDiv.style.position = positionType;
        newDiv.style.left = left;
        newDiv.style.top = top;
        newDiv.style.backgroundImage = url;
        return newDiv;
    }
    this.creatBlock = function(){
        //上方管道
         var upDiv1 = this.creatDiv('url(img/up_mod.png)',this.upHeight + 'px');
         var upDiv2 = this.creatDiv('url(img/up_pipe.png)','60px');
         this.upDivWrap = this.creatDiv(null,null,'absolute','450px');
         this.upDivWrap.appendChild(upDiv1);
         this.upDivWrap.appendChild(upDiv2);
        //下方管道
        var downDiv2 = this.creatDiv('url(img/down_mod.png)',this.downHeight + 'px');
        var downDiv1 = this.creatDiv('url(img/down_pipe.png)','60px');
        this.downDivWrap = this.creatDiv(null,null,'absolute','450px',363 - this.downHeight + 'px');
        this.downDivWrap.appendChild(downDiv1);
        this.downDivWrap.appendChild(downDiv2);

        jsWrapBg.appendChild(this.upDivWrap);
        jsWrapBg.appendChild(this.downDivWrap);
    }
    this.moveBlock = function(){//管道移动的方法
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px';
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + 'px';
    }
}