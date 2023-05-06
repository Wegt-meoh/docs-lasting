import { getAllBooksList, getBookContentById } from "@/lib/posts";

export const dynamicParams = false;

export async function generateStaticParams() {
  const booklistData = getAllBooksList();

  return booklistData.map((data) => {
    return { id: data.id.split("/").slice(1) };
  });
}

export default async function Page({ params }: { params: { id: string[] } }) {
  const id = params.id.join("/");
  const content = getBookContentById(id);

  return (
    <div
      className="adoc min-h-screen"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
