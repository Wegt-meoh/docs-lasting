import { getBookContentById } from "@/lib/posts";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { id } = req.query;
    if (typeof id !== "string") {
      throw new Error("id is not string");
    }
    const content = getBookContentById(id);
    res.status(200).json(content);
  } catch (error) {
    res.status(404).send(`catch error reason: ${error}`);
  }
}
