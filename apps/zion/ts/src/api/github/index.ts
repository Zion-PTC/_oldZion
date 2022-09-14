import { ZionGitHub } from "@zionstate/git/src/GitHub.js";
import { config } from "dotenv";
import express from "express";
export {};

config();
if (!process.env.GITHUB_TOKEN) throw new Error("No token was provided");

const app = express();

let octokit = new ZionGitHub(process.env.GITHUB_TOKEN);
const repos = await octokit.getRepos();

app.get("/", (req, res) => res.send(repos));

app.listen(5000, () => console.log("listening on 5000"));
