import chalkPipe from "chalk-pipe";
chalkPipe();
export var Modifiers;
(function (Modifiers) {
    Modifiers["bold"] = "bold";
    Modifiers["dim"] = "dim";
    Modifiers["italic"] = "italic";
    Modifiers["underline"] = "underline";
    Modifiers["overline"] = "overline";
    Modifiers["inverse"] = "inverse";
    Modifiers["hidden"] = "hidden";
    Modifiers["strikethrough"] = "strikethrough";
    Modifiers["visible"] = "visible";
})(Modifiers || (Modifiers = {}));
export var Colors;
(function (Colors) {
    Colors["black"] = "black";
    Colors["red"] = "red";
    Colors["green"] = "green";
    Colors["yellow"] = "yellow";
    Colors["blue"] = "blue";
    Colors["magenta"] = "magenta";
    Colors["cyan"] = "cyan";
    Colors["white"] = "white";
    Colors["blackBright"] = "blackBright"; /* alises: gray, grey */
    Colors["redBright"] = "redBright";
    Colors["greenBright"] = "greenBright";
    Colors["yellowBright"] = "yellowBright";
    Colors["blueBright"] = "blueBright";
    Colors["magentaBright"] = "magentaBright";
    Colors["cyanBright"] = "cyanBright";
    Colors["whiteBright"] = "whiteBright";
})(Colors || (Colors = {}));
export var BackGroundColors;
(function (BackGroundColors) {
    BackGroundColors["bgBlack"] = "bgBlack";
    BackGroundColors["bgRed"] = "bgRed";
    BackGroundColors["bgGreen"] = "bgGreen";
    BackGroundColors["bgYellow"] = "bgYellow";
    BackGroundColors["bgBlue"] = "bgBlue";
    BackGroundColors["bgMagenta"] = "bgMagenta";
    BackGroundColors["bgCyan"] = "bgCyan";
    BackGroundColors["bgWhite"] = "bgWhite";
    BackGroundColors["bgBlackBright"] = "bgBlackBright"; /** alias: bgGray, bgGrey */
    BackGroundColors["bgRedBright"] = "bgRedBright";
    BackGroundColors["bgGreenBright"] = "bgGreenBright";
    BackGroundColors["bgYellowBright"] = "bgYellowBright";
    BackGroundColors["bgBlueBright"] = "bgBlueBright";
    BackGroundColors["bgMagentaBright"] = "bgMagentaBright";
    BackGroundColors["bgCyanBright"] = "bgCyanBright";
    BackGroundColors["bgWhiteBright"] = "bgWhiteBright";
})(BackGroundColors || (BackGroundColors = {}));
export class BasiColors {
    black = chalkPipe("black");
    red = chalkPipe("red");
    green = chalkPipe("green");
    yellow = chalkPipe("yellow");
    blue = chalkPipe("blue");
    magenta = chalkPipe("magenta");
    cyan = chalkPipe("cyan");
    white = chalkPipe("white");
    blackBright = chalkPipe("blackBright");
    redBright = chalkPipe("redBright");
    greenBright = chalkPipe("greenBright");
    yellowBright = chalkPipe("yellowBright");
    blueBright = chalkPipe("blueBright");
    magentaBright = chalkPipe("magentaBright");
    cyanBright = chalkPipe("cyanBright");
    whiteBright = chalkPipe("whiteBright");
}
export class Styler {
    basicColors = new BasiColors();
    styler(style, color, bkgColor) {
        const argArray = [style, color, bkgColor];
        return chalkPipe(argArray.join("."));
    }
}
export const styler = (style, color, bkgColor) => {
    const argArray = [style, color, bkgColor];
    return chalkPipe(argArray.join("."));
};
