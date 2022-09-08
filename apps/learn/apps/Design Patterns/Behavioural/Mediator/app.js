import express from "express";
import { Chatroom, Participant } from "./src/Chat.js";

const app = express();
app.use(express.json());

const chatroom = new Chatroom();

app.post("/register", (req, res) => {
  const participant = new Participant(req.body.nome);
  chatroom.register(participant);
  res.json("Registered " + req.body.nome);
});

app.post("/send", (req, res) => {
  chatroom.participants[req.body.to].send(
    req.body.message,
    chatroom.participants[req.body.to]
  );
});

app.listen(3000, () => console.log("Listening on 3000"));
