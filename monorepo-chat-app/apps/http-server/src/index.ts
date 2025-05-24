import express from "express";
const app = express();

app.get("/signup", (req, res) => {
  res.send("Hello World");
});

app.get("/signin", (req, res) => {
  res.send("Hello World");
});

app.get("/chat", (req, res) => {
  res.send("Hello");
});

app.listen(4000, () => {
  console.log("App is running on 4000");
});
