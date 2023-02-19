var express = require("express");
var ejs = require("ejs");
var app = express();
var pass = "memo19";
app.use(express.json());
app.set('view engine','ejs');
var db = [];

app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/posts",(req,res)=>{
    var k = req.query.key;
    if(k === pass){
        res.json(db);
    }else{
        var fail = {
            "message":"Something was fail, try again!",
            "time":Date()
        };
        res.json(fail)
    }
})
app.post("/add/posts",(req,res)=>{
    var k = req.query.key;
    if(k === pass){
        var success = {
            "message":"Data was successfully added to api",
            "time":Date()
        };
        var newdata = req.body;
        console.log(req.body)
        db.push(newdata);
        res.json(success);
    }else{
        var fail = {
            "message":"Add data was failed, try again!",
            "time":Date()
        };
        res.json(fail)
    }
})

app.listen(80,()=>{
    console.log("server started with port 80")
})