import { zionUtil } from "@zionstate_node/zion-util";
import { File } from "./File.js";
import { Folder } from "./Folder.js";
import { Root } from "./Root.js";
import { TreeNode } from "./TreeNode.js";
export class Tree {
    static #trees = [];
    #nodes = [];
    get nodes() {
        let servedArray = [];
        this.#nodes.forEach((node) => servedArray.push(node));
        Object.freeze(servedArray);
        return servedArray;
    }
    id;
    get size() {
        return this.#nodes.length;
    }
    constructor(nodes = []) {
        nodes.forEach((node) => this.#nodes.push(node));
        Tree.#trees.push(this);
        this.id = Tree.#trees.length;
    }
    add(node) {
        if (!node)
            throw new Error("non è stato fornito alcun nodo da aggiungere");
        if (Array.isArray(node))
            throw new Error("È stato fornito un array.");
        let condition = node.constructor !== File &&
            node.constructor !== Root &&
            node.constructor !== Folder &&
            node.constructor !== TreeNode;
        const error1 = "Non è stato fornito un oggetto di tipo TreeNode";
        if (condition)
            throw new Error(error1);
        this.#nodes.push(node);
        return this;
    }
    remove(nodeToRemove) {
        const errMess1 = "Non è stato fornito alcun nodo da rimuovere";
        const errMess2 = "È stato fornito un array.";
        const errMess3 = "Non è stato fornito un oggetto di tipo TreeNode";
        if (!nodeToRemove)
            throw new Error(errMess1);
        if (Array.isArray(nodeToRemove))
            throw new Error(errMess2);
        if (nodeToRemove.constructor !== TreeNode)
            throw new Error(errMess3);
        const find = (node) => node.name === nodeToRemove.name;
        const indiceDelNodoDaRimuovere = this.#nodes.findIndex(find);
        if (indiceDelNodoDaRimuovere + 1 !== this.#nodes.length)
            zionUtil.changePosition(this.#nodes, indiceDelNodoDaRimuovere, this.#nodes.length - 1);
        this.#nodes.pop();
        return indiceDelNodoDaRimuovere;
    }
    isPresent(nodoDaControllare) {
        const errMess1 = "Non è stato fornito alcun nodo da controllare";
        const errMess2 = "È stato fornito un array.";
        const errMess3 = "Non è stato fornito un oggetto di tipo TreeNode";
        if (!nodoDaControllare)
            throw new Error(errMess1);
        if (Array.isArray(nodoDaControllare))
            throw new Error(errMess2);
        if (nodoDaControllare.constructor !== TreeNode)
            throw new Error(errMess3);
        const find = (node) => node.name === nodoDaControllare.name;
        const result = this.#nodes.findIndex(find);
        return result === -1 ? false : true;
    }
    find(nodoDaCercare) {
        const errMess1 = "Non è stato fornito alcun nodo da cercare";
        const errMess2 = "È stato fornito un array.";
        const errMess3 = "Non è stato fornito un oggetto di tipo TreeNode";
        if (!nodoDaCercare)
            throw new Error(errMess1);
        if (Array.isArray(nodoDaCercare))
            throw new Error(errMess2);
        if (nodoDaCercare.constructor !== TreeNode)
            throw new Error(errMess3);
        return this.#nodes.find((node) => node.name === nodoDaCercare.name);
    }
    findByLevel(depth) {
        let servedArray = [];
        const forEach = (node) => {
            if (node.depth === depth)
                servedArray.push(node);
        };
        this.#nodes.forEach(forEach);
        return servedArray;
    }
}
class BinaryTree extends Tree {
    constructor(nodes) {
        super(nodes);
    }
    findMin() { }
    findMax() { }
}
