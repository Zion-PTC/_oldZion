import { Types } from "@zionstate/git";
import { controller } from "./index.js";

export type monoreposType = controller<Types.IMonorepo>;
export type createMonorepoType = controller<Types.IMonorepo>;
export type readMonorepoType = controller<Types.IMonorepo>;
export type editMonorepoType = controller<Types.IMonorepo>;
export type deleteMonorepoType = controller<Types.IMonorepo>;
