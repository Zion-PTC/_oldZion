import { TelegramChat } from "../../../../Models/Telegram.js"

export let checkIfTelegramChatExistsInZionDB = async (ctx) => {
  let chat = await TelegramChat.where("id").equals(ctx.update.message.chat.id) ///DB TELEGRAMCHAT QUERY
  if (chat.length !== 0) { return chat[0] }
  else { throw "Chat is not in database" }
}