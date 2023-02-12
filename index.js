var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.json())
app.use(express.static('p'))
var db = [
    {"name":"a"},
    {"name":"b"}
];

app.get("/",(req,res)=>{
    res.send("This is home page")
})

app.get("/posts",(req,res)=>{
    res.json(db);
})
app.post("/posts",(req,res)=>{
    var newdata = req.body;
    console.log(req.body)
    db.push(newdata);
    res.json(db);
})

app.listen(80,()=>{
    console.log("server started with port 80")
})