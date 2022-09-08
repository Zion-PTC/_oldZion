import neo4j from "neo4j-driver";

export class Config {
  static #instance?: Object;
  getInstance() {}
  constructor(
    public uri: string,
    public user: string,
    public password: string
  ) {
    let instance = Config.#instance;
    this.getInstance = function () {
      if (!instance) instance = this.#createInstance(uri, user, password);
      return instance;
    };
  }
  #createInstance(uri: string, user: string, password: string) {
    Config.#instance = new Object({ uri, user, password });
    return Config.#instance;
  }
}

export class Neo4j {}
