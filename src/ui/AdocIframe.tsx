export default function AdocIframe({ content }: { content: string }) {
  return <iframe id="adoc-iframe" title="adoc-iframe" srcDoc={content} />;
}
