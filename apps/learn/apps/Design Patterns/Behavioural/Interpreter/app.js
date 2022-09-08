import express from "express";
import { Roman, Arabic } from "./src/NumeriRomani.js";

const app = express();
app.use(express.json());

app.post("/romantonumber", (req, res) => {
  res.json(new Roman(req.body.value).ctx.output);
});

app.post("/numbertoroman", (req, res) => {
  res.json(new Arabic(req.body.value).ctx.output);
});

app.listen(3000, () => console.log("App listening on port 3000"));
