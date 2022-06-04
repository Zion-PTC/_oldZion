import { system } from "@zionstate/system";
import { zionUtil } from "@zionstate_node/zion-util";
var PackagesSubFolders;
(function (PackagesSubFolders) {
    PackagesSubFolders["@zionstate"] = "@zionstate";
    PackagesSubFolders["@zionrepack"] = "@zionrepack";
    PackagesSubFolders["@zionstate_js"] = "@zionstate_js";
    PackagesSubFolders["@zionstate_node"] = "@zionstate_node";
})(PackagesSubFolders || (PackagesSubFolders = {}));
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
    getPackageTypeDirectoryEntities = (packagesType) => {
        return system.arrayOfFoldersInDirectory(this.packagesDir + "/" + this.packagesTypes[packagesType]);
    };
    getPackageTypeDirectoryNames = (packagesType) => {
        return this.getPackageTypeDirectoryEntities(packagesType).map(this.names);
    };
}
// 5/6/2022
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
