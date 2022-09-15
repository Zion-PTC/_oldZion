import fs from "fs";

export const writeFile = async function <T>(
  path: string,
  data: string,
  extension?: string
) {
  fs.writeFileSync(path, data);
  console.log("Written file: " + path);
};
