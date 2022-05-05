import { Chat } from "../../../Models/Profiles.js"
import { TelegramChat } from "../../../Models/Telegram.js"
import { Test } from "../../../Models/Testing.js"

// export let checkIfTestIsListening = async (_id) => {
//   let result = await Test
//     .where("_id")
//     .equals(_id)
//     .limit(1)
//   // .populate("Chat")
//   let chatResult = await Chat
//     .where("_id")
//     .equals(result[0].chat)
//   let tgChatResult = await TelegramChat
//     .where("_id")
//     .equals(chatResult[0].chat_info)
//   return {
//     is_listening: result[0].status.is_listening,
//     idOfChatUsingTest: tgChatResult[0].id
//   }
// }

export let checkIfTestIsListening = async (_id) => {
  return new Promise(async(res, rej)=>{
    let result = await Test
      .where("_id")
      .equals(_id)
      .limit(1)
    // .populate("Chat")
    let chatResult = await Chat
      .where("_id")
      .equals(result[0].chat)
    let tgChatResult = await TelegramChat
      .where("_id")
      .equals(chatResult[0].chat_info)
      if(result[0].status.is_listening) {res({
        is_listening: result[0].status.is_listening,
        idOfChatUsingTest: tgChatResult[0].id
      })}
      else {rej(false)}
  })
}