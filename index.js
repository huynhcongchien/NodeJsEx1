var express = require('express')
var app = express();
var port = 3001;
app.get('/', function (req, res){
    res.send('hello chien');
});
app.listen(port,function(){
    console.log('sever listening on port'+ port);
});