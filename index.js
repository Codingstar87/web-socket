import express from "express" ;
import { Server } from "socket.io";
import { createServer } from 'node:http';
import path from "node:path";

const app = express()
const server = createServer(app);
const io = new Server(server);

//socket.io
io.on('connection', (socket) => {                            //socket connextion
    socket.on("user-message:",(message) =>{                  // socket.on means  A message which are come from a single person in the  server 
        console.log("A massage from frontend :", message)    //print the msg which are come from client 
        io.emit("server-message", message)                   //io.emit means send the msg everyone from server
    })
});




//adjust frontand path
app.use(express.static(path.resolve("./public"))) ;


app.get("/", (req, res) => {
    return res.sendFile("./public/index.html");
});


const port = 9000;
server.listen(port, () => {
    console.log("Server is listening on port " + port);
});



