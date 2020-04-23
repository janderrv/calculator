var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render("index");
});

app.use(express.static(__dirname + '/public'));


app.listen(3000, ()=>{
    console.log("App running!");
});