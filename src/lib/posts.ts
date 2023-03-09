import asciidoctor from "asciidoctor";
import { readdirSync, statSync } from "fs";
import path from "path";

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

export function getAllBooksFilePath() {
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

export function getAllBooksList() {
  return getAllBooksFilePath().map((filePath) => {
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

function insertHighlightScript(html: string) {
  const bodyEndIndex = html.lastIndexOf("</body>");

  return `${html.slice(
    0,
    bodyEndIndex
  )}<script src="/highlight/highlight.min.js"></script>
    <script>
    if (!hljs.initHighlighting.called) {
      hljs.initHighlighting.called = true
      ;[].slice.call(document.querySelectorAll('pre.highlight > code')).forEach(function (el) { hljs.highlightBlock(el) })
    }
    </script>${html.slice(bodyEndIndex)}`;
}

function insertHightLightStyleSheet(html: string, theme: string) {
  const headEndIndex = html.lastIndexOf("</head>");
  return `${html.slice(
    0,
    headEndIndex
  )}<link rel="stylesheet" href="/highlight/styles/${theme}.min.css">${html.slice(
    headEndIndex
  )}`;
}

export function getBookContentById(id: string) {
  const fullPath = path.join(postsDirectory, id) + ".adoc";
  const doc = asciiDoctor.loadFile(fullPath, { standalone: true });
  doc.setAttribute("stylesheet", "/asciidoctor.default.css");
  const highlightTheme = doc.getAttribute("highlightjs-theme");

  // doc.convert没有插入highlight.js的script代码以及对应css样式
  return insertHightLightStyleSheet(
    insertHighlightScript(doc.convert()),
    highlightTheme
  );
}
