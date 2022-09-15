import { create } from "ipfs-http-client";
import { IPFSHTTPClient } from "ipfs-http-client/dist/src/types";
import { runProcess } from "./runProcess.js";
import fs from "fs";
import { Dirent } from "@zionstate/system";
import { extname } from "path";
import { addAndPrintLog } from "./addAndPrintLog.js";

const filetype = ".json";
const ROOTFOLDER =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/database/src/IPFS/lib";
const LOGTARGETFOLDER =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/database/src/IPFS/lib/logs/";
// LOG MESSAGES
const SUCCESMESS =
  "Loadbatch process executed correctly. You can find the log here: " +
  LOGTARGETFOLDER;
const ERROR1 =
  "\n\nThere are no files in the expected format.\nExpexted format: " +
  filetype +
  "\n\n";
// ENV
const host = "12D3KooWBiFqsa9J81tFs6iG6wHdHUSRYEHTpZd3vN1Pk5k7gtqs";
const nameExtension = "-ipfs-deploy-log.json";

const main = async () => {
  const ipfs: IPFSHTTPClient = create({
    host,
  });
  // const add = await ipfs.add("hallo world");
  const filesindir: Dirent[] = fs.readdirSync(ROOTFOLDER, {
    withFileTypes: true,
  });
  const correctFiles = filesindir.filter(
    (file) => extname(file.name) === filetype
  );
  if (!correctFiles.length) throw new Error(ERROR1);

  // const file = await ipfs.add(JSON.stringify(obj));
  interface LogInfos {
    path: string;
    size: number;
    date: Date;
    filename: string;
  }
  correctFiles.map((file) =>
    addAndPrintLog(ipfs, file.name, LOGTARGETFOLDER, ROOTFOLDER, nameExtension)
  );
};

runProcess(main, { successMess: SUCCESMESS });
