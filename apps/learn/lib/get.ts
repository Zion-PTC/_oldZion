import { system, ZionPath } from "@zionstate/system";
import { aggiungiPath } from "./aggiungi.js";

enum getContentEnums {
  tutorials = "tutorials",
  sorgenti = "sorgenti",
  designPatterns = "design-patterns",
  blogPosts = "blog-posts",
  esercizi = "esercizi",
  packages = "packages",
}
type getContentTypes = keyof typeof getContentEnums;
export function getContent(type: getContentTypes) {
  const workingDir = process.cwd();
  const dataFolder = "data";
  const folderName = getContentEnums[type];
  const libpath = [workingDir, dataFolder, folderName];
  let path = new ZionPath(libpath);

  return (() => {
    const filesInFolder = system.arrayOfNamesOfFilesInFolder(path.path);
    let paths: string[] = [];
    filesInFolder.forEach(aggiungiPath, paths);
    return paths;
  })();
}
