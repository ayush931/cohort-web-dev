interface PropType {
  placeholder: string;
  size: "small" | "big";
}

export default function TextInput({ placeholder, size }: PropType) {
  return (
    <input
      placeholder={placeholder}
      style={{
        padding: size === "small" ? 10 : 20,
        margin: size === "small" ? 10 : 20,
        borderColor: "black",
        borderWidth: 1,
      }}
    ></input>
  );
}
