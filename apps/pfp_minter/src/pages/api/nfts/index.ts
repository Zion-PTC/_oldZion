import { NextApiRequest, NextApiResponse } from "next";
import { NextApiHandler } from "../../../lib/api/apiHanlder";
import { NftsData } from "../types";
import fs from "fs";

const source =
  "/Users/WAW/Documents/Projects/ZION/apps/pfp_minter/database/content/metadata";
console.log("ciao");
try {
  const files: string[] = fs.readdirSync(source);
  const bufffers: Buffer[] = files.map((file) =>
    fs.readFileSync(source + "/" + file)
  );
  const objs = bufffers.map((buffer) => JSON.parse(buffer.toString()));
  console.log(objs);
} catch (error) {
  console.log(error);
}

const database: NftsData = {
  "0": { id: 0, name: "ciao", slug: "boo" },
  "1": { id: 1, name: "zion", slug: "goo" },
  "2": { id: 2, name: "flyon", slug: "foo" },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NftsData>
) {
  const handler = new NextApiHandler("ram");
  handler.strategy(req, res, database);
}
