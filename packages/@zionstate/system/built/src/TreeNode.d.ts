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
export interface ITreeNode {
    name: string;
    path: string;
    typeNumber: number;
    treeId: unknown;
    depth: number;
    genitore?: ITreeNode[];
    figlio?: ITreeNode[];
    root?: boolean;
    type?: string;
    id?: number;
    stringedDir?: string | undefined;
    _isLastChild?: boolean;
    toStringedTree(): string;
    stringedName(name: string, type: unknown, depth: number, folders: string[][], string: string, folderId: number, nomeDeiFileInNodeChildren: string[], _isLastChild: boolean | undefined, isRoot: boolean): {
        _string: string;
        _folders: string[][];
        _folderId: number;
    };
    connettiAGenitore(node: TreeNode): ITreeNode;
    connettiAFiglio(node: TreeNode): ITreeNode;
    isRoot(): boolean;
    isFolder(): boolean;
    trovaSiblings(): ITreeNode[];
    trovaFigli(): ITreeNode[] | string;
    trovaGenitore(): ITreeNode | undefined;
}
export declare class TreeNode implements ITreeNode {
    #private;
    name: string;
    path: string;
    typeNumber: number;
    treeId: unknown;
    depth: number;
    genitore?: ITreeNode[] | undefined;
    figlio?: ITreeNode[] | undefined;
    children?: TreeNode[] | undefined;
    root: boolean;
    type?: string | undefined;
    id?: number | undefined;
    stringedDir?: string | undefined;
    _isLastChild?: boolean | undefined;
    static get treeNodes(): TreeNode[];
    static get types(): ("Folder" | "File")[];
    constructor(name: string, path: string, typeNumber: number, treeId: unknown, depth: number, genitore?: ITreeNode[] | undefined, figlio?: ITreeNode[] | undefined, children?: TreeNode[] | undefined, root?: boolean, type?: string | undefined, id?: number | undefined, stringedDir?: string | undefined, _isLastChild?: boolean | undefined);
    toStringedTree: () => string;
    stringedName: (name: string, type: unknown, depth: number, folders: string[][], string: string, folderId: number, nomeDeiFileInNodeChildren: string[], _isLastChild: boolean | undefined, isRoot: boolean) => {
        _string: string;
        _folders: string[][];
        _folderId: number;
    };
    connettiAGenitore(node: TreeNode): this;
    connettiAFiglio(node: TreeNode): this;
    isRoot(): boolean;
    isFolder(): boolean;
    trovaSiblings(): TreeNode[];
    trovaFigli(): ITreeNode[] | "no figlio";
    trovaGenitore(): ITreeNode | undefined;
}
