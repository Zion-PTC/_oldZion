interface CronJob {}

const executionPermissionCommand = "chmod +x run.sh";
const shabang = "#!/bin/sh";

type minute = "0-59";
type hour = "0-23";
type dayMonth = "0-30";
type month = "0-11";
type dayWeek = "0-6";
type CronJobSyntax = [minute, hour, dayMonth, month, dayWeek];
type asterisk = "* = any value";
type comma = ", = value separator";
type dash = "- = range of values";
type step = "/ = step value";
type CronJobSymbols = [asterisk, comma, dash, step];

interface Zion {
  createCronJob(): CronJob;
}

enum CronoTabDefaults {
  suffix = ">/dev/null 2>&1",
  everyEvenMinute = "*/2 * * * *",
  everyOddMinute = "1-59/2 * * * *",
  everyMinute = "* * * * *",
  every5Minutes = "*/5 * * * *",
  every15Minutes = "*/15 * * * *",
  every30Minutes = "*/30 * * * *",
  at8onSunday = "0 8 * * 0",
}

type CronoTabDefaultTypes = keyof typeof CronoTabDefaults;

class ZionJob {
  defaults = CronoTabDefaults;
  suffix = ">/dev/null 2>&1";
  get commandLine() {
    let array = [this.defaults[this.choice], this.command, this.suffix];
    let joint = array.join(" ");
    return this.defaults[this.choice] + " " + this.command + " " + this.suffix;
  }
  constructor(public command: string, public choice: CronoTabDefaultTypes) {}
}
