import express from "express";
import { createMonorepo } from "../controllers/monorepos/createMonorepo.js";
import { deleteMonorepo } from "../controllers/monorepos/deleteMonorepo.js";
import { monorepos } from "../controllers/monorepos/monorepos.js";
export {};

const router = express.Router();

router.get("/", monorepos);
router.post("/create", createMonorepo);
router.post("/delete", deleteMonorepo);

export default router;
