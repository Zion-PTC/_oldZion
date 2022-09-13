import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { ZionRegExp } from "@zionstate_js/regexp";
const check = ZionRegExp.fileExtensionWithPoint;

const imageSource =
  "/Users/WAW/Documents/Projects/ZION/apps/pfp_minter/database/content/_cropped";

export default function handler(
  req: NextApiRequest & { query: { id: string } },
  res: NextApiResponse
) {
  const imagesFiles = fs
    .readdirSync(imageSource)
    .filter((file) => file[0] === "0")
    .filter((file) => file.match(check)[0] === ".jpg")
    .map((file) => imageSource + "/" + file);
  res.send(`${imagesFiles[req.query.id]}`);
}
