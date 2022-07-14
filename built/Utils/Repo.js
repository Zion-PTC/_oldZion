import { system } from "@zionstate/system";
import { zionUtil } from "@zionstate_node/zion-util";
const monorepopath = process.cwd();
var PackagesSubFolders;
(function (PackagesSubFolders) {
    PackagesSubFolders["@zionstate"] = "@zionstate";
    PackagesSubFolders["@zionrepack"] = "@zionrepack";
    PackagesSubFolders["@zionstate_js"] = "@zionstate_js";
    PackagesSubFolders["@zionstate_node"] = "@zionstate_node";
})(PackagesSubFolders || (PackagesSubFolders = {}));
class Path {
}
class Monorepo {
    monorepo;
    get packagesDirectoryEntities() {
        return system.arrayOfFoldersInDirectory(this.packagesDir);
    }
    get packagesDirectoryFolderNames() {
        return this.packagesDirectoryEntities.map(this.names);
    }
    packagesDir = "./packages";
    packagesTypes = PackagesSubFolders;
    constructor(monorepo = process.cwd()) {
        this.monorepo = monorepo;
    }
    names = (e) => {
        return e.name;
    };
    getPackageTypeDirectoryEntities = (packagesType) => {
        return system.arrayOfFoldersInDirectory(this.packagesDir + "/" + this.packagesTypes[packagesType]);
    };
    getPackageTypeDirectoryNames = (packagesType) => {
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
const repacks = new Monorepo().getPackageTypeDirectoryNames("@zionrepack");
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
const repo = new Monorepo();
const repack = repo.getPackageTypeDirectoryNames("@zionrepack");
const state = repo.getPackageTypeDirectoryNames("@zionstate");
const js = repo.getPackageTypeDirectoryNames("@zionstate_js");
const node = repo.getPackageTypeDirectoryNames("@zionstate_node");
const arr = { repack, state, js, node };
console.log(arr);
