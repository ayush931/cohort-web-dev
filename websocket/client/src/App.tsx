import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [socket, setSocket] = useState();

  function sendMessage() {
    if (!socket) {
      return;
    }
    const message = inputRef.current?.value
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");
    setSocket(ws);
    ws.onmessage = (event) => {
      alert(event.data);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
