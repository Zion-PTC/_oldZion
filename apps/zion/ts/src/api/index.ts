import express from "express";
import monorepoRouter from "./monorepos/monorepos.js";
import { Monorepo as Monorepos } from "@zionstate/git";

export default Monorepos;

const app = express();
app.use(express.json());

app.use("/monorepos", monorepoRouter);
app.get("/", (_, res) => res.send("ciao"));

app.listen(5000, () => console.log("listening on 5000"));
