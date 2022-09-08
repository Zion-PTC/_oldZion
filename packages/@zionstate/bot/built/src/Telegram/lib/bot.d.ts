import { Context, Telegraf } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
export declare function createTelegrafBot(token: string, options?: Partial<Telegraf.Options<Context<Update>>> | undefined): Telegraf<Context<Update>>;
