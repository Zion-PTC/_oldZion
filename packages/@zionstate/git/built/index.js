export * from "./src/GitHub.js";
export * from "./src/Git.js";
export * from "./src/Repo.js";
export * as dotenv from "dotenv";
export * from "./src/Types/index.js";
import * as GitHub from "./src/GitHub.js";
import * as Git from "./src/Git.js";
import * as Repo from "./src/Repo.js";
import * as dotenv from "dotenv";
export default {
    ...GitHub,
    ...Git,
    ...Repo,
    ...dotenv,
};
