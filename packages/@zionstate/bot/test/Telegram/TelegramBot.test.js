import { config } from "dotenv";
import { TelegramBot } from "../../built/src/Telegram/TelegramBot.js";
config();

const token = process.env.ZION_DAPP_DEVBOT_TOKEN;

try {
  const bot = new TelegramBot(token);
  bot.hears("hi", (ctx) => ctx.reply("ciao"));

  bot.on("");
} catch (error) {
  console.log(error.message);
}
