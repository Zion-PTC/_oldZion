import { ZionError } from "@zionstate_js/error";
import Telegram, { Context, deunionize, Telegraf } from "telegraf";
import { Triggers } from "telegraf/typings/composer";
import { Update, Message } from "telegraf/typings/core/types/typegram";
import { Deunionize } from "telegraf/typings/deunionize";
import { InputFile } from "typegram";
import { ButtonObj } from "./Button";
import { Extra } from "./Extra";

const NOCHATERROR = "no chat";
const NOMESSAGEERROR = "no message";
const NOINPUTEERROR = "no input";
const NOCHATTITLEERROR = "no chatTitle";

namespace Audius {
  export type TrackInPlaylist = {
    stream: { stream: string | InputFile };
    title: string;
    duration: number;
    name: string;
    thumb: InputFile;
  };
  export type MediaGroupElementType = {
    type: "audio";
    media: string | InputFile;
    thumb: InputFile;
    title: string;
    duration: number;
    performer: string;
  };
  export interface MediaGroupElement extends MediaGroupElementType {
    type: "audio";
    media: string | InputFile;
    thumb: InputFile;
    title: string;
    duration: number;
    performer: string;
  }
  export class MediaGroupElement implements MediaGroupElementType {}
}

type TrackInPlaylist = Audius.TrackInPlaylist;
type MediaGroupElementType = Audius.MediaGroupElementType;
let MediaGroupElement = Audius.MediaGroupElement;

type BotResponseForArrayOfWordsArgs = {
  ctx: Telegram.Context<Update>;
  options: BotResponseForArrayOfWordsOptions;
};
type BotResponseForArrayOfWordsOptions = {
  listOfWords: string[];
  messages: string[];
  type: any;
  limit: any;
};
type TimedOutMessageArgs = {
  sec: number;
  text: string;
  ctx: Telegram.Context<Update>;
};
type WordLimitOptions = { mess: string; lim: number };

interface IBot {
  token: string;
  bot: Telegraf;
  createAction(
    t: Triggers<Telegram.Context<Update>>,
    mess: string,
    extra: Extra
  ): Bot;
  // TODO definire meglio i tipi
  createKeyboard(array: string[]): Array<any>;
  // TODO definire meglio i tipi
  createArrayOfMenus(array: Array<any>): Array<any>;
  // TODO definire meglio i tipi
  createArrayOfButtons(array: string[]): any;
  // TODO definire meglio i tipi
  createButtonObj(array: string[]): any;
  // TODO definire meglio i tipi
  replyToMessage(ctx: Context, mess: string): any;
  ////////
  // TODO definire meglio i tipi
  getChatName(chatType: string, chatTitle: string): any;
  // TODO definire meglio i tipi
  askConfirmationMessage(ctx: Context): any;
  // TODO definire meglio i tipi
  testReply(ctx: Context, text: string): any;
  // TODO definire meglio i tipi
  botReply(ctx: Context, text: string, keyboard: any): any;
  // TODO definire meglio i tipi
  createBotResponseForArrayOfWords(args: BotResponseForArrayOfWordsArgs): any;
  // TODO definire meglio i tipi
  timedOutMessage(args: TimedOutMessageArgs): any;
  // TODO definire meglio i tipi
  wordLimit(ctx: Context, obj: WordLimitOptions): any;
  // TODO definire meglio i tipi
  sendMediaGroup(ctx: Context, playlist: TrackInPlaylist[]): any;
  // TODO definire meglio i tipi
  askConfirmationMess(ctx: Context<Update.MessageUpdate>): any;
  ////////
  ////////
  ////////
}

type ArrayTypes = "and" | "or";

interface IContext extends Context<Update> {}

class Bot implements IBot {
  token: string;
  bot: Telegram.Telegraf<Telegram.Context<Update>>;
  constructor(token: string) {
    this.token = token;
    this.bot = new Telegraf(this.token);
  }
  createAction(
    t: Triggers<Telegram.Context<Update>>,
    mess: string,
    extra: Extra
  ): Bot {
    this.bot.action(t, (ctx) => {
      ctx.deleteMessage();
      if (!ctx.chat) throw new ZionError(NOCHATERROR);
      this.bot.telegram.sendMessage(ctx.chat.id, mess, extra);
    });
    return this;
  }
  createKeyboard(array: Array<any>) {
    let menus: Array<any> = this.createArrayOfMenus(array);
    return menus;
  }
  createArrayOfMenus(array: Array<any>) {
    let menus: Array<any> = [];
    let createArrBttns = this.createArrayOfButtons;
    function createButtons(line: Array<any>) {
      let buttons = createArrBttns(line);
      return menus.push(buttons);
    }
    array.forEach(createButtons);
    return menus;
  }
  // TODO definire meglio i tipi
  createArrayOfButtons(array: Array<any>) {
    let buttons: Array<any> = [];
    let createObj = this.createButtonObj;
    function createButtons(button: any) {
      let item = createObj(button);
      return buttons.push(item);
    }
    array.forEach(createButtons);
    return buttons;
  }
  createButtonObj(array: Array<any>) {
    return new ButtonObj(array[0], array[1]);
  }
  replyToMessage(ctx: Context, mess: string) {
    let extra = new Extra();
    if (!ctx.message) throw new ZionError(NOMESSAGEERROR);
    extra.reply_to_message_id = ctx.message.message_id;
    ctx.reply(mess, extra);
  }
  getChatName(chatType: string, chatTitle: string) {
    return new Promise((res, rej) => {
      if (chatType === "private") {
        res("privata con te");
      }
      if (chatType === "supergroup") {
        res(": " + chatTitle);
      }
      if (chatType === "group") {
        res(": " + chatTitle);
      } else {
        rej("Questa chat è di tipo ancora sconosciuto");
      }
    });
  }
  async askConfirmationMessage(ctx: Context<Update>) {
    if (!ctx.message) throw new ZionError(NOMESSAGEERROR);
    let chatType = ctx.message.chat.type;
    let chatTitle = ctx.update;
    let user = ctx.update;
  }
  async testReply(ctx: Context, text: string) {
    if (!ctx.chat) throw new ZionError(NOCHATERROR);
    ctx.telegram.sendChatAction(ctx.chat.id, "typing");
    let extra = new Extra();
    extra.disable_notification = true;
    return await ctx.reply(text, extra);
  }
  async botReply(
    ctx: Context,
    text: string,
    keyboard?: Telegram.Types.ExtraReplyMessage
  ) {
    if (!ctx.chat) throw new ZionError(NOCHATERROR);
    ctx.telegram.sendChatAction(ctx.chat.id, "typing");
    return await ctx.reply(text, keyboard);
  }
  async createBotResponseForArrayOfWords(args: BotResponseForArrayOfWordsArgs) {
    let { ctx, options } = args;
    let { listOfWords, messages, type, limit } = options;
    let tom = this.timedOutMessage;
    if (!ctx.message) throw new ZionError(NOMESSAGEERROR);
    let input = deunionize(ctx.message).text;
    if (!input) throw new ZionError(NOINPUTEERROR);
    let inputArray = input.split(" ");
    async function sendTimedOutMessage(e: {
      sec: number;
      text: string;
    }): Promise<void> {
      let { sec, text } = e;
      let args = { sec, text, ctx };
      await tom(args);
    }
    function hasWord(
      word: string,
      index: number,
      array: string[],
      thisArg: boolean
    ): boolean {
      const cond = inputArray.includes(word);
      if (cond) thisArg = true;
      return thisArg;
    }
    function countWords(word: string, counter: number): number {
      let cond1 = inputArray.includes(word);
      if (cond1) counter++;
      return counter;
    }
    // FIXME there is a bug
    function checkForWords(e: string[], resCollector: boolean[]): void {
      let wordsArray: string[] = e;
      let arrayContainsWord = false;
      //@ts-expect-error ..... here the bug
      wordsArray.forEach(hasWord, arrayContainsWord);
      if (arrayContainsWord) resCollector.push(true);
    }
    // FIXME there is a bug
    function typeOr() {
      let wordsContainingTriggers = 0;
      let wct = wordsContainingTriggers;
      listOfWords.forEach(countWords, wct);
      //@ts-expect-error ..... here the bug
      if (wct > limit) messages.forEach(sendTimedOutMessage);
    }
    // FIXME there is a bug
    function typeAnd() {
      let groupContainingTriggers: string[] = [];
      let gct = groupContainingTriggers;
      //@ts-expect-error ..... here the bug
      listOfWords.forEach(checkForWords, gct);
      let cond3 = gct.length === listOfWords.length;
      //@ts-expect-error ..... here the bug
      if (cond3) messages.forEach(sendTimedOutMessage);
    }
    if (type === "or") typeOr;
    if (type === "and") typeAnd;
  }
  async timedOutMessage(args: TimedOutMessageArgs) {
    let { ctx, sec, text } = args;
    if (sec === 0) this.replyToMessage(ctx, text);
    if (sec >= 0) setTimeout(() => ctx.reply(text), sec * 1000);
  }
  wordLimit(ctx: Telegram.Context<Update>, { mess, lim }: WordLimitOptions) {
    if (!ctx.message) throw new ZionError(NOMESSAGEERROR);
    let input = deunionize(ctx.message).text;
    if (!input) throw new ZionError(NOINPUTEERROR);
    let inputArray = input.split(" ");
    if (inputArray.length > lim) this.replyToMessage(ctx, mess);
  }
  sendMediaGroup(
    ctx: Telegram.Context<Update>,
    playlist: Array<TrackInPlaylist>
  ) {
    let list: MediaGroupElementType[] = [];
    let bot = this.bot;
    for (let obj of playlist) {
      let element = new MediaGroupElement();
      element.duration = obj.duration;
      element.media = obj.stream.stream;
      element.performer = obj.name;
      element.thumb = obj.thumb;
      element.title = obj.title;
      element.type = "audio";
      list.push(element);
    }
    function tgSendMediaGroup(el: MediaGroupElementType): void {
      if (!ctx.chat) throw new ZionError(NOCHATERROR);
      bot.telegram.sendMediaGroup(ctx.chat.id, [el]);
    }
    list.forEach(tgSendMediaGroup);
  }
  async askConfirmationMess(ctx: Telegram.Context<Update.MessageUpdate>) {
    let chatType = ctx.update.message.chat.type;
    let chatTitle = deunionize(ctx.update.message.chat).title;
    let user = ctx.update.message.from.first_name;
    if (!chatTitle) throw new ZionError(NOCHATTITLEERROR);
    let chatName = await this.getChatName(chatType, chatTitle);
    return `Ciao ${user}. Hai richiesto di visualizzare le task della chat ${chatName}, confermi? Si o No`;
  }
}
