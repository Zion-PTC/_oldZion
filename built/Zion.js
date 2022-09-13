const executionPermissionCommand = "chmod +x run.sh";
const shabang = "#!/bin/sh";
var CronoTabDefaults;
(function (CronoTabDefaults) {
    CronoTabDefaults["suffix"] = ">/dev/null 2>&1";
    CronoTabDefaults["everyEvenMinute"] = "*/2 * * * *";
    CronoTabDefaults["everyOddMinute"] = "1-59/2 * * * *";
    CronoTabDefaults["everyMinute"] = "* * * * *";
    CronoTabDefaults["every5Minutes"] = "*/5 * * * *";
    CronoTabDefaults["every15Minutes"] = "*/15 * * * *";
    CronoTabDefaults["every30Minutes"] = "*/30 * * * *";
    CronoTabDefaults["at8onSunday"] = "0 8 * * 0";
})(CronoTabDefaults || (CronoTabDefaults = {}));
class ZionJob {
    command;
    choice;
    defaults = CronoTabDefaults;
    suffix = ">/dev/null 2>&1";
    get commandLine() {
        let array = [this.defaults[this.choice], this.command, this.suffix];
        let joint = array.join(" ");
        return this.defaults[this.choice] + " " + this.command + " " + this.suffix;
    }
    constructor(command, choice) {
        this.command = command;
        this.choice = choice;
    }
}
