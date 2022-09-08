import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  blog_post: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ blog_post: "new blog-post" });
}
