export let defineSearchParams = function (prop: URL): string[] {
  class ForEachResult {
    static #results: string[] = [];
    get results(): string[] {
      let arr: string[] = [];
      Object.assign(arr, ForEachResult.#results);
      return arr;
    }
    constructor() {}
    push(value: string, key: string, parent: URLSearchParams) {
      ForEachResult.#results.push(key);
    }
    log() {
      console.log(ForEachResult.#results);
    }
  }

  let newForEachRes = new ForEachResult();
  let push = newForEachRes.push;
  prop.searchParams.forEach(push);

  return newForEachRes.results;
};
