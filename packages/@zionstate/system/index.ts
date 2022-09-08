import * as SystemExport from "./src/System.js";
import * as PathExport from "../database/src/FS/classes/Path.js";
export * from "../database/src/FS/classes/Reader.js";
export * as Types from "./src/lib/types/index.js";
import { ZionYaml as ZY } from "./src/ZionYaml.js";

let System = SystemExport.System;
export default System;

export let TreeNode = SystemExport.TreeNodeExport;
export type Dirent = SystemExport.Dirent;
export type ITreeNode = SystemExport.ITreeNodeExport;
export type ITree = SystemExport.ITreeExport;
export type IFile = SystemExport.IFileExport;
export type IFolder = SystemExport.IFolderExport;
export type IRoot = SystemExport.IRootExport;
export let system = SystemExport.system;
export let ZionPath = PathExport.ZionPath;
export let ZionYaml = ZY;
