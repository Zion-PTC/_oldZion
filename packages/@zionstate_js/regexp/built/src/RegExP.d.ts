export interface IZionRegExp extends RegExp {
}
export declare class ZionRegExp extends RegExp implements IZionRegExp {
    static [key: string]: RegExp | unknown;
    static folderNameFromFolderPath: RegExp;
    static valueBetweenSymbols: RegExp;
    static getFileFromPath: RegExp;
    static catchTheFirstWord: RegExp;
    static siCaseUnsensitive: RegExp;
    static botCaseUnsensitive: RegExp;
    static checkFirstSlach: RegExp;
    static firstAndLast3: RegExp;
    static everythingBetween: RegExp;
    static tsComment: RegExp;
    static allTsComments: RegExp;
    static fileExtensionWithPoint: RegExp;
    static filenameFromPath: RegExp;
    static uuid: RegExp;
    static firstAndLastDyn: (string: string, span: number) => RegExpMatchArray;
    static everythingBetweenDyn: (symbolA: string, symbolB: string) => RegExp;
    constructor(pattern: string | ZionRegExp, flags?: string);
}
