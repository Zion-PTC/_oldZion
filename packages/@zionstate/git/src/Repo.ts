import {
  reader,
  packageJSON,
  tsconfigJSON,
  prettierrcJSON,
  jsconfigJSON,
  system,
} from "@zionstate/system";
import { ZionGit } from "./Git.js";
import { ZionGitHub } from "./GitHub.js";
import { ZionError } from "@zionstate_js/error";

const { joinPaths, existsSync } = system;
const PACKAGESTRINGERROR = "Weirdly package.json was parsed as a string";
const NOPACKAGEJSONERROR = "No package.json is present in the repo folder";
const NOPATHERROR = "No path was set for the repo";

type package_json = packageJSON.DataType2;
type tsconfig_json = tsconfigJSON.DataType;
type prettierrc_json = prettierrcJSON.DataType;
type jsconfig_json = jsconfigJSON.DataType;
type dependency = packageJSON.Dependency;
export type RepoTypes = "app" | "package";

type REPO = {
  name: string | boolean | string[];
  packageName: string | boolean | string[];
  isRoot: string | boolean;
  hasTypesInConfig: string | boolean | string[];
  isWorking: string | boolean | string[];
  isCommitted: string | boolean | string[];
  dependencies(): dependency;
};

export class Status {
  constructor(
    public name?: string,
    public packageName?: string,
    public version?: string,
    public hasPackageJSON?: boolean,
    public hasTSconfigJSON?: boolean,
    public isRoot?: boolean,
    public hasRemote?: boolean,
    public hasTypesInConfig?: boolean | null,
    public isCommitted?: boolean,
    public latestUpdate?: string | false,
    public dependencies?: boolean | string,
    public toKeep?: boolean
  ) {}
}

export interface IRepo {
  git: ZionGit;
  github: ZionGitHub;
  packageJSON?: package_json | string;
  tsconfigJSON?: tsconfig_json | string;
  prettierrcJSON?: prettierrc_json;
  jsconfigJSON?: jsconfig_json;
  isRoot(): Promise<boolean>;
  hasRemote(): Promise<boolean>;
  isCommitted(): Promise<boolean>;
  dependencies(): dependency | string;
  latestUpdate(): Promise<Date | undefined>;
  version(): string | undefined;
  /////
  hasTypesInConfigTS(): boolean | null;
  // packageJSON(): Promise<object>;
}

export class Repo implements IRepo {
  path?: string;
  git: ZionGit;
  github: ZionGitHub;
  packageJSON?: package_json | string;
  hasPackageJSON: boolean;
  tsconfigJSON?: tsconfig_json | string;
  hasTSconfigJSON: boolean;
  /**
   *
   * @param name
   * @param packageName
   * @param monorepo
   * @param auth
   * @param isWorking
   * @param __type
   */
  constructor(
    public name: string,
    public packageName: string,
    public monorepo: string,
    public auth: string,
    public isWorking: boolean = false,
    public __type: RepoTypes = "app",
    public subfolder: string = "",
    public toKeep: boolean = false
  ) {
    let folder = this.__type === "app" ? "apps" : "packages";

    let path;
    if (this.__type === "app")
      path = joinPaths([this.monorepo, folder, this.name]);
    if (this.__type === "package")
      path = joinPaths([this.monorepo, folder, this.subfolder, this.name]);
    this.path = path;
    this.git = new ZionGit(path);
    this.github = new ZionGitHub(auth);
    const packageJSONPath = path + "/package.json";
    const tsconfigJSONPath = path + "/tsconfig.json";
    this.hasPackageJSON = existsSync(packageJSONPath);
    this.hasTSconfigJSON = existsSync(tsconfigJSONPath);
    if (this.hasPackageJSON)
      this.packageJSON = reader.readPackageJSON(packageJSONPath);
    if (this.hasTSconfigJSON)
      this.tsconfigJSON = reader.readTSconfigJSON(tsconfigJSONPath);
  }
  async isRoot(): Promise<boolean> {
    return await this.git.isRepo();
  }
  async hasRemote(): Promise<boolean> {
    return this.git.hasRemote();
  }
  hasTypesInConfigTS(): boolean | null {
    if (!this.tsconfigJSON) return null;
    if (typeof this.tsconfigJSON === "string") return null;
    return this.tsconfigJSON.compilerOptions?.types ? true : false;
  }
  async isCommitted(): Promise<boolean> {
    return (await this.git.git.status()).modified.length === 0;
  }
  dependencies(): dependency | string {
    if (!this.packageJSON) return "no pkg.json";
    if (typeof this.packageJSON === "string")
      throw new ZionError(PACKAGESTRINGERROR);
    if (!this.packageJSON.dependencies) return "no deps";
    return this.packageJSON.dependencies;
  }
  async latestUpdate(): Promise<Date | undefined> {
    return await this.git.latestUpdate();
  }
  version() {
    if (typeof this.packageJSON === "string")
      throw new ZionError(PACKAGESTRINGERROR);
    if (this.packageJSON) return this.packageJSON.version;
    else undefined;
  }
  async status() {
    let statusUpdate = new Status();
    statusUpdate.name = this.name;
    statusUpdate.packageName = this.packageName;
    statusUpdate.version = this.version();
    statusUpdate.hasPackageJSON = this.hasPackageJSON;
    statusUpdate.hasTSconfigJSON = this.hasTSconfigJSON;
    statusUpdate.isRoot = await this.isRoot();
    statusUpdate.hasRemote = await this.hasRemote();
    statusUpdate.hasTypesInConfig = this.hasTypesInConfigTS();
    statusUpdate.isCommitted = await this.isCommitted();
    statusUpdate.latestUpdate = (await this.latestUpdate())?.toLocaleString();
    let deps = this.dependencies();
    statusUpdate.dependencies = typeof deps === "object" ? true : deps;
    statusUpdate.toKeep = this.toKeep;
    return statusUpdate;
  }
  getDeps(): string[] {
    let result, deps: string[], devDeps: string[];
    deps = [];
    devDeps = [];
    if (!this.path) throw new ZionError(NOPATHERROR);
    if (!this.packageJSON) throw new ZionError(NOPACKAGEJSONERROR);
    if (typeof this.packageJSON === "string")
      throw new ZionError(PACKAGESTRINGERROR, this.getDeps.name, [this.path]);
    if (this.packageJSON.dependencies)
      deps = Object.keys(this.packageJSON.dependencies);
    if (this.packageJSON.devDependencies)
      devDeps = Object.keys(this.packageJSON.devDependencies);
    result = deps.concat(devDeps);
    return result;
  }
}
