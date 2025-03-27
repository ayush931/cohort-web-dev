import { useEffect } from "react";
import "./App.css";

function App() {
  function sendMessage () {

  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000")
    ws.onmessage = (e) => {
      console.log(e.data)
    }
  }, [])

  return (
    <div>
      <input type="text" placeholder="message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
