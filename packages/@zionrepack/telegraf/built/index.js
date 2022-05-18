import t, { Markup as tMarkup, Scenes as tScenes, Types as tTypes, } from 'telegraf';
export let Markup = tMarkup;
// export type NarrowedContext = tNarrowedContext;
// export type Router<
//   C extends Context<tg.Update>,
//   U extends tg.Update
// > = tRouter<C>;
export let Scenes = tScenes;
export let Types = tTypes;
let { deunionize, session } = t;
