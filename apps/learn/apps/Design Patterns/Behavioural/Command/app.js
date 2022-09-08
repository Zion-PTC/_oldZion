import express from "express";
import { Calculator } from "./src/Calculator.js";

const app = express();
app.use(express.json());
const calc = new Calculator();
const [sum, sub, mul, div] = calc.availableCommands;

app.post("/add", (req, res) => {
  calc.execute(sum(req.body.value));
  res.json(calc.getCurrentValue());
});

app.post("/sub", (req, res) => {
  calc.execute(sub(req.body.value));
  res.json(calc.getCurrentValue());
});

app.post("/mul", (req, res) => {
  calc.execute(mul(req.body.value));
  res.json(calc.getCurrentValue());
});

app.post("/div", (req, res) => {
  calc.execute(div(req.body.value));
  res.json(calc.getCurrentValue());
});

app.get("/currentValue", (req, res) => {
  res.json(calc.getCurrentValue());
});

app.get("/undo", (req, res) => {
  calc.undo();
  res.json(calc.getCurrentValue());
});

app.listen(3000, () => console.log("App listening on port 3000"));
