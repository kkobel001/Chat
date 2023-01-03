// import { createServer } from 'http';
const express = require('express')
const { port } = require('./config');
// const server = createServer(app);
const app = express();
// const { Server } = require("socket.io");
// const io = new Server(server);
const cors = require("cors");

app.use(cors());

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

app.get('/api', (req,res)=>{
    res.json({"users": ["one", "two", "three"]})
})

app.listen(500, () => {
  console.log(`listening on port`);
});