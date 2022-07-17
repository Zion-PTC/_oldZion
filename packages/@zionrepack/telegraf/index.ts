import t, {
  Composer as tComposer,
  Context as tContext,
  Markup as tMarkup,
  Middleware as tMiddleware,
  MiddlewareFn as tMiddlewareFn,
  MemorySessionStore as tMemorySessionStore,
  NarrowedContext as tNarrowedContext,
  Router as tRouter,
  Scenes as tScenes,
  Telegraf as tTelegraf,
  Telegram as tTelegram,
  TelegramError as tTelegramError,
  Types as tTypes,
} from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

export class Composer<C extends Context> extends tComposer<C> {}
export class Context extends tContext {}
export let Markup = tMarkup;
export type Middleware<C extends Context> = tMiddleware<C>;
export type MiddlewareFn<C extends Context> = tMiddlewareFn<C>;
export type MemorySessionStore<T> = tMemorySessionStore<T>;
export type NarrowedContext<
  C extends Context,
  U extends Update
> = tNarrowedContext<C, U>;
export type Router<C extends Context> = tRouter<C>;
export let Scenes = tScenes;
export type Telegraf = tTelegraf;
export type Telegram = tTelegram;
export type TelegramError = tTelegramError;
export let Types = tTypes;

let { deunionize, session } = t;
