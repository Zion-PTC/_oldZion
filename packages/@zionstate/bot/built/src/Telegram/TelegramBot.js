import { createTelegrafBot } from "./lib/bot.js";
export class TelegramBot {
    #bot;
    constructor(tokenID) {
        this.#bot = createTelegrafBot(tokenID);
        this.action = this.#bot.action;
        this.on = this.#bot.on;
        this.sendMessage = this.#bot.telegram.sendMessage;
        this.sendMediaGroup = this.#bot.telegram.sendMediaGroup;
        this.#bot.launch();
        process.once("SIGINT", () => this.#bot.stop("SIGINT"));
        process.once("SIGTERM", () => this.#bot.stop("SIGTERM"));
    }
    action;
    hears(trigger, middleware) {
        return this.#bot.hears(trigger, middleware);
    }
    on;
    sendMediaGroup;
    sendMessage;
}
