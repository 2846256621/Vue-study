const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
const datas = [
    {
        id:1,
        'title':"你好啊"
    },
    {
        id:2,
        'title':"我是第一个"
    },
    {
        id:3,
        'title':"我是第er个"
    },
    {
        id:4,
        'title':"我是第san个"
    }
];
//跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app
    .get('/datas',(req,res) =>{
        res.json(datas);
    })

    .post('/datas',(req,res) =>{
        let data ={
            title:req.body.title,
            id:datas[datas.length -1].id+1
        };
        datas.push(data);
        res.json(datas);
    })
    .patch('/datas/datastID',(req,res) =>{

    })
    .delete('/datas/datastID',(req,res) =>{

    });

app.listen(8080,function () {
   console.log('http://localhost:8080');
});