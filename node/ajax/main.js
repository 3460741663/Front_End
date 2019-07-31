// 实现live-server
// 给index.hmtl 提供httP访问的支持
const http = require('http');
const fs = require('fs');
const index = fs.createReadStream('./index.html');
//提供web服务 一直伺服
//向req返回response资源 向外暴露资源
const server = http.createServer((req,res)=>{
    // res.end('hello world');
    // index.html 显示出来
    // req 浏览器 访问网站代理

    if(req.url == '/'){
        index.pipe(res)
        // res.end('index page');
    }
    else if (req.url == '/userinfo'){
        const info = {
            "name":"徐佳影",
            "desc":"身骑白马"
        }
        res.writeHead(200,{
            'content-Type':'text/plain;charset=utf-8'
        })
        res.end(JSON.stringify(info));
    }
    else{
        res.end('hello world');
    }
});

server.listen('1314');

