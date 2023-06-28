import { getAllDocsLinkData, getDocRawHtmlById } from "@/lib/posts";

export const dynamicParams = false;

export async function generateStaticParams() {
  const booklistData = getAllDocsLinkData();

  return booklistData.map((data) => {
    return { id: data.id.split("/").slice(1) };
  });
}

export default async function Page({ params }: { params: { id: string[] } }) {
  const id = params.id.join("/");
  const content = getDocRawHtmlById(id);
  if (!content) return null;
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
