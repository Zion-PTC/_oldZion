import { Telegraf } from "telegraf"
import dotenv from "dotenv"
import { zionTelegraf } from "./utils.js"

dotenv.config()

const bot = new Telegraf(process.env.ZION_LAYOUTS_BOT_TOKEN)

let app = () => {

  // bot.action()
  // bot.cashtag()
  // bot.catch()
  // bot.command()
  // bot.drop()
  // bot.email()
  // bot.filter()
  // bot.gameQuery()
  // bot.guard()
  // bot.handleUpdate()
  // bot.hashtag()
  // bot.hears()
  // bot.help()
  // bot.inlineQuery()
  // bot.launch()
  // bot.mention()
  // bot.middleware()
  // bot.on()
  // bot.phone()
  // bot.secretPathComponent()
  // bot.settings()
  // bot.spoiler()
  // bot.start()
  // bot.stop()
  // bot.textLink()
  // bot.textMention()
  // bot.url()
  // bot.use()
  // bot.webhookCallback()

  // bot.telegram.addStickerToSet() ✅
  // bot.telegram.answerCbQuery() ✅
  // bot.telegram.answerGameQuery() ✅
  // bot.telegram.answerInlineQuery() ✅
  // bot.telegram.answerPreCheckoutQuery() ✅
  // bot.telegram.answerShippingQuery() ✅
  // bot.telegram.approveChatJoinRequest() ✅
  // bot.telegram.banChatMember() ✅
  // bot.telegram.banChatSenderChat() ✅
  // bot.telegram.callApi() ⛔️
  // bot.telegram.close() ⛔️
  // bot.telegram.copyMessage() ✅
  // bot.telegram.createChatInviteLink() ✅
  // bot.telegram.createNewStickerSet() ✅
  // bot.telegram.declineChatJoinRequest() ✅
  // bot.telegram.deleteChatPhoto() ✅
  // bot.telegram.deleteChatStickerSet() ✅
  // bot.telegram.deleteMessage() ✅
  // bot.telegram.deleteMyCommands() ⛔️
  // bot.telegram.deleteStickerFromSet() ⛔️
  // bot.telegram.deleteWebhook() ⛔️
  // bot.telegram.editChatInviteLink() ✅
  // bot.telegram.editMessageCaption() ✅
  // bot.telegram.editMessageLiveLocation() ✅
  // bot.telegram.editMessageMedia() ✅
  // bot.telegram.editMessageReplyMarkup() ✅
  // bot.telegram.editMessageText() ✅
  // bot.telegram.exportChatInviteLink() ✅
  // bot.telegram.forwardMessage() ✅
  // bot.telegram.getChat() ✅
  // bot.telegram.getChatAdministrators() ✅
  // bot.telegram.getChatMember() ✅
  // bot.telegram.getChatMembersCount() ✅
  // bot.telegram.getFile() ⛔️
  // bot.telegram.getFileLink() ⛔️
  // bot.telegram.getGameHighScores() ⛔️
  // bot.telegram.getMe() ⛔️
  // bot.telegram.getMyCommands() ⛔️
  // bot.telegram.getStickerSet() ⛔️
  // bot.telegram.getUpdates() ⛔️
  // bot.telegram.getUserProfilePhotos() ⛔️
  // bot.telegram.getWebhookInfo() ⛔️
  // bot.telegram.leaveChat() ✅
  // bot.telegram.logOut() ⛔️
  // bot.telegram.pinChatMessage() ✅
  // bot.telegram.promoteChatMember() ✅
  // bot.telegram.restrictChatMember() ⛔️
  // bot.telegram.revokeChatInviteLink()
  // bot.telegram.sendAnimation()
  // bot.telegram.sendAudio()
  // bot.telegram.sendChatAction()
  // bot.telegram.sendContact()
  // bot.telegram.sendDice()
  // bot.telegram.sendDocument()
  // bot.telegram.sendGame()
  // bot.telegram.sendInvoice()
  // bot.telegram.sendLocation()
  // bot.telegram.sendMediaGroup()
  // bot.telegram.sendMessage()
  // bot.telegram.sendPhoto()
  // bot.telegram.sendPoll()
  // bot.telegram.sendQuiz()
  // bot.telegram.sendSticker()
  // bot.telegram.sendVenue()
  // bot.telegram.sendVideo()
  // bot.telegram.sendVideoNote()
  // bot.telegram.sendVoice()
  // bot.telegram.setChatAdministratorCustomTitle()
  // bot.telegram.setChatDescription()
  // bot.telegram.setChatPermissions()
  // bot.telegram.setChatPhoto()
  // bot.telegram.setChatStickerSet()
  // bot.telegram.setChatTitle()
  // bot.telegram.setGameScore()
  // bot.telegram.setMyCommands()
  // bot.telegram.setPassportDataErrors()
  // bot.telegram.setStickerPositionInSet()
  // bot.telegram.setStickerSetThumb()
  // bot.telegram.setWebhook()
  // bot.telegram.stopMessageLiveLocation()
  // bot.telegram.stopPoll()
  // bot.telegram.unbanChatMember()
  // bot.telegram.unbanChatSenderChat()
  // bot.telegram.unpinAllChatMessages()
  // bot.telegram.unpinChatMessage()
  // bot.telegram.uploadStickerFile()

  let botInfo = bot.botInfo
  let handler = bot.handler
  let context = bot.context
  let handleError = bot.handleError
  let options = bot.options
  let telegram = bot.telegram
  let { token, response, options: telegramOptions } = telegram
  let { apiRoot, apiMode, webhookReply, agent } = telegramOptions


  bot.telegram.options
  bot.telegram.token
  bot.telegram.webhookReply

  let chats = [{ id: 0, last_mess_id: 0 }]

  bot.use(async (ctx, next) => {
    console.log(ctx);
    if (ctx.message.text) {
      if (chats.some(e => e.id === ctx.message.chat.id)) {
        let thisChatIndex = chats.findIndex(e => e.id === ctx.message.chat.id)
        chats[thisChatIndex].last_mess_id = ctx.message.message_id
      } else {
        chats.push({ id: ctx.message.chat.id, last_mess_id: ctx.message.message_id })
      }
    }
    next()
  })

  bot.launch()
}

app()

let a = 1
let b = "ciao"
let c = false
let d = 2

let obj = {
  a : 1,
  b: "ciao",
  c: false,
  d: 4,
  e : {
    f:5
  },
  g : [1,2],
  h : [1,{
    a: "arianna"
  }]
}

let {} = obj

let array = [1,2]

let boo = async () => {}
let foo = async (first_argument, b) => {
  // let result = a + b
  let newArray = first_argument.map(async (value)=>{
    return value + 1
  })
  console.log(newArray);
  // return result
}

let result = foo(array)

let reply = [[{},{}],[],[]]



