import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  sorgente: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ sorgente: "new source" });
}
