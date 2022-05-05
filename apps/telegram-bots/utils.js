require("dotenv").config()
const { Telegraf } = require("telegraf");

let stringQueryFIleFromTg = "https://api.telegram.org/bot<bot_token>/getFile?file_id=the_file_id"
/// This will return an object with file_id, file_size and file_path. You can then use the file_path to download the file:
let pathToFile = "https://api.telegram.org/file/bot<token>/<file_path>"

let zionTelegraf = {
  createAction: ({
    bot,
    title,
    mess,
    callback
  }) => bot.action(title, ctx => {
    ctx.deleteMessage();
    ctx.answerCbQuery("Power to Creators");
    bot.telegram.sendMessage(ctx.chat.id, mess, callback)
  }),
  createCommandList: (
    array
  ) => {
    let string = ``
    if (array.length >= 1) array.forEach(command => string = string + `\n` + command)
    else string = string;
    return string
  },
  createSendMessage: (
    bot,
    ctx,
    mess,
    array
  ) => {
    // console.log(zionTelegraf.createReplyMarkup(array));
    bot.telegram.sendMessage(ctx.chat.id, mess, zionTelegraf.createReplyMarkup(array))
  },
  createReplyMarkup: (
    array
  ) => {
    return {
      reply_markup: {
        inline_keyboard: array
      }
    }
  },
  createReplyMarkupKeyboard: (array) => {
    return {
      reply_markup : {
        keyboard: array
      }
    }
  },
  createSingleLineCallbackButtons: (
    array
  ) => {
    let menus = []
    array.forEach(line => {
      let buttons = []
      line.forEach(button => {
        let itemObj = { text: button[0], callback_data: button[1] }
        return buttons.push(itemObj)
      })
      return menus.push(buttons)
    })
    return menus
  },
  createBotResponseForArrayOfWords: (ctx, { listOfWords, messages, type, limit }) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    if (type === "or") {
      let wordsContainingTriggers = 0
      listOfWords.forEach(word => {
        if (inputArray.includes(word)) { wordsContainingTriggers++ }
      })
      if (wordsContainingTriggers > limit) {
        messages.forEach(({ sec, text }) => zionTelegraf.timedOutMessage(sec, text, ctx))
      }
    }
    if (type === "and") {
      let groupContainingTriggers = []
      listOfWords.forEach(wordsArray => {
        let arrayContainsWord = false
        wordsArray.forEach(word => {
          if (inputArray.includes(word)) { arrayContainsWord = true }
        })
        if (arrayContainsWord) { groupContainingTriggers.push(true) }
      })
      if (groupContainingTriggers.length === listOfWords.length) {
        messages.forEach(({ sec, text }) => zionTelegraf.timedOutMessage(sec, text, ctx))
      }
    }
  },
  timedOutMessage: (sec, mess, ctx) => {
    if (sec === 0) {
      zionTelegraf.replyToMessage(ctx, mess)
    }
    else {
      setTimeout(() => {
        ctx.reply(mess)
      }, sec * 1000);
    }
  },
  wordLimit: (ctx, { mess, limit }) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    if (inputArray.length > limit) {
      zionTelegraf.replyToMessage(ctx, mess)
    }
  },
  replyToMessage: (ctx, mess) => ctx.reply(mess, { reply_to_message_id: ctx.message.message_id })
}

let ctx = {
  update: {
    update_id: (ctx) => ctx.update.update_id,
    message: {
      message_id: (ctx) => ctx.update.message.message_id,
      from: {
        id: (ctx) => ctx.update.message.from.id,
        is_bot: (ctx) => ctx.update.message.from.is_bot,
        first_name: (ctx) => ctx.update.message.from.first_name,
        last_name: (ctx) => ctx.update.message.from.last_name,
        username: (ctx) => ctx.update.message.from.username,
        language_code: (ctx) => ctx.update.message.from.username,
      },
      chat: {
        id: (ctx) => ctx.update.message.chat.id,
        first_name: (ctx) => ctx.update.message.chat.first_name,
        last_name: (ctx) => ctx.update.message.chat.last_name,
        username: (ctx) => ctx.update.message.chat.username,
        type: (ctx) => ctx.update.message.chat.type,
      },
      date: (ctx) => ctx.update.message.date,
      text: (ctx) => ctx.update.message.text
    }
  },
  tg: {
    token: (ctx) => ctx.tg.token,
    response: (ctx) => ctx.tg.response,
    options: {
      apiRoot: (ctx) => ctx.tg.options.apiRoot,
      apiMode: (ctx) => ctx.tg.options.apiMode,
      webhookReply: (ctx) => ctx.tg.options.webhookReply,
      agent: {
        _events: (ctx) => ctx.tg.options.agent._events,
        _eventsCount: (ctx) => ctx.tg.options.agent._eventsCount,
        _maxListeners: (ctx) => ctx.tg.options.agent._maxListeners,
        dafaultPort: (ctx) => ctx.tg.options.agent.dafaultPort,
        protocol: (ctx) => ctx.tg.options.agent.protocol,
        options: (ctx) => ctx.tg.options.agent.options,
        requests: (ctx) => ctx.tg.options.agent.requests,
        sockets: (ctx) => ctx.tg.options.agent.sockets,
        freeSockets: (ctx) => ctx.tg.options.agent.freeSockets,
        keepAliveMsecs: (ctx) => ctx.tg.options.agent.keepAliveMsecs,
        keepAlive: (ctx) => ctx.tg.options.agent.keepAlive,
        maxSockets: (ctx) => ctx.tg.options.agent.maxSockets,
        maxFreeSockets: (ctx) => ctx.tg.options.agent.maxFreeSockets,
        maxTotalSockets: (ctx) => ctx.tg.options.agent.maxTotalSockets,
        totalSocketsCount: (ctx) => ctx.tg.options.agent.totalSocketsCount,
        scheduling: (ctx) => ctx.tg.options.agent.scheduling,
        maxCachedSession: (ctx) => ctx.tg.options.agent.maxCachedSession,
        _sessionChache: (ctx) => ctx.tg.options.agent.maxCachedSession,
      },
      attachementAgent: (ctx) => ctx.tg.options.attachementAgent,
    }
  },
  botInfo: {
    id: (ctx) => ctx.botInfo.id,
    is_bot: (ctx) => ctx.botInfo.is_bot,
    first_name: (ctx) => ctx.botInfo.first_name,
    username: (ctx) => ctx.botInfo.username,
    can_join_groups: (ctx) => ctx.botInfo.can_join_groups,
    can_read_all_group_messages: (ctx) => ctx.botInfo.can_read_all_group_messages,
    supports_inline_queries: (ctx) => ctx.botInfo.supports_inline_queries,
  },
  state: (ctx) => ctx.state
}

module.exports = zionTelegraf