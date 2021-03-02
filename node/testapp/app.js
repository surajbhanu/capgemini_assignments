var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req,res){
    res.end("In home");
});

app.get('/contact', function(req,res){
    res.end("In contact");
});

app.get('/writefile', function(req,res){
    readstream = fs.createReadStream('/Users/surajbhanu/Desktop/Capgemini_assignments/node/testapp/test1.txt')

    writestream = fs.createWriteStream("/Users/surajbhanu/Desktop/Capgemini_assignments/node/testapp/test2.txt");
    readstream.pipe(writestream);

    // readstream.on('data', function(data){
    //     var chunk = data.toString();
    // })
});

app.listen(5000);
