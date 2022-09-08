import { ZionError } from "@zionstate_js/error";
import { deunionize, Telegraf } from "telegraf";
import { ButtonObj } from "./Button";
import { Extra } from "./Extra";
const NOCHATERROR = "no chat";
const NOMESSAGEERROR = "no message";
const NOINPUTEERROR = "no input";
const NOCHATTITLEERROR = "no chatTitle";
var Audius;
(function (Audius) {
    class MediaGroupElement {
    }
    Audius.MediaGroupElement = MediaGroupElement;
})(Audius || (Audius = {}));
let MediaGroupElement = Audius.MediaGroupElement;
class Bot {
    token;
    bot;
    constructor(token) {
        this.token = token;
        this.bot = new Telegraf(this.token);
    }
    createAction(t, mess, extra) {
        this.bot.action(t, (ctx) => {
            ctx.deleteMessage();
            if (!ctx.chat)
                throw new ZionError(NOCHATERROR);
            this.bot.telegram.sendMessage(ctx.chat.id, mess, extra);
        });
        return this;
    }
    createKeyboard(array) {
        let menus = this.createArrayOfMenus(array);
        return menus;
    }
    createArrayOfMenus(array) {
        let menus = [];
        let createArrBttns = this.createArrayOfButtons;
        function createButtons(line) {
            let buttons = createArrBttns(line);
            return menus.push(buttons);
        }
        array.forEach(createButtons);
        return menus;
    }
    // TODO definire meglio i tipi
    createArrayOfButtons(array) {
        let buttons = [];
        let createObj = this.createButtonObj;
        function createButtons(button) {
            let item = createObj(button);
            return buttons.push(item);
        }
        array.forEach(createButtons);
        return buttons;
    }
    createButtonObj(array) {
        return new ButtonObj(array[0], array[1]);
    }
    replyToMessage(ctx, mess) {
        let extra = new Extra();
        if (!ctx.message)
            throw new ZionError(NOMESSAGEERROR);
        extra.reply_to_message_id = ctx.message.message_id;
        ctx.reply(mess, extra);
    }
    getChatName(chatType, chatTitle) {
        return new Promise((res, rej) => {
            if (chatType === "private") {
                res("privata con te");
            }
            if (chatType === "supergroup") {
                res(": " + chatTitle);
            }
            if (chatType === "group") {
                res(": " + chatTitle);
            }
            else {
                rej("Questa chat è di tipo ancora sconosciuto");
            }
        });
    }
    async askConfirmationMessage(ctx) {
        if (!ctx.message)
            throw new ZionError(NOMESSAGEERROR);
        let chatType = ctx.message.chat.type;
        let chatTitle = ctx.update;
        let user = ctx.update;
    }
    async testReply(ctx, text) {
        if (!ctx.chat)
            throw new ZionError(NOCHATERROR);
        ctx.telegram.sendChatAction(ctx.chat.id, "typing");
        let extra = new Extra();
        extra.disable_notification = true;
        return await ctx.reply(text, extra);
    }
    async botReply(ctx, text, keyboard) {
        if (!ctx.chat)
            throw new ZionError(NOCHATERROR);
        ctx.telegram.sendChatAction(ctx.chat.id, "typing");
        return await ctx.reply(text, keyboard);
    }
    async createBotResponseForArrayOfWords(args) {
        let { ctx, options } = args;
        let { listOfWords, messages, type, limit } = options;
        let tom = this.timedOutMessage;
        if (!ctx.message)
            throw new ZionError(NOMESSAGEERROR);
        let input = deunionize(ctx.message).text;
        if (!input)
            throw new ZionError(NOINPUTEERROR);
        let inputArray = input.split(" ");
        async function sendTimedOutMessage(e) {
            let { sec, text } = e;
            let args = { sec, text, ctx };
            await tom(args);
        }
        function hasWord(word, index, array, thisArg) {
            const cond = inputArray.includes(word);
            if (cond)
                thisArg = true;
            return thisArg;
        }
        function countWords(word, counter) {
            let cond1 = inputArray.includes(word);
            if (cond1)
                counter++;
            return counter;
        }
        // FIXME there is a bug
        function checkForWords(e, resCollector) {
            let wordsArray = e;
            let arrayContainsWord = false;
            //@ts-expect-error ..... here the bug
            wordsArray.forEach(hasWord, arrayContainsWord);
            if (arrayContainsWord)
                resCollector.push(true);
        }
        // FIXME there is a bug
        function typeOr() {
            let wordsContainingTriggers = 0;
            let wct = wordsContainingTriggers;
            listOfWords.forEach(countWords, wct);
            //@ts-expect-error ..... here the bug
            if (wct > limit)
                messages.forEach(sendTimedOutMessage);
        }
        // FIXME there is a bug
        function typeAnd() {
            let groupContainingTriggers = [];
            let gct = groupContainingTriggers;
            //@ts-expect-error ..... here the bug
            listOfWords.forEach(checkForWords, gct);
            let cond3 = gct.length === listOfWords.length;
            //@ts-expect-error ..... here the bug
            if (cond3)
                messages.forEach(sendTimedOutMessage);
        }
        if (type === "or")
            typeOr;
        if (type === "and")
            typeAnd;
    }
    async timedOutMessage(args) {
        let { ctx, sec, text } = args;
        if (sec === 0)
            this.replyToMessage(ctx, text);
        if (sec >= 0)
            setTimeout(() => ctx.reply(text), sec * 1000);
    }
    wordLimit(ctx, { mess, lim }) {
        if (!ctx.message)
            throw new ZionError(NOMESSAGEERROR);
        let input = deunionize(ctx.message).text;
        if (!input)
            throw new ZionError(NOINPUTEERROR);
        let inputArray = input.split(" ");
        if (inputArray.length > lim)
            this.replyToMessage(ctx, mess);
    }
    sendMediaGroup(ctx, playlist) {
        let list = [];
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
        function tgSendMediaGroup(el) {
            if (!ctx.chat)
                throw new ZionError(NOCHATERROR);
            bot.telegram.sendMediaGroup(ctx.chat.id, [el]);
        }
        list.forEach(tgSendMediaGroup);
    }
    async askConfirmationMess(ctx) {
        let chatType = ctx.update.message.chat.type;
        let chatTitle = deunionize(ctx.update.message.chat).title;
        let user = ctx.update.message.from.first_name;
        if (!chatTitle)
            throw new ZionError(NOCHATTITLEERROR);
        let chatName = await this.getChatName(chatType, chatTitle);
        return `Ciao ${user}. Hai richiesto di visualizzare le task della chat ${chatName}, confermi? Si o No`;
    }
}
