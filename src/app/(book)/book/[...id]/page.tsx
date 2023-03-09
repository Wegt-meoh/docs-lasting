import { getBooklistData } from "@/lib/booklist";
import AdocIframe from "@/ui/AdocIframe";
import { notFound } from "next/navigation";

export const dynamicParams = false;

async function getContentById(id: string) {
  const res = await fetch(`http://localhost:3000/api/bookContent?id=${id}`);
  if (res.status === 200) {
    return res.json();
  } else {
    notFound();
  }
}

export async function generateStaticParams() {
  const booklistData = await getBooklistData();

  return booklistData.map((data) => {
    return { id: data.id.split("/").slice(1) };
  });
}

export default async function Page({ params }: { params: { id: string[] } }) {
  const id = params.id.join("/");
  const content = await getContentById(id);

  return <AdocIframe content={content} />;
}
