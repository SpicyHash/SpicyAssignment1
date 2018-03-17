var express  = require('express');
var app = express();
var port = 3000;

//app.use(express.static('public'));

app.use(express.static('src/views'));

app.get("/", function(req, res){
    res.send("Nothing!");
    
});

app.get("/login", function(req, res){
    res.send("Wouldn't you like to play games?");
});

//Listen on the port
app.listen(port, function(err){
    console.log("Server Is Running on Port " + port);
});