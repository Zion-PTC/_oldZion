export class TreeNode {
    name;
    path;
    typeNumber;
    treeId;
    depth;
    genitore;
    figlio;
    children;
    root;
    type;
    id;
    stringedDir;
    _isLastChild;
    static #types = ["Folder", "File"];
    static #treeNodes = [];
    static get treeNodes() {
        return TreeNode.#treeNodes;
    }
    static get types() {
        return this.#types;
    }
    constructor(name, path, typeNumber, treeId, depth, genitore, figlio, children, root = false, type, id, stringedDir, _isLastChild) {
        this.name = name;
        this.path = path;
        this.typeNumber = typeNumber;
        this.treeId = treeId;
        this.depth = depth;
        this.genitore = genitore;
        this.figlio = figlio;
        this.children = children;
        this.root = root;
        this.type = type;
        this.id = id;
        this.stringedDir = stringedDir;
        this._isLastChild = _isLastChild;
        this.name = name;
        this.path = path;
        this.genitore = [];
        this.figlio = [];
        this.type = TreeNode.#types[typeNumber];
        this.children = [];
        TreeNode.#treeNodes.push(this);
        this.id = TreeNode.length;
        this.treeId = treeId;
    }
    toStringedTree = () => {
        let string, stack = [this], treeStrings = [], folders = [], folderId = -1, stringedTree = "";
        while (stack.length) {
            let currentNode = stack.pop(), nomeDeiFileInNodeChildren = [];
            if (!currentNode)
                return "no current node";
            if (currentNode.children) {
                let children = currentNode.children;
                // children.reverse();
                for (let child of children) {
                    nomeDeiFileInNodeChildren.push(child.name);
                    stack.push(child);
                }
            }
            string = "";
            let { _string, _folders, _folderId } = this.stringedName(currentNode.name, currentNode.type, currentNode.depth, folders, string, folderId, nomeDeiFileInNodeChildren, currentNode._isLastChild, currentNode.isRoot());
            string = _string;
            folderId = _folderId;
            folders = _folders;
            currentNode.stringedDir = string;
            treeStrings.push(string);
        }
        stringedTree = treeStrings.join("");
        return stringedTree;
    };
    stringedName = (name, type, depth, folders, string, folderId, nomeDeiFileInNodeChildren, _isLastChild, isRoot) => {
        let tab = `\n`, pattern = "", counter = 0, _string, _folders, _folderId;
        if (depth === 1)
            pattern = "  ";
        if (depth > 1)
            pattern = "│ ";
        while (depth) {
            depth--;
            counter++;
            if (counter === 1)
                pattern = "  ";
            if (counter !== 1)
                pattern = "│ ";
            tab = tab + pattern;
        }
        if (type === TreeNode.#types[0]) {
            folders.push(nomeDeiFileInNodeChildren);
            if (isRoot)
                string = `${tab}└─┬${name}`;
            else
                string = `${tab}├─┬${name}`;
            folderId++;
        }
        if (type === TreeNode.#types[1]) {
            if (name === folders[folderId][folders[folderId].length - 1])
                string = `${tab}├──${name}`;
            else
                string = `${tab}└──${name}`;
        }
        _string = string;
        _folders = folders;
        _folderId = folderId;
        return { _string, _folders, _folderId };
    };
    connettiAGenitore(node) {
        if (this.genitore)
            this.genitore.push(node);
        return this;
    }
    connettiAFiglio(node) {
        if (this.figlio)
            this.figlio.push(node);
        node.connettiAGenitore(this);
        return this;
    }
    isRoot() {
        if (this.root)
            return true;
        else
            return false;
    }
    isFolder() {
        return false;
    }
    trovaSiblings() {
        if (this.isRoot())
            throw new Error("Il nodo root non ha Siblings");
        let servedArray = [];
        // this.genitore[0].figlio;
        TreeNode.#treeNodes.forEach((treeNode) => {
            if (!treeNode.genitore)
                return;
            if (!this.genitore)
                return;
            if (!treeNode.genitore[0])
                return;
            if (treeNode.genitore[0].name === this.genitore[0].name) {
                // console.log(treeNode.genitore[0]);
                servedArray.push(treeNode);
            }
        });
        return servedArray;
    }
    trovaFigli() {
        if (this.type === TreeNode.#types[1])
            throw new Error("I file non hanno figli");
        let servedArray = [];
        if (!this.figlio)
            return "no figlio";
        this.figlio.forEach((child) => {
            if (!child)
                return;
            servedArray.push(child);
        });
        Object.freeze(servedArray);
        return servedArray;
    }
    trovaGenitore() {
        if (this.isRoot())
            throw new Error("Il nodo root non ha genitori");
        if (this.genitore)
            return this.genitore[0];
    }
}
