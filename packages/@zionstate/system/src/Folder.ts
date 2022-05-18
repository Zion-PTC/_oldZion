import { TreeNode } from './TreeNode.js';

export class Folder extends TreeNode {
  constructor(
    public name: string,
    public path: string,
    public typeNumber: number,
    public treeId: unknown,
    public depth: number
  ) {
    super(name, path, typeNumber, treeId, depth);
    this.depth;
  }
}
