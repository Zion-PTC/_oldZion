import yaml from "yaml";
import { system } from "./System.js";
export class ZionYaml {
    string;
    parsed;
    constructor(path) {
        this.string = system.stringifyFile(path);
        this.parsed = yaml.parse(this.string);
    }
}
export class ZionYamlToFile {
    static getDirent = system.getDirent;
    static joinPaths = system.joinPaths;
    result;
    configYaml;
    tree;
    constructor(path, configYaml) {
        this.result = system.getDirent(path);
        this.configYaml = yaml.parse(system.stringifyFile(configYaml));
        this.tree = system.buildTree(path);
    }
}
