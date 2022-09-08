import { Terminal } from "@zionstate/terminal";
const terminal = new Terminal({ appName: "Generative Artwork" });
terminal.start();
let res;
try {
    res = await terminal.prompt({ message: "test", name: "test" });
}
catch (error) {
    console.log(error);
}
