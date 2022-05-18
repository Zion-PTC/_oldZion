/// <reference types="node" />
import fs from 'fs';
import { Tree } from './Tree.js';
import { TreeNode } from './TreeNode.js';
export declare class System {
    #private;
    get blackListFileNames(): string[];
    get folders(): string[];
    get files(): string[];
    setNameForTreeNode: (path: string, type: 'root' | 'File' | 'Folder') => string;
    /**
     * @param {String} path percorso target
     * @returns {String[]} ritorna un array contenente la
     * lista dei nomi delle carelle contenute nel percorso
     * target.
     */
    arrayOfFoldersInDirectory: (path: string) => fs.Dirent[];
    /**
     * @param {String} path target path
     * @returns {}  an array of name of the files contained in
     * the target path
     */
    arrayOfNamesOfFilesInFolder: (path: string) => {
        name: string;
        path: string;
    }[];
    /**
     * @param {String} importMetaUrl  data which can be
     * retrieved with in the callee file by typing
     * import.meta.url.
     * @returns {String}  the complete path to the file from
     * which this function is called.
     */
    pathOfFileFromImportMetaUrl: (importMetaUrl: string) => string;
    /**
     *
     * @param {String} targetPath path with filename included
     * @param {String} data data to be written in the file
     * @returns
     */
    writeJson(targetPath: string, data: string | NodeJS.ArrayBufferView, options?: fs.WriteFileOptions | undefined): void;
    /**
     * @param {String} path target path with file name included
     * @param {String} data data to insert in the file
     * @returns
     */
    writePng(path: string, data: string | NodeJS.ArrayBufferView): void;
    /**
     * @title createNestedDir
     * @note funzione per creare una serie di cartelle
     * @param {String} dir
     */
    createNestedDir(dir: string): string | undefined;
    /**
     * @title buildTree()
     * @param {String} rootPath  rootPath is the starting
     * point from which the function will build a Directory
     * Structure Object.
     * @returns {Tree} returns a complete Tree starting from the rootPath
     */
    buildTree: (rootPath: string) => Tree | undefined;
    /**
     *
     * @param {String} path percorso target
     * @param {*} callback funzione callback senza parametri
     */
    deleteFile(path: string, callback: fs.NoParamCallback): void;
    /**
     *
     * @param {String} path percorso target
     * @param {Object} options oggetto con opzioni
     * @returns fs.rmdirSync
     */
    deleteFolder(path: fs.PathLike, options?: fs.RmDirOptions): void;
    /**
     *
     * @param {String} path directory target
     * @returns fs.rmSync()
     */
    deleteRecursiveDir(path: fs.PathLike): void;
    /**
     *
     * @param {String} path percorso target
     * @returns fm.existsSync()
     */
    existsSync(path: fs.PathLike): boolean;
    /**
     *
     * @param {String} path percorso target
     * @param {Object} options oggetto opzioni
     * @returns fs.StatSync()
     */
    statSync(path: fs.PathLike, options?: undefined): fs.Stats;
    isFileInFolder(file: string, folder: fs.PathLike): boolean;
    getTreeNodeType(path: fs.PathLike): number;
    getFileSize(path: fs.PathLike): number;
    getFileExtension(path: string): string;
}
export declare let TreeNodeExport: typeof TreeNode;
export declare let system: System;
