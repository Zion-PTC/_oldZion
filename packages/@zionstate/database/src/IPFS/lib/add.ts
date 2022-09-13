import { create, globSource } from "ipfs-http-client";
import { IPFSHTTPClient } from "ipfs-http-client/dist/src/types";
import { runProcess } from "./runProcess.js";
import { basename, extname } from "path";
import { ZionRegExp } from "@zionstate_js/regexp";
import { addAndPrintLog } from "./addAndPrintLog.js";
const check = ZionRegExp.filenameFromPath;

const ROOTFOLDER = "";
const LOGTARGETFOLDER =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/database/src/IPFS/lib/logs/";
// LOG MESSAGES
const SUCCESMESS =
  "add.js process executed correctly. \nYou can find the log here:\n" +
  LOGTARGETFOLDER;
const ERROR1 = "There was a problem with the file name";
const ERROR2 = "File must be of type: ";
// ENV
const host = "12D3KooWBiFqsa9J81tFs6iG6wHdHUSRYEHTpZd3vN1Pk5k7gtqs";
const path =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/database/src/IPFS/lib/test.json";
const filetype = ".json";
const nameExtension = "-ipfs-deploy-log.json";

const main = async () => {
  const ipfs: IPFSHTTPClient = create({
    host,
  });
  const regexpCheck = check.exec(path);
  if (!regexpCheck) throw new Error(ERROR1);
  const filename = regexpCheck[0];
  const condition = extname(basename(path)) === filetype;
  if (!condition) throw new Error(ERROR2 + filetype);
  await addAndPrintLog(ipfs, filename, LOGTARGETFOLDER, path, nameExtension);
};

runProcess(main, SUCCESMESS);
