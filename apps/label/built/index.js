import * as T from "@zionstate/terminal";
import Label from "@zionstate/label";
const nome = "giacomo";
const configPath = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/label/test/configs";
const tnl = new Label(nome, configPath);
function line(line) {
    const regex = /\./g;
    const regex2 = /\((.*)\)/g;
    let path = line.split(regex);
    let startingObj = tnl;
    function addPath(path) {
        //@ts-expect-error
        return (startingObj = startingObj[path]);
    }
    // caricaReport("tek-no-logique","believe")
    function truthy() {
        const regex3 = /(?<=\().*(?=\))/g;
        let matches = line.match(regex3)[0].split(",");
        let hasArguments = !matches?.includes("");
        let method = path.pop();
        let replaced = method?.replace("(" + matches?.join() + ")", "");
        matches = matches.map((v) => v.replaceAll('"', ""));
        // replaced = replaced?.replace(")", "");
        if (replaced)
            path.push(replaced);
        try {
            if (hasArguments)
                startingObj[path](...matches);
            else
                startingObj[path]();
        }
        catch (error) {
            console.log(error.message);
        }
    }
    function faulty() {
        path.forEach(addPath);
        console.log(startingObj);
    }
    if (regex2.test(line))
        truthy();
    else
        faulty();
}
const labelTerminal = new T.Terminal("label", "go");
labelTerminal.interface.on("line", line);
