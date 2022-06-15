import * as SystemExport from "./src/System.js";
import * as PathExport from "./src/Path.js";

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
