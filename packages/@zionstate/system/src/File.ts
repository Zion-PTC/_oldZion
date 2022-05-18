// import { Size } from '../../GenerativeArtMachine/Size.js';
import { TreeNode } from './TreeNode.js';

export class File extends TreeNode {
  constructor(
    public name: string,
    public path: string,
    public typeNumber: number,
    public treeId: unknown,
    public depth: number,
    public extension?: string,
    public fileSize?: number
  ) {
    super(name, path, typeNumber, treeId, depth);
    delete this.children;
    this.extension = extension;
    this.fileSize = fileSize; // MB size of file
  }
}
// TODO portare questa classe in generative-artwork
// class Image extends File {
//   constructor(name, path, type, width, height) {
//     super(name, path, type);
//     this.size = new Size(width, height);
//   }
// }
