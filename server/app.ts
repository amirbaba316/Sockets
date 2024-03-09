import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import { Server } from 'socket.io';

dotenv.config();


const app = express();

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:'*'
    }
}); //socket server was created.

io.on('connection',(socket)=>{
    console.log('connection was established');
    socket.on('chat',(data)=>{
        io.emit('chat',data)
    })
    socket.on('disconnect',()=>{
        console.log('connection was disconnected')
    })
});

const port = process.env.PORT;

server.listen(port, ()=> console.log(`app listening on port ${port}`))

