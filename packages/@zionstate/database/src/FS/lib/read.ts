import { system, ZionPath } from "@zionstate/system";
import { aggiungiPath } from "../../RAM/DataStructures/Array/lib/aggiungi.js";

export function read(folder: string) {
  const workingDir = process.cwd();
  const dataFolder = "data";
  const folderName = folder;
  const libpath = [workingDir, dataFolder, folderName];
  let path = new ZionPath(libpath).path;

  return (() => {
    const filesInFolder = system.arrayOfNamesOfFilesInFolder(path);
    let paths: string[] = [];
    filesInFolder.forEach(aggiungiPath, paths);
    return paths;
  })();
}
