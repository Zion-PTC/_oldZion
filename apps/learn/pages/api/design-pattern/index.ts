import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  design_pattern: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ design_pattern: "new design pattern" });
}
