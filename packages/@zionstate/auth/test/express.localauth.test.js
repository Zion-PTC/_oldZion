import express from "express";
import { Auth } from "../built/src/Auth.js";

const register = async (req, res) => {
  const name = req.body.name;
  const pass = req.body.password;
  const request = { name, password: pass };
  const response = await auth.createUser(request);
  res.json(response === 0 ? "Success" : "Failure");
};

const app = express();
app.use(express.json());

const auth = new Auth();

app.get("/users", async (req, res) => {
  res.json(await auth.getUsers());
});

app.post("/user/register", register);

app.post("/users/login", async (req, res) => {
  await auth.login({ name: req.body.name, password: req.body.password });
});

app.listen(3000, () => console.log("App listening on port 3000"));
