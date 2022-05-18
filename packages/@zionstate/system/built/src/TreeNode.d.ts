export declare namespace TreeNodeTs {
    type RequiredFields = {
        name: string;
        path: string;
        typeNumber: number;
        treeId: unknown;
    };
    type OptionalFields = {
        genitore?: TreeNode[];
        figlio?: TreeNode[];
        depth?: number;
        children?: TreeNode[];
        root?: boolean;
        type?: string;
        id?: number;
    };
}
export declare class TreeNode {
    #private;
    name: string;
    path: string;
    typeNumber: number;
    treeId: unknown;
    depth: number;
    genitore?: TreeNode[] | undefined;
    figlio?: TreeNode[] | undefined;
    children?: TreeNode[] | undefined;
    root: boolean;
    type?: string | undefined;
    id?: number | undefined;
    stringedDir?: string | undefined;
    _isLastChild?: boolean | undefined;
    static get treeNodes(): TreeNode[];
    static get types(): ("Folder" | "File")[];
    constructor(name: string, path: string, typeNumber: number, treeId: unknown, depth: number, genitore?: TreeNode[] | undefined, figlio?: TreeNode[] | undefined, children?: TreeNode[] | undefined, root?: boolean, type?: string | undefined, id?: number | undefined, stringedDir?: string | undefined, _isLastChild?: boolean | undefined);
    toStringedTree: () => string;
    stringedName: (name: string, type: unknown, depth: number, folders: string[][], string: string, folderId: number, nomeDeiFileInNodeChildren: string[], _isLastChild: boolean | undefined, isRoot: boolean) => {
        _string: string;
        _folders: string[][];
        _folderId: number;
    };
    connettiAGenitore(node: TreeNode): void;
    connettiAFiglio(node: TreeNode): void;
    isRoot(): boolean;
    trovaSiblings(): TreeNode[];
    trovaFigli(): TreeNode[];
    trovaGenitore(): TreeNode | undefined;
}
