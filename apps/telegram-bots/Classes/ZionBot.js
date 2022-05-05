import EventEmitter from "events"
import { Telegraf } from "telegraf"

export class ZionBot extends Telegraf {
  constructor(token, application) {
    super(token)
    this.application = application
    this.emitter = new EventEmitter
  }
  creteReplyKeyboard(
    type,
    keyboardRowsOfButtons,
    isNotified,
    isResized
  ) {
    let reply_markup
    if (type === "inline") {
      reply_markup = {
        inline_keyboard: keyboardRowsOfButtons
      }
    } else if (type === "keyboard") {
      reply_markup = {
        keyboard: keyboardRowsOfButtons,
        resize_keyboard: isResized
      }
    }
    return {
      disable_notification: isNotified,
      reply_markup: reply_markup
    }
  }
  createBotResponseToSpecificWords(ctx, {
    listOfWords, messages, type, limit
  }) {
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
        }) => zionTelegraf.timedOutMessage(
          sec, text, ctx
        ))
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
        groupContainingTriggers.length
        === listOfWords.length
      ) {
        messages.forEach(({
          sec, text
        }) => zionTelegraf.timedOutMessage(
          sec, text, ctx
        ))
      }
    }
  }
  decode(base64){
    return Buffer.from(base64, "base64").toString("ascii")
  }
  encode(string){
    return Buffer.from(string).toString("base64")
  }
  getChatName(chatType, chatTitle){
    return new Promise((res, rej) => {
      if (chatType!== "private"|| "supergroup"|| "group")
      {(rej("Questa chat è di tipo ancora sconosciuto"))}
      if (chatType === "private")
      { res("privata con te") }
      if (chatType === "supergroup")
      { res(": " + chatTitle) }
      if (chatType === "group")
      { res(": " + chatTitle) }
      // else (rej("Questa chat è di tipo ancora sconosciuto"))
    })
  }
  sendMediaGroup(bot, ctx, playlist){
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
  }
  sendTimedOutMessage(sec, mess, ctx){
    if (sec === 0) {
      zionTelegraf.replyToMessage(ctx, mess)
    }
    else {
      setTimeout(() => {
        ctx.reply(mess)
      }, sec * 1000);
    }
  }
  setBotWordLimit(ctx, { mess, limit }) {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    if (inputArray.length > limit) {
      zionTelegraf.replyToMessage(ctx, mess)
    }
  }
  async askConfirmationMess (ctx){
    let chatType = ctx.update.message.chat.type
    let chatTitle = ctx.update.message.chat.title
    let user = ctx.update.message.from.first_name
    let getChatName = zionTelegraf.getChatName
    zion_db
    let chatName = await getChatName(chatType, chatTitle)
    return "Ciao " + user + ". Hai richiesto di visualizzare le task della chat" + chatName + ". Confermi? Si o No"
  }
  async botReply(ctx, text, keyboard){ /* fatto */
    ctx.telegram.sendChatAction(ctx.chat.id, "typing")
    return await ctx.reply(text, keyboard)
  }
  async editMessage({
    title,
    mess,
    callback
  }) {
    return this.action(title, ctx => {
      ctx.deleteMessage()
      ctx.answerCbQuery("Power to Creators")
      this.telegram.sendMessage(ctx.chat.id, mess, callback)
    })
  }
  async oneTimeCommand(command, callback){
    let status = true
    return new Promise(async(res, rej)=>{
      bot.command(command,(ctx, next)=>{
        if(status) {
          /* write some code here */
          callback(status)
          res()
        }
      })
    })
  }
  async testReply(ctx, text){
    ctx.telegram.sendChatAction(ctx.chat.id, "typing")
    return await ctx.reply(text, {
      disable_notification: true,
    })
  }
}
  /* Funzione per creare i vari bottoni e menu */
/* Funzione per creare la lista di comandi del bot */



  // async userConfirmation(){
  //   this.on("text", (ctx, next)=>{

  //   })
  // this.action()
  // this.cashtag()
  // this.command()
  // this.drop()
  // this.email()
  // this.filter()
  // this.gameQuery()
  // this.guard()
  // this.handleUpdate()
  // this.hashtag()
  // this.hears()
  // this.help()
  // this.inlineQuery()
  // this.launch()
  // this.mention()
  // this.middleware()
  // this.on()
  // this.phone()
  // this.secretPathComponent()
  // this.settings()
  // this.spoiler()
  // this.start()
  // this.stop()
  // this.telegram
  // this.textLink()
  // this.textMention()
  // this.url()
  // this.use()
  // this.webhookCallback()
  // }
  // async command(){
  //   /* create a comman */
  // }
