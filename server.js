// // server.js
// const express = require('express');
// const app = express();
// const cors = require('cors')

// app.use(cors()) 
// const server = app.listen(8000, () =>
//     console.log('The server is all fired up on port 8000')
// );


// app.use(express.json());
// app.use(express.json(), express.urlencoded({ extended: true }));

// // To initialize the socket, we need to
// // invoke the socket.io library
// // and pass it our Express server
// const io = require('socket.io')(server, { cors: true });

// io.on("connection", socket => {
//     // this runs everytime there is a new connection
//     // each user gets their own socket.id
//     console.log(socket.id);
//     // console.log(socket);
//     socket.emit("welcome", "ken");

//     socket.on("welcome", data => {
//         // socket.broadcast.emit("send_to_other_users", data);
//         console.log(data);
//         // socket.emit("to specific clients");

//     })
// });



const express = require('express')
const cors = require('cors')
const app = express()
const server = app.listen(8000, () => console.log("The server is all fired up on port 8000"))
const io = require('socket.io')(server, { cors: true })

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// require('./server/config/mongoose.config');
// require('./server/routes/user.routes')(app);

io.on("connection", (socket) => {
    console.log("user connected")
    socket.emit("message", {username : "ken12", message:"joined"});
    socket.emit("welcome", {hey: "world"});
    socket.on("message", ({username,message}) => {
        io.emit('message', {username, message})
    })
})