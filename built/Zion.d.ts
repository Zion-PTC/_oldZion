interface CronJob {
}
declare const executionPermissionCommand = "chmod +x run.sh";
declare const shabang = "#!/bin/sh";
declare type minute = "0-59";
declare type hour = "0-23";
declare type dayMonth = "0-30";
declare type month = "0-11";
declare type dayWeek = "0-6";
declare type CronJobSyntax = [minute, hour, dayMonth, month, dayWeek];
declare type asterisk = "* = any value";
declare type comma = ", = value separator";
declare type dash = "- = range of values";
declare type step = "/ = step value";
declare type CronJobSymbols = [asterisk, comma, dash, step];
interface Zion {
    createCronJob(): CronJob;
}
declare enum CronoTabDefaults {
    suffix = ">/dev/null 2>&1",
    everyEvenMinute = "*/2 * * * *",
    everyOddMinute = "1-59/2 * * * *",
    everyMinute = "* * * * *",
    every5Minutes = "*/5 * * * *",
    every15Minutes = "*/15 * * * *",
    every30Minutes = "*/30 * * * *",
    at8onSunday = "0 8 * * 0"
}
declare type CronoTabDefaultTypes = keyof typeof CronoTabDefaults;
declare class ZionJob {
    command: string;
    choice: CronoTabDefaultTypes;
    defaults: typeof CronoTabDefaults;
    suffix: string;
    get commandLine(): string;
    constructor(command: string, choice: CronoTabDefaultTypes);
}
