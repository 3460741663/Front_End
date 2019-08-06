const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
//GET POST 
// http.createServer
https.get('https://www.smzdm.com/youhui/',function(res){
    res.setEncoding('utf-8');
    let html = ''
    res.on('data',function(chunk){
        html += chunk
    });//当受到数据的时候
    res.on('end',function(chunk){
        //console.log(html);
        const $ = cheerio.load(html,{
            decodeEntities : false
        })
        //选中,循环每一项
        //只有一个参数 整个doucument
        let lists = [];
        $('.list.list_preferential').each(function(){
            const _this = this;
            let title = $('.itemName a',_this).text();//$('.this').queryseletor('.itemName a ');
            const price = $('.red',_this).text();
            const img = $('.picLeft img',_this).attr('src');
            lists.push({
                title:title,
                price,
                img
            })
            saveImage('./img/',img);
        })
        saveList('./data/lists.json',lists);
    });//当数据传完了
});//以get的请求方式，访问一个url
function saveList(path,list){
    fs.writeFile(path,JSON.stringify(list),(err)=>{
        //console.log(err);
        if(!err){
            console.log('lists saved');
        }
    })
}
function saveImage(imgDir,imgUrl){
    https.get(imgUrl,(res)=>{
        res.setEncoding('binary');
        var data = '';
        const imaName = path.basename(imgUrl);//获得a.png
        res.pipe(fs.createWriteStream(imgDir+ imaName));
        // res.on('data',(chunk) =>{
        //     data += chunk;
        // });
        // res.on('end',function(){
        //     //www.smzdm.com/a.png;
        //     const imaName = path.basename(imgUrl);//获得a.png
        //     fs.writeFile(imgDir + imaName,data,'binary',(err)=>{
        //         if(!err){
        //             console.log('img saved');
        //         }
        //     });
        // });
    })
}