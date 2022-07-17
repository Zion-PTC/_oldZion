import inquirer from "inquirer";
import chalkPipe from "chalk-pipe";
import { ColorPalette } from "@zionstate/colors";
import { hslToHex } from "@zionstate/colors";
const boldWhite = chalkPipe("white.bold");
const color1 = "#D4DDD5";
const color2 = "#8071B7";
const color3 = "#54A65F";
const color4 = "#2D4753";
const color5 = "#11110E";
const lightgreen = chalkPipe(hslToHex(150, 89, 98));
const lightblu = chalkPipe(hslToHex(210, 89, 76));
const midpink = chalkPipe(hslToHex(330, 89, 50));
const green = chalkPipe(hslToHex(150, 89, 39));
const darkblue = chalkPipe(hslToHex(150, 100, 5));
const bg = midpink.bgHex(hslToHex(160, 90, 50));
const palette = new ColorPalette("hex", {
    color1,
    color2,
    color3,
    color4,
    color5,
});
console.log(lightgreen("Welcome"));
console.log(lightblu("Welcome"));
console.log(midpink("Welcome"));
console.log(green("Welcome"));
console.log(darkblue("Welcome"));
console.log(bg("Welcome"));
const promptObj = {
    type: "input",
    name: "nome",
    message: "Come ti chiami?",
    prefix: "🍑",
};
const confirm1 = {
    type: "confirm",
    name: "culo",
    message: "ti piace il culo?",
};
const culo = {
    type: "input",
    name: "tipo_di_culo",
    message: "e quale culo ti piace quindi??",
    when: (answers) => answers.culo,
};
const confirm2 = {};
const logAnswers = function (answers) {
    console.log(answers);
};
inquirer.prompt([promptObj, confirm1, culo]).then(logAnswers);
const res = await inquirer.prompt([promptObj, confirm1, culo]);
logAnswers(res);
async function tryCatch(functionToTry, callback) {
    try {
        await functionToTry();
    }
    catch (error) {
        callback(error);
    }
}
