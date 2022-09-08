import { Telegraf } from "telegraf";
import { config } from "dotenv";
config();

const bot = new Telegraf(process.env.ZION_DAPP_DEVBOT_TOKEN);

function sayHi(ctx) {
  ctx.reply("hi there");
}

let hi = ["hi", sayHi];

bot.hears(...arr);

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
