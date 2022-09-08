import { Context, Middleware, MiddlewareFn } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import { createTelegrafBot } from "./lib/bot.js";

export class TelegramBot {
  #bot;
  constructor(tokenID: string) {
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
  hears(trigger: string, middleware: MiddlewareFn<Context<Update>>) {
    return this.#bot.hears(trigger, middleware);
  }
  on;
  sendMediaGroup;
  sendMessage;
}
