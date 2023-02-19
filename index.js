var express = require("express");
var ejs = require("ejs");
const e = require("express");
const ytdl = require("ytdl-core");
var app = express();
var pass = "memo19";
app.use(express.json());
app.set('views',__dirname+'/views')
app.set('view engine','ejs');
var db = [];

app.get("/",(req,res)=>{
    res.render('index',{text:"Hello you're"})
})
app.get('/d',(req,res)=>{
    var id = req.query.link.split("v=")[1];
    res.setHeader('Content-Disposition',`attachment; filename="${id}.mp4"`)
    ytdl(req.query.link,{quality: 'highest'}).pipe(res)
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