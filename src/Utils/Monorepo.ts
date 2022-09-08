import { Repo, RepoTypes } from "@zionstate/git";
import { Dirent, system } from "@zionstate/system";

const { arrayOfFoldersInDirectory: getFolders, joinPaths, existsSync } = system;

enum TypeFolders {
  app = "apps",
  package = "packages",
}

enum PackagesSubFolders {
  "@zionstate" = "@zionstate",
  "@zionrepack" = "@zionrepack",
  "@zionstate_js" = "@zionstate_js",
  "@zionstate_node" = "@zionstate_node",
}
enum AppPackPrefix {
  zionapps = "@zionapps",
}
type PackagesSubFoldersTypes = keyof typeof PackagesSubFolders;
type CreateRepoOptions = {
  name?: string;
  subFolder?: PackagesSubFolders | TypeFolders;
  type?: RepoTypes;
};
type Directories = {
  packagesDir?: string;
  appDir?: string;
  packages?: { [k: string]: string };
  apps?: { [k: string]: string };
};

const toKeep = [
  "telegraf",
  "styled-components",
  "ethers",
  "ipfs",
  "ipfs-http",
  "es-lint",
  "eslint-plugin-import",
  "eslint-plugin-react",
  "parcel",
  "typescript",
  "bundler",
  "react",
  "react-dom",
];

interface RepoManager {
  createPackage(): void;
  deletePackage(): void;
  createApp(): void;
  deleteApp(): void;
  aggiungiTestARepo(name: string, repo: Repo): void;
  stageChanges(): void;
  commitRepo(id: string): void;
  commitMonorepo(): void;
  movePackage(): void;
  commit(): void;
  createDockerFile(): void;
  createImage(): void;
  setTestResult(test: string, result: boolean): void;
  // repo mgmt
  addFolder(type: "commit" | "not-commit"): RepoManager;
  // npm
  checkDeps(npmpkg: string): string[];
}

/**
 * Class utlizzata per gestire un monorepo.
 */
export class Monorepo {
  toKeep = toKeep;
  directories: Directories = { packages: {}, apps: {} };
  packagesTypes = PackagesSubFolders;
  apps: Repo[];
  packages: { [k: string]: Repo[] } = {};
  constructor(
    public name: string,
    public packageName: string,
    public monorepo: string = process.cwd(),
    public auth: string
  ) {
    // controllo Monorepo:
    // check se cè folder Apps
    // check se cè folder Packages
    // check se il packages.json contiene un workspace.
    // creare un'entità per ogni elemento
    // entità puo essere di due tipo:
    // 1- app
    // 2- package
    let dirs = this.directories;
    const repack = PackagesSubFolders["@zionrepack"];
    const state = PackagesSubFolders["@zionstate"];
    const js = PackagesSubFolders["@zionstate_js"];
    const node = PackagesSubFolders["@zionstate_node"];
    dirs.packagesDir = joinPaths([this.monorepo, TypeFolders.package]);
    dirs.packages[repack] = joinPaths([dirs.packagesDir, repack]);
    dirs.packages[state] = joinPaths([dirs.packagesDir, state]);
    dirs.packages[js] = joinPaths([dirs.packagesDir, js]);
    dirs.packages[node] = joinPaths([dirs.packagesDir, node]);
    let repackObj = dirs.packages[repack];
    let stateObj = dirs.packages[state];
    let jsObj = dirs.packages[js];
    let nodeObj = dirs.packages[node];
    dirs.appDir = joinPaths([this.monorepo, TypeFolders.app]);
    let repackPkgsNames = this.#getFolders(repack, repackObj);
    repackPkgsNames.forEach((r) => (r.type = "package"));
    this.packages[repack] = this.#createRepos(repackPkgsNames);

    let statePkgsNames = this.#getFolders(state, stateObj);
    statePkgsNames.forEach((r) => (r.type = "package"));
    this.packages[state] = this.#createRepos(statePkgsNames);

    let jsPkgsNames = this.#getFolders(js, jsObj);
    jsPkgsNames.forEach((r) => (r.type = "package"));
    this.packages[js] = this.#createRepos(jsPkgsNames);

    let nodePkgsNames = this.#getFolders(node, nodeObj);
    nodePkgsNames.forEach((r) => (r.type = "package"));
    this.packages[node] = this.#createRepos(nodePkgsNames);

    let appNames = this.#getFolders(TypeFolders.app, dirs.appDir);
    appNames.forEach((r) => (r.type = "app"));
    this.apps = this.#createRepos(appNames);
  }
  async status() {
    let repack: Repo[] = this.packages[PackagesSubFolders["@zionrepack"]];
    let state: Repo[] = this.packages[PackagesSubFolders["@zionstate"]];
    let js: Repo[] = this.packages[PackagesSubFolders["@zionstate_js"]];
    let node: Repo[] = this.packages[PackagesSubFolders["@zionstate_node"]];
    const all = this.apps.concat(repack).concat(state).concat(js).concat(node);
    const mapped = all.map(async (repo) => await repo.status());
    const promise = await Promise.all(mapped);
    return promise;
  }
  names = (e: Dirent | Repo) => {
    return e.name;
  };
  #createRepos(options: CreateRepoOptions[]) {
    // console.log(options);

    return options.map(this.#createRepo, this);
  }
  #createRepo(options: CreateRepoOptions): Repo {
    const { name, subFolder, type } = options;

    let packageName: string;
    let toKeep: boolean = false;

    if (type === "package")
      packageName = joinPaths([PackagesSubFolders[subFolder], name]);
    if (type === "app") packageName = joinPaths([AppPackPrefix.zionapps, name]);
    if (type === "app") toKeep = true;
    if (subFolder === PackagesSubFolders["@zionstate"]) toKeep = true;
    if (subFolder === PackagesSubFolders["@zionstate_js"]) toKeep = true;
    if (subFolder === PackagesSubFolders["@zionstate_node"]) toKeep = true;

    if (!this.monorepo) throw "not monorepo";
    if (this.toKeep.includes(name)) toKeep = true;
    const newRepo = new Repo(
      name,
      packageName,
      this.monorepo,
      this.auth,
      false,
      type,
      subFolder
    );
    newRepo.toKeep = toKeep;

    return newRepo;
  }
  #getFolders(
    pack: PackagesSubFolders | TypeFolders,
    path: string
  ): CreateRepoOptions[] {
    return getFolders(path).map((name) => {
      let obj: CreateRepoOptions = {};
      obj.name = name.name;
      obj.subFolder = pack;
      return obj;
    });
  }
}
