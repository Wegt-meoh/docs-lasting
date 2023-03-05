import { getAllBooksList } from "@/lib/posts";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { id: string; title: string; description: string }[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(getAllBooksList());
}
