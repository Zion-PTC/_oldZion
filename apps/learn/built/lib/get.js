import { system, ZionPath } from "@zionstate/system";
import { aggiungiPath } from "./aggiungi.js";
var getContentEnums;
(function (getContentEnums) {
    getContentEnums["tutorials"] = "tutorials";
    getContentEnums["sorgenti"] = "sorgenti";
    getContentEnums["designPatterns"] = "design-patterns";
    getContentEnums["blogPosts"] = "blog-posts";
    getContentEnums["esercizi"] = "esercizi";
    getContentEnums["packages"] = "packages";
})(getContentEnums || (getContentEnums = {}));
export function getContent(type) {
    const workingDir = process.cwd();
    const dataFolder = "data";
    const folderName = getContentEnums[type];
    const libpath = [workingDir, dataFolder, folderName];
    let path = new ZionPath(libpath);
    return (() => {
        const filesInFolder = system.arrayOfNamesOfFilesInFolder(path.path);
        let paths = [];
        filesInFolder.forEach(aggiungiPath, paths);
        return paths;
    })();
}
