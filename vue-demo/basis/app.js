const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('/basis/',express.static('./basis'));
app.use('/views/',express.static('./views'));
app.engine('html',require('express-art-template'));
app.get('/',(req,res) =>{
        res.render('ajax.html');
    });

app.listen(8080,function () {
    console.log('http://localhost:8080');
});