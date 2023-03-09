"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type OnLoadType = React.HtmlHTMLAttributes<HTMLIFrameElement>["onLoad"];

export default function AdocIframe({ content }: { content: string }) {
  const [hidden, setHidden] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // before iframe load data,iframe's height is unkown and not changes automaticly after data loaded.
  //   const adjustHeight: OnLoadType = (ev) => {
  //     ev.currentTarget.height =
  //       ev.currentTarget.contentDocument?.body.scrollHeight + "" ?? "100vh";
  //   };

  const handleAdocLink = (ev: HTMLIFrameElement | null) => {
    if (!ev) {
      return;
    }
    const doc = ev.contentDocument;
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

  const handleHighlightStyle = (ev: HTMLIFrameElement | null) => {
    if (!ev) {
      return;
    }
    const doc = ev.contentDocument;
    if (!doc) {
      return;
    }
    const preElements = doc.getElementsByTagName("pre");
    for (let i = 0; i < preElements.length; i += 1) {
      preElements[i].classList.add("highlightjs");
    }
  };

  useEffect(() => {
    handleAdocLink(iframeRef.current);
    handleHighlightStyle(iframeRef.current);
    setHidden(false);
  }, [iframeRef]);
  return (
    <iframe
      className={clsx({ hidden: hidden, block: !hidden })}
      id="adoc-iframe"
      ref={iframeRef}
      title="adoc-iframe"
      srcDoc={content}
    />
  );
}
