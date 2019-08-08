
/**
 * 使用vue-resource 1.0版本的方法
 * */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use('/my-practice/',express.static('./my-practice'));
app.set('views','vue-study/my-practice');
app.engine('html',require('express-art-template'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//允许跨域访问
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
let data ={
    list:[
        {id:1,name:"奔驰",date:new Date()},
        {id:2,name:"宝马",date:new Date()},
        {id:3,name:"奥迪",date:new Date()},
        {id:4,name:"劳斯莱斯",date:new Date()},
        {id:5,name:"五菱宏光",date:new Date()},
        {id:6,name:"卡丁车",date:new Date()}
        ],
    status:0
};
app.get('/',function (req,res) {
    res.send(data);
});
app.post('/add',function (req,res) {
    // console.log(req.body);
    data.list.push(req.body);
    res.send({status:0}); //后台返回数据
});
app.get('/del',function (req,res) {
    // console.log(req.query.id);
    //删除数据
    data.list = data.list.filter(item=>{
        return item.id !== parseInt(req.query.id);
    });
    res.send({status:0});
});
app.get('/search',function (req,res) {
    res.send( data.list.filter(item=>{
        return item.name === req.query.name;
    }));
});
app.listen(8080,function () {
   console.log("http://localhost:8080")
});