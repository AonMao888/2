const express = require("express");
const socket = require("socket.io");
const app = express();
app.use(express.static(__dirname+'/p'))

app.get('/',(req,res)=>{
    res.send("hi")
})

const server = app.listen(process.env.PORT || 80,()=>{
    console.log("Server started with port 80")
})

const io = socket(server);
io.on("connection",(socket)=>{
    socket.on("h",(data)=>{
        io.sockets.emit('h',data);
    })
})