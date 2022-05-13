export let defineSearchParams = function (prop) {
    class ForEachResult {
        static #results = [];
        get results() {
            let arr = [];
            Object.assign(arr, ForEachResult.#results);
            return arr;
        }
        constructor() { }
        push(value, key, parent) {
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
