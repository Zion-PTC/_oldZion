import { TreeNode } from './TreeNode.js';
export declare class File extends TreeNode {
    name: string;
    path: string;
    typeNumber: number;
    treeId: unknown;
    depth: number;
    extension?: string | undefined;
    fileSize?: number | undefined;
    constructor(name: string, path: string, typeNumber: number, treeId: unknown, depth: number, extension?: string | undefined, fileSize?: number | undefined);
}
