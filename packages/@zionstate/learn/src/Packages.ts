import { ZionYaml } from "@zionrepack/yaml/built/src/ZionYaml.js";
import { aggiungi } from "../lib/aggiungi.js";
import { getPackages } from "../lib/packages.js";
import { staticImplements } from "./Primitive.js";

enum PackageEnums {
  npm = "npm",
  yarn = "yarn",
  brew = "homebrew",
  apt = "apt",
  helm = "helm",
}
type PackageTypes = keyof typeof PackageEnums;

enum PackageCategoriaEnums {
  default = "Nessuna categoria è stata fornita",
  graphVisualization = "Graph Visualization",
  graphManipulation = "Graph Manipulation",
  mdManipulation = "MarkdownFiles Manipulation, .md",
  mdxManipulation = "MarkdownX Manipulatin, .mds",
  htmlManiputalion = "HTML files Manipulation, .html",
  yamlManipulation = "Yaml files Manipulation, .yaml",
  iCal = "iCal Interactions",
}
type PackageCategoriaTypes = keyof typeof PackageCategoriaEnums;

interface IStaticPackage {
  packages: IPackage[];
  mostraPackages(): void;
}

interface IPackage {
  type: PackageTypes;
  url: string | string[];
  descrizione: string;
  links: string | string[];
  categoria: PackageCategoriaTypes | PackageCategoriaTypes[];
}

abstract class APackage implements IPackage {
  static #packages: IPackage[] = [];
  static get packages() {
    return APackage.#packages;
  }
  static mostraPackages() {
    interface MostraPackages {}
    let obj: MostraPackages[] = [];
    function add(this: {}[], pack: IPackage) {
      let obj: MostraPackages = {};
      aggiungi<MostraPackages>(obj, "nome", pack, "nome");
      aggiungi<MostraPackages>(obj, "type", pack, "type");
      // aggiungi<MostraPackages>(obj, "url", pack, "url");
      aggiungi<MostraPackages>(obj, "categoria", pack, "categoria");
      // aggiungi<MostraPackages>(obj, "descrizione", pack, "descrizione");
      this.push(obj);
    }
    APackage.packages.forEach(add, obj);
    console.table(obj);
  }
  abstract get links();
  abstract set links(links: string | string[]);
  abstract get categoria();
  abstract set categoria(
    categoria: PackageCategoriaTypes | PackageCategoriaTypes[]
  );
  constructor(
    public url: string | string[],
    public type: PackageTypes = "npm",
    public descrizione: string = "Nessuna descrizione è stata fornita",
    public nome: string = "Nessun nome fornito"
  ) {
    APackage.#packages.push(this);
  }
}

@staticImplements<IStaticPackage>()
export class Package extends APackage implements IPackage {
  #links: URL[] = [];
  get links(): string | string[] {
    let array: string[] = [];
    function aggiungilink(link: URL) {
      array.push(link.href);
    }
    this.#links.forEach(aggiungilink);
    return array;
  }
  set links(links: string | string[]) {
    if (Array.isArray(links)) links.forEach(this.#aggiungiURL);
    else this.#links.push(new URL(links));
  }
  #categoria: PackageCategoriaTypes | PackageCategoriaTypes[] = [];
  get categoria() {
    return this.#categoria;
  }
  set categoria(categoria: PackageCategoriaTypes | PackageCategoriaTypes[]) {
    this.#categoria = categoria;
  }
  constructor(
    public url: string | string[] = "https://no.url.was/given",
    public descrizione: string = "Nessuna descrizione è stata fornita",
    categoria: PackageCategoriaTypes | PackageCategoriaTypes[] = "default"
  ) {
    super(url, "npm", descrizione);
    if (Array.isArray(url)) url.forEach(this.#aggiungiURL);
    else this.#links.push(new URL(url));
    this.#categoria = categoria;
  }
  #aggiungiURL = (url: string) => {
    this.links = url;
  };
}

type PackagesMD = { nome?: string; categoria?: PackageCategoriaTypes };
let packagesMDs = getPackages();
function creaPackage(path: string) {
  let yaml = new ZionYaml<PackagesMD>(path);
  let parsed = yaml.parsed;
  let nwPackage = new Package();
  if (parsed.nome) nwPackage.nome = parsed.nome;
  if (parsed.categoria) {
    nwPackage.categoria = parsed.categoria;
  }
}
packagesMDs.forEach(creaPackage);
