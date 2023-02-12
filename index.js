var express = require("express");
var app = express();

app.get("/",(req,res)=>{
    res.send("This is home page")
})
app.get("/post",(req,res)=>{
    res.send("This is post page")
})

app.listen(80,()=>{
    console.log("server started with port 80")
})