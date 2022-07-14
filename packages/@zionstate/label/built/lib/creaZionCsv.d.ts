import { IApp } from "../src/App.js";
declare type reportNumber = string;
declare enum BelieveRecordsKeysEnums {
    meseDiReport = "Mese di Reporting",
    meseVendita = "Mese di vendita",
    piattaforma = "Piattaforma",
    regione = "Paese / Regione",
    label = "Nome dell'etichetta",
    artista = "Nome dell'artista",
    uscita = "Titolo dell'uscita",
    traccia = "Titolo della traccia",
    upc = "UPC",
    isrc = "ISRC",
    cat = "Riferimento catalogo uscita",
    tipoSubscrStream = "Tipo di sottoscrizione in streaming",
    tipoUscita = "Tipo di uscita",
    tipoVendita = "Tipo di vendita",
    quantita = "Quantita",
    valuta = "Valuta di pagamento del cliente",
    prezzoUnitario = "Prezzo unitario",
    tariffaRiprMecc = "Tariffa di riproduzione meccanica",
    profittoLordo = "Profitto lordo",
    profittoCliente = "Tasso di profitto del cliente",
    guagagnoNetto = "Guadagno netto"
}
export declare type BelieveRecordsKeyTypes = keyof typeof BelieveRecordsKeysEnums;
export declare type BelieveRecord = {
    ["Mese di Reporting"]: Date;
    ["Mese di vendita"]: Date;
    Piattaforma: string;
    ["Paese / Regione"]: string;
    ["Nome dell'etichetta"]: string;
    ["Nome dell'artista"]: string;
    ["Titolo dell'uscita"]: string;
    ["Titolo della traccia"]: string;
    UPC: reportNumber;
    ISRC: reportNumber;
    ["Riferimento catalogo uscita"]: string;
    ["Tipo di sottoscrizione in streaming"]: string;
    ["Tipo di uscita"]: string;
    ["Tipo di vendita"]: string;
    Quantita: reportNumber;
    ["Valuta di pagamento del cliente"]: "EUR";
    ["Prezzo unitario"]: reportNumber;
    ["Tariffa di riproduzione meccanica"]: reportNumber;
    ["Profitto lordo"]: reportNumber;
    ["Tasso di profitto del cliente"]: reportNumber;
    ["Guadagno netto"]: reportNumber;
};
export declare function creaZionCsv(this: IApp, index: number): IApp;
export {};
