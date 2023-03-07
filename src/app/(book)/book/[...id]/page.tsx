async function getContentById(id: string) {
  const res = await fetch(`http://localhost:3000/api/bookContent?id=${id}`);
  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error(`error catch reason: ${res.json()}`);
  }
}

export default async function Page({ params }: { params: { id: string[] } }) {
  const id = params.id.join("/");
  const content = await getContentById(id);

  return (
    <div
      className="adoc min-h-screen"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
