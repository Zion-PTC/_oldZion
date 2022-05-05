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
} from 'telegraf';

// export type Composer<C extends Context<tg.Update>> = tComposer<C>;
export type Context = tContext;
export let Markup = tMarkup;
// export type Middleware<C extends Context<Update>> = tMiddleware<C>;
// export type MiddlewareFn<C extends Context<Update>> = tMiddlewareFn<C>;
export type MemorySessionStore<T> = tMemorySessionStore<T>;
// export type NarrowedContext = tNarrowedContext;
// export type Router<
//   C extends Context<tg.Update>,
//   U extends tg.Update
// > = tRouter<C>;
export let Scenes = tScenes;
export type Telegraf = tTelegraf;
export type Telegram = tTelegram;
export type TelegramError = tTelegramError;
export let Types = tTypes;

let { deunionize, session } = t;
