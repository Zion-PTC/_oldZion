import ZionYaml from "@zionrepack/yaml";
import ZionCsv from "@zionrepack/csv";
import { FS } from "@zionstate/database";
const { system } = FS;
class Reader {
  ZionYaml = ZionYaml.ZionYaml;
  ZionYamlToFile = ZionYaml.ZionYamlToFile;
  ZionCsv = ZionCsv.ZionCsv;
  stringifyFile = system.stringifyFile;
  readFoldersInDir = system.arrayOfFoldersInDirectory;
  readFilesInFolder = system.arrayOfNamesOfFilesInFolder;
  joinPaths = system.joinPaths;
}
export let reader = new Reader();
