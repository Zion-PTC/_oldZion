import { createTelegrafBot } from "./Telegram/lib/bot";

class Bot {
  bot;
  constructor(public type: "Telegram" | "Discord", tokenID: string) {
    if (type == "Telegram") this.bot = createTelegrafBot(tokenID);
  }
}
