import { create, globSource } from "ipfs-http-client";
import { IPFSHTTPClient } from "ipfs-http-client/dist/src/types";
import { toString } from "uint8arrays";
import { runProcess } from "./runProcess.js";

const ROOTFOLDER = "";
const LOGTARGETFOLDER = "";
// LOG MESSAGES
const SUCCESMESS =
  "Loadbatch process executed correctly. You can find the log here: ";
// ENV

const main = async () => {
  const ipfs: IPFSHTTPClient = create({
    host: "12D3KooWBiFqsa9J81tFs6iG6wHdHUSRYEHTpZd3vN1Pk5k7gtqs",
  });
  // const add = await ipfs.add("hallo world");
  const file = ipfs.cat("QmTbgShF98BkaJGRkfgVkiPRkB2A5Td2fdo2fi4qyDx7HP");
  for await (const r of file) console.log(toString(r));

  console.log(await ipfs.version());
};

runProcess(main, SUCCESMESS);
