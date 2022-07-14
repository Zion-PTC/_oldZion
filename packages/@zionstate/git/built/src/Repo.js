import { reader, system, } from "@zionstate/system";
import { ZionGit } from "./Git.js";
import { ZionGitHub } from "./GitHub.js";
import { ZionError } from "@zionstate_js/error";
const { joinPaths, existsSync } = system;
const PACKAGESTRINGERROR = "Weirdly package.json was parsed as a string";
const NOPACKAGEJSONERROR = "No package.json is present in the repo folder";
export class Status {
    name;
    packageName;
    version;
    hasPackageJSON;
    hasTSconfigJSON;
    isRoot;
    hasRemote;
    hasTypesInConfig;
    isCommitted;
    latestUpdate;
    dependencies;
    toKeep;
    constructor(name, packageName, version, hasPackageJSON, hasTSconfigJSON, isRoot, hasRemote, hasTypesInConfig, isCommitted, latestUpdate, dependencies, toKeep) {
        this.name = name;
        this.packageName = packageName;
        this.version = version;
        this.hasPackageJSON = hasPackageJSON;
        this.hasTSconfigJSON = hasTSconfigJSON;
        this.isRoot = isRoot;
        this.hasRemote = hasRemote;
        this.hasTypesInConfig = hasTypesInConfig;
        this.isCommitted = isCommitted;
        this.latestUpdate = latestUpdate;
        this.dependencies = dependencies;
        this.toKeep = toKeep;
    }
}
export class Repo {
    name;
    packageName;
    monorepo;
    auth;
    isWorking;
    __type;
    subfolder;
    toKeep;
    path;
    git;
    github;
    packageJSON;
    hasPackageJSON;
    tsconfigJSON;
    hasTSconfigJSON;
    /**
     *
     * @param name
     * @param packageName
     * @param monorepo
     * @param auth
     * @param isWorking
     * @param __type
     */
    constructor(name, packageName, monorepo, auth, isWorking = false, __type = "app", subfolder = "", toKeep = false) {
        this.name = name;
        this.packageName = packageName;
        this.monorepo = monorepo;
        this.auth = auth;
        this.isWorking = isWorking;
        this.__type = __type;
        this.subfolder = subfolder;
        this.toKeep = toKeep;
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
    async isRoot() {
        return await this.git.isRepo();
    }
    async hasRemote() {
        return this.git.hasRemote();
    }
    hasTypesInConfigTS() {
        if (!this.tsconfigJSON)
            return null;
        if (typeof this.tsconfigJSON === "string")
            return null;
        return this.tsconfigJSON.compilerOptions?.types ? true : false;
    }
    async isCommitted() {
        return (await this.git.git.status()).modified.length === 0;
    }
    dependencies() {
        if (!this.packageJSON)
            return "no pkg.json";
        if (typeof this.packageJSON === "string")
            throw new ZionError(PACKAGESTRINGERROR);
        if (!this.packageJSON.dependencies)
            return "no deps";
        return this.packageJSON.dependencies;
    }
    async latestUpdate() {
        return await this.git.latestUpdate();
    }
    version() {
        if (typeof this.packageJSON === "string")
            throw new ZionError(PACKAGESTRINGERROR);
        if (this.packageJSON)
            return this.packageJSON.version;
        else
            undefined;
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
    getDeps() {
        let result, deps, devDeps;
        deps = [];
        devDeps = [];
        if (!this.path)
            throw new ZionError("No path was set for the repo");
        if (!this.packageJSON)
            throw new ZionError(NOPACKAGEJSONERROR);
        if (typeof this.packageJSON === "string")
            throw new ZionError(PACKAGESTRINGERROR, "getDeps()", [this.path]);
        if (this.packageJSON.dependencies)
            deps = Object.keys(this.packageJSON.dependencies);
        if (this.packageJSON.devDependencies)
            devDeps = Object.keys(this.packageJSON.devDependencies);
        result = deps.concat(devDeps);
        return result;
    }
}
