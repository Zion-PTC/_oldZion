export declare class ZionCsv {
    records: any[];
    constructor(path: string);
}
/**
 *
  const filpath =
    "/Users/WAW/Documents/Believe/982321_84880_20220101_20220331.csv";
  const smaller =
    "/Users/WAW/Documents/Projects/ZION/packages/@zionrepack/csv/982321_84880_20220101_20220331.csv";
  const input = system.stringifyFile(smaller);
  const records = parse(input, {
    columns: true,
    skip_empty_lines: true,
    delimiter: ";",
  });

  const gotek = records.filter((e) => e["Nome dell'artista"] === "Gotek");

  console.log(
    records.map((r) => {
      return [
        r["Nome dell'artista"],
        r["Titolo della traccia"],
        r["Guadagno netto"],
      ];
    })
 */
