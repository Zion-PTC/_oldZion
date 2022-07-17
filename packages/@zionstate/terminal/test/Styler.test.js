import { Styler } from "@zionstate/terminal";
import { testEnvironment } from "@zionstate/test-suite-1";

const { expect, log } = testEnvironment();

const styler = new Styler();
const { basicColors } = styler;
const { yellow, yellowBright } = basicColors;
const message1 = yellowBright("message");
const message2 = yellow("message");
console.log(message1, message2);
