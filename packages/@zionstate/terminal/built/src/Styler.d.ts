import chalk from "chalk";
export declare enum Modifiers {
    bold = "bold",
    dim = "dim",
    italic = "italic",
    underline = "underline",
    overline = "overline",
    inverse = "inverse",
    hidden = "hidden",
    strikethrough = "strikethrough",
    visible = "visible"
}
export declare enum Colors {
    black = "black",
    red = "red",
    green = "green",
    yellow = "yellow",
    blue = "blue",
    magenta = "magenta",
    cyan = "cyan",
    white = "white",
    blackBright = "blackBright",
    redBright = "redBright",
    greenBright = "greenBright",
    yellowBright = "yellowBright",
    blueBright = "blueBright",
    magentaBright = "magentaBright",
    cyanBright = "cyanBright",
    whiteBright = "whiteBright"
}
export declare enum BackGroundColors {
    bgBlack = "bgBlack",
    bgRed = "bgRed",
    bgGreen = "bgGreen",
    bgYellow = "bgYellow",
    bgBlue = "bgBlue",
    bgMagenta = "bgMagenta",
    bgCyan = "bgCyan",
    bgWhite = "bgWhite",
    bgBlackBright = "bgBlackBright" /** alias: bgGray, bgGrey */,
    bgRedBright = "bgRedBright",
    bgGreenBright = "bgGreenBright",
    bgYellowBright = "bgYellowBright",
    bgBlueBright = "bgBlueBright",
    bgMagentaBright = "bgMagentaBright",
    bgCyanBright = "bgCyanBright",
    bgWhiteBright = "bgWhiteBright"
}
declare type ModifiersT = keyof typeof Modifiers;
declare type ColorsT = keyof typeof Colors;
declare type BackGroundColorsT = keyof typeof BackGroundColors;
export declare class BasiColors {
    black: chalk.Chalk;
    red: chalk.Chalk;
    green: chalk.Chalk;
    yellow: chalk.Chalk;
    blue: chalk.Chalk;
    magenta: chalk.Chalk;
    cyan: chalk.Chalk;
    white: chalk.Chalk;
    blackBright: chalk.Chalk;
    redBright: chalk.Chalk;
    greenBright: chalk.Chalk;
    yellowBright: chalk.Chalk;
    blueBright: chalk.Chalk;
    magentaBright: chalk.Chalk;
    cyanBright: chalk.Chalk;
    whiteBright: chalk.Chalk;
}
export interface IStyler {
    basicColors: BasiColors;
    styler: {
        (style: ModifiersT, color: ColorsT, bkgColor: BackGroundColorsT): chalk.Chalk;
    };
}
export declare class Styler implements IStyler {
    basicColors: BasiColors;
    styler(style: ModifiersT, color: ColorsT, bkgColor: BackGroundColorsT): chalk.Chalk;
}
export declare const styler: (style: ModifiersT, color: ColorsT, bkgColor: BackGroundColorsT) => chalk.Chalk;
export {};
