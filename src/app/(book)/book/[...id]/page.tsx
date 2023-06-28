import { getAllDocsLinkData, getDocsRawHtmlById } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const booklistData = getAllDocsLinkData();

  return booklistData.map((data) => {
    return { id: data.id.split("/").slice(1) };
  });
}

export default async function Page({ params }: { params: { id: string[] } }) {
  const id = params.id.join("/");
  const rawHtml = getDocsRawHtmlById(id);
  if (typeof rawHtml !== "string") notFound();
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
