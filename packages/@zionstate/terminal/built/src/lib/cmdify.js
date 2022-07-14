import os from "os";
export const cmdify = function (command) {
    if (os.platform() !== "win32") {
        return command;
    }
    let splittedCommand = command.split(" ");
    splittedCommand[0] += ".cmd";
    return splittedCommand.join(" ");
};
