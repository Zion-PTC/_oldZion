import Telegram, { Context, deunionize, Telegraf } from 'telegraf';
import { Update, Message } from 'telegraf/typings/core/types/typegram';
import { Deunionize } from 'telegraf/typings/deunionize';
import { InputFile } from 'typegram';
import { ButtonObj } from './Button';
import { Extra } from './Extra';

namespace Audius {
  export type TrackInPlaylist = {
    stream: { stream: string | InputFile };
    title: string;
    duration: number;
    name: string;
    thumb: InputFile;
  };
  export type MediaGroupElementType = {
    type: 'audio';
    media: string | InputFile;
    thumb: InputFile;
    title: string;
    duration: number;
    performer: string;
  };
  export interface IMediaGroupElement extends MediaGroupElementType {}
  export class MediaGroupElement implements MediaGroupElementType {
    type: 'audio';
    media: string | InputFile;
    thumb: InputFile;
    title: string;
    duration: number;
    performer: string;
  }
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
  createAction(t, mess: string, extra: Extra): Bot;
  createKeyboard(array: string[]): Array<any>;
  createArrayOfMenus(array: Array<any>): Array<any>;
  createArrayOfButtons(array: string[]);
  createButtonObj(array: string[]);
  replyToMessage(ctx: Context, mess: string);
  ////////
  getChatName(chatType, chatTitle);
  askConfirmationMessage(ctx: Context);
  testReply(ctx: Context, text: string);
  botReply(ctx: Context, text: string, keyboard);
  createBotResponseForArrayOfWords(args: BotResponseForArrayOfWordsArgs);
  timedOutMessage(args: TimedOutMessageArgs);
  wordLimit(ctx: Context, obj: WordLimitOptions);
  sendMediaGroup(ctx: Context, playlist: TrackInPlaylist[]);
  askConfirmationMess(ctx: Context<Update.MessageUpdate>);
  ////////
  ////////
  ////////
}

type ArrayTypes = 'and' | 'or';

interface IContext extends Context<Update> {}

class Bot implements IBot {
  token: string;
  bot: Telegram.Telegraf<Telegram.Context<Update>>;
  constructor(token: string) {
    this.token = token;
    this.bot = new Telegraf(this.token);
  }
  createAction(t, mess: string, extra: Extra): Bot {
    this.bot.action(t, ctx => {
      ctx.deleteMessage();
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
  createArrayOfButtons(array: Array<any>) {
    let buttons: Array<any> = [];
    let createObj = this.createButtonObj;
    function createButtons(button) {
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
    extra.reply_to_message_id = ctx.message.message_id;
    ctx.reply(mess, extra);
  }
  getChatName(chatType, chatTitle) {
    return new Promise((res, rej) => {
      if (chatType === 'private') {
        res('privata con te');
      }
      if (chatType === 'supergroup') {
        res(': ' + chatTitle);
      }
      if (chatType === 'group') {
        res(': ' + chatTitle);
      } else {
        rej('Questa chat è di tipo ancora sconosiuto');
      }
    });
  }
  async askConfirmationMessage(ctx: Context<Update>) {
    let chatType = ctx.message.chat.type;
    let chatTitle = ctx.update;
    let user = ctx.update;
  }
  async testReply(ctx: Context, text: string) {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing');
    let extra = new Extra();
    extra.disable_notification = true;
    return await ctx.reply(text, extra);
  }
  async botReply(ctx: Context, text: string, keyboard) {
    ctx.telegram.sendChatAction(ctx.chat.id, 'typing');
    return await ctx.reply(text, keyboard);
  }
  async createBotResponseForArrayOfWords(args: BotResponseForArrayOfWordsArgs) {
    let { ctx, options } = args;
    let { listOfWords, messages, type, limit } = options;
    let tom = this.timedOutMessage;
    let input = deunionize(ctx.message).text;
    let inputArray = input.split(' ');
    async function sendTimedOutMessage(e): Promise<void> {
      let { sec, text } = e;
      let args = { sec, text, ctx };
      await tom(args);
    }
    function hasWord(word: string, thisArg): boolean {
      const cond = inputArray.includes(word);
      if (cond) thisArg = true;
      return thisArg;
    }
    function countWords(word: string, counter: number): number {
      let cond1 = inputArray.includes(word);
      if (cond1) counter++;
      return counter;
    }
    function checkForWords(e, resCollector): void {
      let wordsArray: string[] = e;
      let arrayContainsWord = false;
      wordsArray.forEach(hasWord, arrayContainsWord);
      if (arrayContainsWord) resCollector.push(true);
    }
    function typeOr() {
      let wordsContainingTriggers = 0;
      let wct = wordsContainingTriggers;
      listOfWords.forEach(countWords, wct);
      if (wct > limit) messages.forEach(sendTimedOutMessage);
    }
    function typeAnd() {
      let groupContainingTriggers = [];
      let gct = groupContainingTriggers;
      listOfWords.forEach(checkForWords, gct);
      let cond3 = gct.length === listOfWords.length;
      if (cond3) messages.forEach(sendTimedOutMessage);
    }
    if (type === 'or') typeOr;
    if (type === 'and') typeAnd;
  }
  async timedOutMessage(args: TimedOutMessageArgs) {
    let { ctx, sec, text } = args;
    if (sec === 0) this.replyToMessage(ctx, text);
    if (sec >= 0) setTimeout(() => ctx.reply(text), sec * 1000);
  }
  wordLimit(ctx: Telegram.Context<Update>, { mess, lim }: WordLimitOptions) {
    let input = deunionize(ctx.message).text;
    let inputArray = input.split(' ');
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
      element.type = 'audio';
      list.push(element);
    }
    function tgSendMediaGroup(el: MediaGroupElementType): void {
      bot.telegram.sendMediaGroup(ctx.chat.id, [el]);
    }
    list.forEach(tgSendMediaGroup);
  }
  async askConfirmationMess(ctx: Telegram.Context<Update.MessageUpdate>) {
    let chatType = ctx.update.message.chat.type;
    let chatTitle = deunionize(ctx.update.message.chat).title;
    let user = ctx.update.message.from.first_name;
    let chatName = await this.getChatName(chatType, chatTitle);
    return `Ciao ${user}. Hai richiesto di visualizzare le task della chat ${chatName}, confermi? Si o No`;
  }
}
