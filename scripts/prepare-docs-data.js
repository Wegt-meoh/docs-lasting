const clone = require("git-clone");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const targetDir = path.join(process.cwd(), "public/docs");

if (process.env.DOCS_IS_LOCAL === "false") {
  const tmpDir = path.join(process.cwd(), "_tmp");
  fs.rmSync(tmpDir, { recursive: true, force: true });
  clone(process.env.DOCS_REMOTE_REPOSITORY, tmpDir, undefined, (error) => {
    if (error) {
      throw error;
    }
    fs.rmSync(targetDir, { recursive: true, force: true });
    fs.readdirSync(tmpDir).forEach((filePath) => {
      if (!filePath.startsWith(".")) {
        fs.cpSync(path.join(tmpDir, filePath), path.join(targetDir, filePath), {
          recursive: true,
        });
      }
    });

    fs.rmSync(tmpDir, { recursive: true });
  });
} else {
  const docsAbsolutePath = process.env.DOCS_LOCAL_ABSOLUTE_PATH;
  if (!path.isAbsolute(docsAbsolutePath)) {
    throw new Error("DOCS_LOCAL_ABSOLUTE_PATH should be absolute path");
  }
  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.readdirSync(docsAbsolutePath).forEach((filePath) => {
    if (!filePath.startsWith(".")) {
      fs.cpSync(
        path.join(docsAbsolutePath, filePath),
        path.join(targetDir, filePath),
        {
          recursive: true,
        }
      );
    }
  });
}
