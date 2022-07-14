// controlla nella cartella di sistema dell'applicazione la
// presenza di reports.
import { Base, IBase, ABase } from "@zionstate/base";
import { BelieveRecord } from "../../lib/creaZionCsv";
import { IAccount } from "./Account";
import { IAggregatore } from "./Aggregatore";

export interface IReport extends IBase {
  account: IAccount;
  path: string;
  aggregatore: IAggregatore;
  records: BelieveRecord[];
  // artisti?: Set<string>;
  // filter(): IBase;
  aggiungiRecord(record: BelieveRecord[]): IReport;
}

const coderegexp = /\d*/g;

enum Quarters {
  "01010331" = "Q1",
  "04010630" = "Q2",
  "07010930" = "Q3",
  // TODO sistemare creando un package time dove gestire
  // questioni relative al tempo
  //@ts-expect-error
  "10011231" = "Q4",
}

const oo = new Set();
type path = string;
type filename = string;
type client = string;
type from = string;
type to = string;

abstract class AReport extends ABase implements IReport, IBase {
  type: string = "report";
  #artisti: Set<string> = new Set();
  get artisti(): Set<string> {
    return this.#artisti;
  }
  set artisti(artisti: Set<string>) {
    this.#artisti = artisti;
  }
  #records: BelieveRecord[] = [];
  get records() {
    return this.#records;
  }
  path: path;
  file_name: filename;
  constructor(
    public account: IAccount,
    fileInfos: [path, filename] = ["path", "file_name"],
    public aggregatore: IAggregatore,
    public client_code: number,
    public from: number = 0,
    public to: number = 0,
    public year: number = 0,
    public quarter: number = 0,
    public net: number = 0
  ) {
    super();
    this.path = fileInfos[0];
    this.file_name = fileInfos[1];
    let code: string[] | undefined = this.file_name
      .match(coderegexp)
      ?.filter((r) => r !== "");

    if (code) {
      this.client_code = parseFloat(code[1]);
      this.from = parseFloat(code[2]);
      this.to = parseFloat(code[3]);
      this.year = parseFloat(code[3].slice(0, 4));
      // TODO controllare la situazione di questo errore
      // dopo che ho creato il package timeù
      // @ts-expect-error
      this.quarter = Quarters[code[2].slice(4) + code[3].slice(4)];
    }
  }
  aggiungiRecord(record: BelieveRecord[]): IReport {
    console.log("called");

    this.#records = record;
    return this;
  }
}

export class Report extends AReport implements IReport, IBase {}
