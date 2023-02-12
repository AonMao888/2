var express = require("express");
var fs = require("fs");
var app = express();

app.get("/",(req,res)=>{
    res.send("This is home page")
})

const db = JSON.parse(fs.readFileSync("data.json","utf-8"));
app.get("/post",(req,res)=>{
    res.json(db);
})

app.listen(80,()=>{
    console.log("server started with port 80")
})