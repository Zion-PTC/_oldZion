import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  package: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch("http://localhost:5000/like");
  const data = await response.json();
  res.status(200).json(data);
}
