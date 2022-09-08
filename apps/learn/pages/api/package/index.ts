import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  package: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ package: "new package" });
}
