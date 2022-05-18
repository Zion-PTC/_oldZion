import { TreeNode } from './TreeNode.js';

export class Root extends TreeNode {
  static #roots: TreeNode[] = [];
  #type = 'root';
  constructor(
    name: string,
    path: string,
    typeNumber: number,
    treeId: unknown,
    depth: number
  ) {
    super(name, path, typeNumber, treeId, depth);
    this.root = true;
    Root.#roots.push(this);
  }
}
