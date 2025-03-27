import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["Hii there", "Hello"]);
  const wsRef = useRef();
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");
    ws.onmessage = (messages) => {
      setMessages((m) => [...m, messages.data]);
    };
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div className="h-screen bg-black">
        <br />
        <br />
        <div className="h-[85vh]">
          {messages.map((message) => (
            <div>
              <div className="bg-white text-black rounded-md p-4 m-8 w-fit">
                {message}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-white flex">
          <input
            id="messages"
            type="text"
            className="flex-1 p-4 focus:outline-none"
          />
          <button
            className="bg-purple-300 p-4 cursor-pointer"
            onClick={() => {
              const messages = document.getElementById("messages")?.value;
              wsRef.current.send(
                JSON.stringify({
                  type: "chat",
                  payload: {
                    message: messages,
                  },
                })
              );
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
