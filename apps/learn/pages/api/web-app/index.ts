import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  web_app: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ web_app: "new design pattern" });
}
