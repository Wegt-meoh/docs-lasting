"use client";

type OnLoadType = React.HtmlHTMLAttributes<HTMLIFrameElement>["onLoad"];

export default function AdocIframe({ content }: { content: string }) {
  // before iframe load data,iframe's height is unkown and not changes automaticly after data loaded.
  //   const adjustHeight: OnLoadType = (ev) => {
  //     ev.currentTarget.height =
  //       ev.currentTarget.contentDocument?.body.scrollHeight + "" ?? "100vh";
  //   };

  const handleAdocLink: OnLoadType = (ev) => {
    const doc = ev.currentTarget.contentDocument;
    if (!doc) {
      return;
    }
    const toc = doc.getElementById("toc");
    if (!toc) {
      return;
    }
    const anchors = toc.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i += 1) {
      const anchor = anchors[i];
      anchor.setAttribute("todo", "111");
      anchor.onclick = (ev) => {
        ev.preventDefault();
        doc.querySelector(anchor.getAttribute("href") ?? "")?.scrollIntoView();
      };
    }
  };
  return (
    <iframe
      id="adoc-iframe"
      onLoad={handleAdocLink}
      title="adoc-iframe"
      srcDoc={content}
    />
  );
}
