import dotenv from "dotenv"
import { Telegraf } from "telegraf"
import { zion_db } from "./zion_db.js"

let stringQueryFIleFromTg = "https://api.telegram.org/bot<bot_token>/getFile?file_id=the_file_id"
/// This will return an object with file_id, file_size and file_path. You can then use the file_path to download the file:
let pathToFile = "https://api.telegram.org/file/bot<token>/<file_path>"

export let js = {
  sliceArray: (size, array) => { /* fatto */
    return new Promise((res, rej) => {
      if (typeof size === "number" && Array.isArray(array)) {
        console.log(typeof size);
        var s = size;
        var arrayOfArrays = [];
        for (var i = 0; i < array.length; i += s) {
          arrayOfArrays.push(array.slice(i, i + s));
        }
        res(arrayOfArrays)
      } else {
        rej(typeof size !== "number" ? "size is not a number" : "The second argument shall be an array")
        return false
      }
    })
  }
}

export let zionTelegraf = {
  createAction: async ( /* fatto */
    {
      bot,
      title,
      mess,
      callback
    }) => {
    return bot.action(title, ctx => {
      ctx.deleteMessage()
      ctx.answerCbQuery("Power to Creators")
      bot.telegram.sendMessage(ctx.chat.id, mess, callback)
    })
  },
  createCommandList: ( /* NON SERVE */
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
    bot.telegram.sendMessage(ctx.chat.id, mess, zionTelegraf.createReplyInlineKeyboard(array))
  },
  createReplyInlineKeyboard: ( /* fatto */
    array
  ) => {
    let newArray = zionTelegraf.createKeyboard(array)
    array = newArray
    return {
      disable_notification: true,
      reply_markup: {
        inline_keyboard: array,
      }
    }
  },
  createReplyKeyboard: (array) => { /* fatto */
    let newArray = zionTelegraf.createKeyboard(array)
    array = newArray
    return {
      disable_notification: true,
      reply_markup: {
        keyboard: array,
        resize_keyboard: true
      }
    }
  },
  createKeyboard: ( /* NON SERVE */
    array
  ) => {
    let menus = zionTelegraf.createArrayOfMenus(array)
    return menus
  },
  createArrayOfMenus: (array) => { /* NON SERVE */
    let menus = []
    array.forEach(line => {
      let buttons = zionTelegraf.createArrayOfButtons(line)
      return menus.push(buttons)
    })
    return menus
  },
  createArrayOfButtons: (array) => { /* NON SERVE */
    let buttons = []
    array.forEach(button => {
      let item = zionTelegraf.createButtonObj(button)
      return buttons.push(item)
    })
    return buttons
  },
  createButtonObj: (array) => { /* NON SERVE */
    return { text: array[0], callback_data: array[1] }
  },
  createBotResponseForArrayOfWords: async ( ctx, {  /* fatto */
    listOfWords, messages, type, limit }) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    if (type === "or") {
      let wordsContainingTriggers = 0
      listOfWords.forEach(word => {
        if (inputArray.includes(word)) {
          wordsContainingTriggers++
        }
      })
      if (wordsContainingTriggers > limit) {
        messages.forEach(({
          sec, text
        }) => zionTelegraf.timedOutMessage(sec, text, ctx))
      }
    }
    if (type === "and") {
      let groupContainingTriggers = []
      listOfWords.forEach(wordsArray => {
        let arrayContainsWord = false
        wordsArray.forEach(word => {
          if (inputArray.includes(word)) {
            arrayContainsWord = true
          }
        })
        if (arrayContainsWord) {
          groupContainingTriggers.push(true)
        }
      })
      if (
        groupContainingTriggers.length === listOfWords.length
      ) {
        messages.forEach(({
          sec, text
        }) => zionTelegraf.timedOutMessage(sec, text, ctx))
      }
    }
  },
  timedOutMessage: async (sec, mess, ctx) => { /* fatto */
    if (sec === 0) {
      zionTelegraf.replyToMessage(ctx, mess)
    }
    else {
      setTimeout(() => {
        ctx.reply(mess)
      }, sec * 1000);
    }
  },
  wordLimit: (ctx, { mess, limit }) => { /* fatto */
    let input = ctx.message.text
    let inputArray = input.split(" ")
    if (inputArray.length > limit) {
      zionTelegraf.replyToMessage(ctx, mess)
    }
  },
  replyToMessage: (ctx, mess) => { ctx.reply(mess, { reply_to_message_id: ctx.message.message_id }) },
  ctx: {
    botInfo: (ctx) => {
      return ctx.botInfo
    },
    channelPost: (ctx) => {
      return ctx.channelPost
    },
    chat: (ctx) => {
      return ctx.chat
    },
    chatJoinRequest: (ctx) => {
      return ctx.chatJoinRequest
    },
    chatMember: (ctx) => {
      return ctx.chatMember
    },
    chosenInLineRequest: (ctx) => {
      return ctx.chosenInlineRequest
    },
    getChatMembersCount: (csetx) => {
      return ctx.getChatMembersCount()
    }
  },
  sendMediaGroup: (bot, ctx, playlist) => { /* fatto */
    console.log("called sendmediagroup");
    let list = []
    for (let index = 0; index < playlist.length; index++) {
      const track = playlist[index];
      let trk = track
      let stream = trk.stream.stream
      let title = trk.title
      let duration = trk.duration
      let name = trk.name
      let thumb = trk.thumb
      list.push({
        type: "audio",
        media: stream,
        title: title,
        duration: duration,
        performer: name,
        thumb: thumb
      })
      console.log("sendMediaGroup", list);
    }
    // let medialist = []
    // list.forEach(async e => medialist.push(e))
    return list.forEach(t => bot.telegram.sendMediaGroup(ctx.chat.id, [t]))
  },
  getListaDaFare: async () => {

  },
  startTasKInsertionProcess: async () => {
    // create new object in database
    // edit fields
    // validate insertion (ask confiration)
    // save record in database
    // alert use with process result
  },
  askConfirmationMess: async (ctx) => { /* fatto */
    let chatType = ctx.update.message.chat.type
    let chatTitle = ctx.update.message.chat.title
    let user = ctx.update.message.from.first_name
    let getChatName = zionTelegraf.getChatName
    zion_db
    let chatName = await getChatName(chatType, chatTitle)
    return "Ciao " + user + ". Hai richiesto di visualizzare le task della chat" + chatName + ". Confermi? Si o No"
  },
  getChatName: (chatType, chatTitle) => { /* fatto */
    return new Promise((res, rej) => {
      if (chatType === "private") { res("privata con te") }
      else if (chatType === "supergroup") { res(": " + chatTitle) }
      else if (chatType === "group") { res(": " + chatTitle) }
      else (rej("Questa chat è di tipo ancora sconosciuto"))
    })
  },
  testReply: async (ctx, text) => { /* fatto */
    ctx.telegram.sendChatAction(ctx.chat.id, "typing")
    return await ctx.reply(text, {
      disable_notification: true,
    })
  },
  botReply: async (ctx, text, keyboard) => { /* fatto */
    ctx.telegram.sendChatAction(ctx.chat.id, "typing")
    return await ctx.reply(text, keyboard)
  },
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

