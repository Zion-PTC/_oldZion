export function filterRecords(key, value) {
    const res = this.recordsCache.filter((record) => {
        return record[key] === value;
    });
    this.recordsCache = res;
    return this;
}
