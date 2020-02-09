var express = require('express');
var app = express();

var port = 1234;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server starts at: ' + port);