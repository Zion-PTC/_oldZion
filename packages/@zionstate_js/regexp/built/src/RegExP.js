class RegExpDescr {
}
export class ZionRegExp extends RegExp {
    static folderNameFromFolderPath = /\w+$/g;
    static valueBetweenSymbols = /((?<=[/]))(.*?)(?=\.)/;
    static getFileFromPath = /(?<=[/])\w*[.]\w*/g;
    static catchTheFirstWord = /^([\w]+)/g;
    static siCaseUnsensitive = /si/gi;
    static botCaseUnsensitive = /bot/gi;
    static checkFirstSlach = /(^\/)/i;
    static firstAndLast3 = /^.{3}?|.{3}?$/g;
    static everythingBetween = /\{(.*?)\}/g;
    static tsComment = /(\/\*.*\*\/)/g;
    static allTsComments = /(\/\**.*\*\/)/g;
    static uuid = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/g;
    static firstAndLastDyn = (string = "", span) => {
        let stringPattern = `^.{${span}}}?|.{${span}}?$`;
        const flag = "g";
        return string.match(new RegExp(stringPattern, flag));
    };
    static everythingBetweenDyn = (symbolA, symbolB) => {
        let regexp = `${symbolA}(.*?)${symbolB}`;
        return new RegExp(regexp, "g");
    };
    constructor(pattern, flags) {
        super(pattern, flags);
    }
}
