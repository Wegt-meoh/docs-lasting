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
      res.status(404).json("Error: no id in request query");
      return;
    }
    const content = getBookContentById(id);
    res.status(200).json(content);
  } catch (error) {
    res.status(404).send(`catch error reason: ${error}`);
  }
}
