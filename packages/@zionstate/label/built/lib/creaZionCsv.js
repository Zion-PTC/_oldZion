import { reader } from "../src/class/Reader.js";
var BelieveRecordsKeysEnums;
(function (BelieveRecordsKeysEnums) {
    BelieveRecordsKeysEnums["meseDiReport"] = "Mese di Reporting";
    BelieveRecordsKeysEnums["meseVendita"] = "Mese di vendita";
    BelieveRecordsKeysEnums["piattaforma"] = "Piattaforma";
    BelieveRecordsKeysEnums["regione"] = "Paese / Regione";
    BelieveRecordsKeysEnums["label"] = "Nome dell'etichetta";
    BelieveRecordsKeysEnums["artista"] = "Nome dell'artista";
    BelieveRecordsKeysEnums["uscita"] = "Titolo dell'uscita";
    BelieveRecordsKeysEnums["traccia"] = "Titolo della traccia";
    BelieveRecordsKeysEnums["upc"] = "UPC";
    BelieveRecordsKeysEnums["isrc"] = "ISRC";
    BelieveRecordsKeysEnums["cat"] = "Riferimento catalogo uscita";
    BelieveRecordsKeysEnums["tipoSubscrStream"] = "Tipo di sottoscrizione in streaming";
    BelieveRecordsKeysEnums["tipoUscita"] = "Tipo di uscita";
    BelieveRecordsKeysEnums["tipoVendita"] = "Tipo di vendita";
    BelieveRecordsKeysEnums["quantita"] = "Quantita";
    BelieveRecordsKeysEnums["valuta"] = "Valuta di pagamento del cliente";
    BelieveRecordsKeysEnums["prezzoUnitario"] = "Prezzo unitario";
    BelieveRecordsKeysEnums["tariffaRiprMecc"] = "Tariffa di riproduzione meccanica";
    BelieveRecordsKeysEnums["profittoLordo"] = "Profitto lordo";
    BelieveRecordsKeysEnums["profittoCliente"] = "Tasso di profitto del cliente";
    BelieveRecordsKeysEnums["guagagnoNetto"] = "Guadagno netto";
})(BelieveRecordsKeysEnums || (BelieveRecordsKeysEnums = {}));
export function creaZionCsv(index) {
    if (this.reports) {
        let records = [];
        // TODO errore ts nuovo1
        //@ts-expect-error
        let csv = new reader.ZionCsv(this.reports[index].path);
        records = csv.records;
        this.reports[index].aggiungiRecord(records);
        this.recordsCache = records;
        this.calcolaGuadagnoNetto();
    }
    return this;
}
