import App from "@zionstate/label";

const nome = "giacomo";
const configPath =
  "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/label/test/configs";

const tnl = new App(nome, configPath);

try {
  // tnl.show();
  tnl.caricaReport("tek-no-logique", "believe");
  // .creaZionCsv(18)
  // .calcolaGuadagnoNetto();
} catch (error) {
  console.log(error);
}

console.log(process.memoryUsage().heapUsed / 1024 / 1024);
