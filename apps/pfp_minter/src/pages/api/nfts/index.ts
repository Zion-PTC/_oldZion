import { NextApiRequest, NextApiResponse } from "next";
import { NextApiHandler } from "../../../lib/api/apiHanlder";
import { OpenSeaMetadata } from "../types";
import fs from "fs";
import { NftsData } from "../../collection/types";

const source =
  "/Users/WAW/Documents/Projects/ZION/apps/pfp_minter/database/content/metadata";
const database: NftsData = {};
const files: string[] = fs.readdirSync(source);
const metadata: Buffer[] = files.map((file) =>
  fs.readFileSync(source + "/" + file)
);

const objs: OpenSeaMetadata[] = metadata.map((buffer) =>
  JSON.parse(buffer.toString())
);

objs.forEach(async (obj, i) => {
  // const response = await fetch(
  //   `http://localhost:3000/api/nfts/${i.toString()}`
  // );
  // const data = await response.json();
  `http://localhost:3000/api/nfts/${i.toString()}`;
  database[i.toString()] = {
    id: i,
    name: obj.name,
    slug: i.toString(),
    src: obj.image,
  };
});
console.log(database);

// const database: NftsData = {
//   "0": { id: 0, name: "ciao", slug: "boo" },
//   "1": { id: 1, name: "zion", slug: "goo" },
//   "2": { id: 2, name: "flyon", slug: "foo" },
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NftsData>
) {
  const handler = new NextApiHandler("ram");
  res.send(database);
  // handler.strategy(req, res, database);
}
