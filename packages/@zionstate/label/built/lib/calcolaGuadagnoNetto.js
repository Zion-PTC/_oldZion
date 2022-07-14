function mapNcalculate(res) {
    return res
        .map((r) => Number(r["Guadagno netto"].replace(",", ".")))
        .reduce((p, c) => p + c);
}
export function calcolaGuadagnoNetto(records) {
    if (!records) {
        let res = mapNcalculate(this.recordsCache);
        this.resultsCache = res;
        console.log(res);
        return this;
    }
    if (records)
        return mapNcalculate(records);
}
