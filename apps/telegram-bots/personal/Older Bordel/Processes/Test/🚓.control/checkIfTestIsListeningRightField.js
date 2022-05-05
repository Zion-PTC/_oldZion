import { Chat } from "../../../Models/Profiles.js"
import { TelegramChat } from "../../../Models/Telegram.js"
import { Test } from "../../../Models/Testing.js"

export let checkIfTestIsListeningRightField = async (
  applicationDoc_id,
  telegramChatId,
  field,
  textMessage
) => {
  return new Promise(async (res, rej) => {

    let tgChat_id
    await TelegramChat
      .where("id")
      .equals(telegramChatId)
      .then(async ([tgChatResult]) => {
        tgChatResult ?
          tgChat_id = tgChatResult._id :
          console.log("thiserrrrrods:   ", tgChatResult)

      })
      .catch(async (error) => {
        rej({
          message: error,
          method: {
            name: "checkIfTestIsListeningRightField()",
            arguments: {
              applicationDoc_id,
              telegramChatId,
              field,
              textMessage
            },
            description: "Fetchin in Telegramchat, if the chat in the context has been recorded in the db"
          }
        })
      })


    let chatResult = await Chat
      .where("chat_info")
      .equals(tgChat_id)
    let [chatDoc] = chatResult
    await Test
      .where("application")
      .equals(applicationDoc_id)
      .and([
        {chat: chatDoc._id},
        {is_active: true},
        {is_listening: true},
        {field: field},
      ])
      .then(async ([match]) => {
        console.log("chatResult" + match);
        match ?
          res({
            match: match,
            textMessage,
            method: {
              name: "checkIfTestIsListeningRightField()",
              arguments: {
                applicationDoc_id,
                telegramChatId,
                field,
                textMessage
              }
            }
          }) :
          rej({
            error: {
              method: {
                name: "checkIfTestIsListeningRightField()",
                arguments: {
                  applicationDoc_id,
                  telegramChatId,
                  field,
                  textMessage
                }
              },
              message: "noo active field"
            }
          })
      })
      .catch(async (error) => {
        rej({
          has_error: true,
          message: `There was an error checking if application is listening the `
            + `right field ${error}`,
          method: {
            name: "checkIfTestIsListeningRightField()",
            arguments: {
              applicationDoc_id,
              telegramChatId,
              field,
              textMessage
            }
          },
        })
      })
  })
}