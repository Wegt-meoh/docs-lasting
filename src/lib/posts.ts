import asciidoctor from "asciidoctor";
import { readdirSync, writeFileSync } from "fs";
import path from "path";
import hljs from "highlight.js";

const asciiDoctor = asciidoctor();
const postsDirectory = path.join(process.cwd(), "docs");

export function getSortedData() {
  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => {
      return fileName.endsWith(".adoc") ? true : false;
    })
    .map((fileName) => {
      const id = fileName.replace(/\.adoc$/, "");
      const fullPath = path.join(postsDirectory, fileName);

      const doc = asciiDoctor.loadFile(fullPath);
      const raw = doc.convert({ standalone: true });

      const htmlContent = raw
        .slice(raw.indexOf("<body"), raw.indexOf("</body>") + 7)
        .replace("<body", "<div")
        .replace("</body>", "</div>");

      return {
        id,
        htmlContent,
      };
    });

  return allPostsData.sort((a, b) => {
    return a.id < b.id ? 1 : -1;
  });
}
