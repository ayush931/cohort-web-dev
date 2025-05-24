"use client";

import TextInput from "@repo/ui/textInput";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput size="small" placeholder="Write your text"></TextInput>
        <button
          onClick={() => {
            router.push("/chat/123");
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
