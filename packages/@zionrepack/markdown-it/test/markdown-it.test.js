import MarkdownIt from "markdown-it";
import { readFile } from "fs";

const mdfilepath =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionrepack/markdown-it/test.md";

const mark = new MarkdownIt();

let mdfile;
async function parseFile(path) {
  return new Promise((res, rej) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) throw err;
      res(data);
    });
  });
}
mdfile = await parseFile(mdfilepath);
console.log(mark.render(mdfile));
