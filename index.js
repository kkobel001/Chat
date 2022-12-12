const express= require("express");
const app= express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

app.get('/', (req,res)=>{
    console.log(req);
    res.send('<h1>Serwer działa</h1>')
})

app.listen(80,()=>{
    console.log(`Aplikacja wystartowala`)
})