import { BooklistDataType } from "@/types/booklist";

export async function getBooklistData(): Promise<BooklistDataType[]> {
  const res = await fetch(`http://localhost:3000/api/booklist`);
  return res.json();
}
