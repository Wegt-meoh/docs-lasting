import { getAllBooksList } from "@/lib/posts";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { id: string; title: string; description: string }[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  try {
    const bookListData = getAllBooksList();
    if (bookListData) {
      res.status(200).json(bookListData);
    } else {
      res.status(500).send("can not get book list data");
    }
  } catch (err) {
    console.log(`pages/api/booklist,error reason: ${err}`);
  }
}
