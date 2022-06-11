import { system } from "@zionstate/system";
import { zionUtil } from "@zionstate_node/zion-util";

enum PackagesSubFolders {
  "@zionstate" = "@zionstate",
  "@zionrepack" = "@zionrepack",
  "@zionstate_js" = "@zionstate_js",
  "@zionstate_node" = "@zionstate_node",
}
type PackagesSubFoldersTypes = keyof typeof PackagesSubFolders;

class Repo {
  get packagesDirectoryEntities() {
    return system.arrayOfFoldersInDirectory(this.packagesDir);
  }
  get packagesDirectoryFolderNames() {
    return this.packagesDirectoryEntities.map(this.names);
  }
  packagesDir = "./packages";
  packagesTypes = PackagesSubFolders;
  names = (e) => {
    return e.name;
  };
  getPackageTypeDirectoryEntities = (packagesType: PackagesSubFoldersTypes) => {
    return system.arrayOfFoldersInDirectory(
      this.packagesDir + "/" + this.packagesTypes[packagesType]
    );
  };
  getPackageTypeDirectoryNames = (packagesType: PackagesSubFoldersTypes) => {
    return this.getPackageTypeDirectoryEntities(packagesType).map(this.names);
  };
}

// 5/6/2022
/**
 * é stato necessario trovare la lista dei repo da
 * cancellare da github. Ho inizialmente fatto una lista di
 * repo da tenere perchè vanno estesi e in seguito l'ho
 * sottratta alla lista di file presenti nella cartella.
 */
const repacks = new Repo().getPackageTypeDirectoryNames("@zionrepack");
const toKeep = [
  "telegraf",
  "styled-components",
  "ethers",
  "ipfs",
  "ipfs-http",
  "es-lint",
  "eslint-plugin-import",
  "eslint-plugin-react",
  "parcel",
  "typescript",
  "bundler",
  "react",
  "react-dom",
];
const todelete = zionUtil.subtractArrays(repacks, toKeep);
console.log(todelete);
