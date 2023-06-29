import asciidoctor from "asciidoctor";
import { cpSync, readdirSync, statSync } from "fs";
import path from "path";
import * as cheerio from "cheerio";
import hljs from "highlight.js";
import kroki from "asciidoctor-kroki";

const postsDirectory = path.join(process.cwd(), "/public/docs");
const docsSource = process.env.DOCS_ABSOLUTE_PATH;
if (!docsSource) {
  throw new Error("DOCS_ABSOLUTE_PATH can not be null");
}

readdirSync(docsSource).forEach((filePath) => {
  cpSync(path.join(docsSource, filePath), path.join(postsDirectory, filePath), {
    recursive: true,
  });
});

const asciiDoctor = asciidoctor();
kroki.register(asciiDoctor.Extensions);

export function getAllDocsFilePath() {
  const fileNameList: string[] = [];
  const readDirFile = (dir: string) => {
    readdirSync(dir, "utf-8")
      .map((fileName) => {
        return path.join(dir, fileName);
      })
      .forEach((fullPath) => {
        try {
          const stats = statSync(fullPath);
          if (stats.isDirectory()) {
            readDirFile(fullPath);
          } else if (stats.isFile()) {
            if (fullPath.endsWith(".adoc")) {
              fileNameList.push(fullPath);
            }
          }
        } catch (err) {
          console.error(`fs.stat(${fullPath}) error, reason:${err}`);
        }
      });
  };

  readDirFile(postsDirectory);
  return fileNameList;
}

export function getAllDocsLinkData() {
  return getAllDocsFilePath().map((filePath) => {
    const id = filePath
      .replace(new RegExp(`.adoc$`), "")
      .replace(new RegExp(`^${postsDirectory}`), "");
    const doc = asciiDoctor.loadFile(filePath);
    return {
      id,

      title: doc.getTitle() ?? "unresolved title",

      //if there is no description instead of it with it's title
      description: doc.getAttribute(
        "description",
        doc.getTitle() ?? "no description..."
      ),
    };
  });
}

export function getDocRawHtmlById(id: string) {
  const fullPath = path.join(postsDirectory, id) + ".adoc";
  const doc = asciiDoctor.loadFile(fullPath, { standalone: true });
  doc.setAttribute("imagesdir", `/docs/${path.dirname(id)}`);
  const $ = cheerio.load(doc.convert());
  const hasToc = $("#toc").html() !== null;

  $("code").each((_, ele) => {
    const data = $(ele).text();
    const eleAttributes = $(ele).attr() ?? {};
    const languageType = eleAttributes["data-lang"];
    const highlightResult = hljs.highlightAuto(data, [languageType]);

    $(ele).empty();
    $(ele).append(highlightResult.value);
    $(ele).attr("class", `${eleAttributes.class} hljs`);
  });

  return `
    <div class="adoc ${hasToc ? "toc" : ""}">
        ${$("body").html()}
    </div>`;
}
