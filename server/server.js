// const http = require('http');
// const server = http.createServer(app);
const express = require('express');
const {port}=require('./config');
// const app = require('./app');
const app= express();
// const { Server } = require("socket.io");
// const io = new Server(server);


// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

app.listen(port, () => {
  console.log('listening on port: ${port}');
});

app.get('/api', (req,res)=>{
    console.log(req);
    res.json({"users": ["one", "two", "three"]})
})

// app.listen(80,()=>{
//     console.log(`Aplikacja wystartowala`)
// })