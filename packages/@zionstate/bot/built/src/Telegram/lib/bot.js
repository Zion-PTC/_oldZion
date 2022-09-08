import { Telegraf } from "telegraf";
export function createTelegrafBot(token, options) {
    return new Telegraf(token, options);
}
