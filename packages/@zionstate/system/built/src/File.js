// import { Size } from '../../GenerativeArtMachine/Size.js';
import { TreeNode } from './TreeNode.js';
export class File extends TreeNode {
    name;
    path;
    typeNumber;
    treeId;
    depth;
    extension;
    fileSize;
    constructor(name, path, typeNumber, treeId, depth, extension, fileSize) {
        super(name, path, typeNumber, treeId, depth);
        this.name = name;
        this.path = path;
        this.typeNumber = typeNumber;
        this.treeId = treeId;
        this.depth = depth;
        this.extension = extension;
        this.fileSize = fileSize;
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
