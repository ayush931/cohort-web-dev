import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 4000 });

wss.on("connection", function (socket) {
  console.log("user connected");
  socket.on("message", function(event) {
    if (event.toString() === "ping") {
      console.log(event.toString())
      socket.send("pong")
    }
    else {
      socket.send("Not a Ping Pong")
    }
  })
  
  setInterval(() => {
    socket.send("Hello")
  }, 1000)
});
