const express= require("express");
const app= express();
const http = require('http');
const server = http.createServer(app);
const port = 3000;
// const { Server } = require("socket.io");
// const io = new Server(server);


// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

server.listen(port, () => {
  console.log('listening on port :{port}');
});

app.get('/', (req,res)=>{
    console.log(req);
    res.send('<h1>Serwer działa</h1>')
})

// app.listen(80,()=>{
//     console.log(`Aplikacja wystartowala`)
// })