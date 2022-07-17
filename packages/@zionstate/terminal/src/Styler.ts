import chalkPipe from "chalk-pipe";
import chalk from "chalk";

chalkPipe();

export enum Modifiers {
  bold = "bold",
  dim = "dim",
  italic = "italic",
  underline = "underline",
  overline = "overline",
  inverse = "inverse",
  hidden = "hidden",
  strikethrough = "strikethrough",
  visible = "visible",
}

export enum Colors {
  black = "black",
  red = "red",
  green = "green",
  yellow = "yellow",
  blue = "blue",
  magenta = "magenta",
  cyan = "cyan",
  white = "white",
  blackBright = "blackBright" /* alises: gray, grey */,
  redBright = "redBright",
  greenBright = "greenBright",
  yellowBright = "yellowBright",
  blueBright = "blueBright",
  magentaBright = "magentaBright",
  cyanBright = "cyanBright",
  whiteBright = "whiteBright",
}

export enum BackGroundColors {
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
  bgWhiteBright = "bgWhiteBright",
}
type ModifiersT = keyof typeof Modifiers;
type ColorsT = keyof typeof Colors;
type BackGroundColorsT = keyof typeof BackGroundColors;

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

export interface IStyler {
  basicColors: BasiColors;
  styler: {
    (
      style: ModifiersT,
      color: ColorsT,
      bkgColor: BackGroundColorsT
    ): chalk.Chalk;
  };
}
export class Styler implements IStyler {
  basicColors = new BasiColors();
  styler(style: ModifiersT, color: ColorsT, bkgColor: BackGroundColorsT) {
    const argArray = [style, color, bkgColor];
    return chalkPipe(argArray.join("."));
  }
}

export const styler = (
  style: ModifiersT,
  color: ColorsT,
  bkgColor: BackGroundColorsT
) => {
  const argArray = [style, color, bkgColor];
  return chalkPipe(argArray.join("."));
};
