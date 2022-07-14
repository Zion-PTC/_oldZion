declare enum PackageEnums {
    npm = "npm",
    yarn = "yarn",
    brew = "homebrew",
    apt = "apt",
    helm = "helm"
}
declare type PackageTypes = keyof typeof PackageEnums;
declare enum PackageCategoriaEnums {
    default = "Nessuna categoria \u00E8 stata fornita",
    graphVisualization = "Graph Visualization",
    graphManipulation = "Graph Manipulation",
    mdManipulation = "MarkdownFiles Manipulation, .md",
    mdxManipulation = "MarkdownX Manipulatin, .mds",
    htmlManiputalion = "HTML files Manipulation, .html",
    yamlManipulation = "Yaml files Manipulation, .yaml",
    iCal = "iCal Interactions"
}
declare type PackageCategoriaTypes = keyof typeof PackageCategoriaEnums;
interface IPackage {
    type: PackageTypes;
    url: string | string[];
    descrizione: string;
    links: string | string[];
    categoria: PackageCategoriaTypes | PackageCategoriaTypes[];
}
declare abstract class APackage implements IPackage {
    #private;
    url: string | string[];
    type: PackageTypes;
    descrizione: string;
    nome: string;
    static get packages(): IPackage[];
    static mostraPackages(): void;
    abstract get links(): string | string[];
    abstract set links(links: string | string[]);
    abstract get categoria(): PackageCategoriaTypes | PackageCategoriaTypes[];
    abstract set categoria(categoria: PackageCategoriaTypes | PackageCategoriaTypes[]);
    constructor(url: string | string[], type?: PackageTypes, descrizione?: string, nome?: string);
}
export declare class Package extends APackage implements IPackage {
    #private;
    url: string | string[];
    descrizione: string;
    get links(): string | string[];
    set links(links: string | string[]);
    get categoria(): PackageCategoriaTypes | PackageCategoriaTypes[];
    set categoria(categoria: PackageCategoriaTypes | PackageCategoriaTypes[]);
    constructor(url?: string | string[], descrizione?: string, categoria?: PackageCategoriaTypes | PackageCategoriaTypes[]);
}
export {};
