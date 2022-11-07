const express = require('express');

const app = express();

app.get('/home', (request, response)=>{
    //响应一个页面
    response.sendFile(__dirname + '/index.html');
    // __dirname是nodejs里面用来获取绝对路径的
});

app.get('/data', (request, response)=>{
    response.send('用户数据');
});

app.listen(9000, ()=>{//在9000端口启动
    console.log("服务已经启动...");
});


//在浏览器输入http://127.0.0.1:9000/home
//这个时候我们访问页面,页面从127.0.0.1:9000来的(平时我们用live server是127.0.0.1:9000)
//用户数据也是从127.0.0.1:9000(server.js)来的
//所以这两个数据时同源的
//请求满足同源策略
//因此可以直接发送AJAX请求



