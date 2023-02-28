export default function Artical({ content }: { content: string }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
