import { NextApiRequest, NextApiResponse } from "next";
import { NftsData } from "../types";

const database: NftsData = {
  "0": { id: 0, name: "ciao", slug: "boo" },
  "1": { id: 1, name: "zion", slug: "goo" },
  "2": { id: 2, name: "flyon", slug: "foo" },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NftsData>
) {
  res.status(200).json(database);
}
