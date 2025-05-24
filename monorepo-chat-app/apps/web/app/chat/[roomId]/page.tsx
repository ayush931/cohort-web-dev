import TextInput from "@repo/ui/textInput";

export default function chatRoom() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>Chat Room</div>
      <TextInput size="big" placeholder="Chat here..."></TextInput>
    </div>
  );
}
