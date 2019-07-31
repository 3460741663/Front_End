const fs = require('fs');//文件模块
// require模块引入机制 fs系统内置模块
// IO
// 前端的Windows 后端的process

fs
    // 创建可读流
    .createReadStream('./sample.txt')
    // 管道 process.stdout
    .pipe(process.stdout);//输出设备的一种，交互设备
