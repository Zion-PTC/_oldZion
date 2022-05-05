import { Application } from "../../../Models/Application.js"
import { Chat } from "../../../Models/Profiles.js"
import { TelegramChat } from "../../../Models/Telegram.js"
import { Test } from "../../../Models/Testing.js"

export let create = {
  application: async (newApplicationObject) => {
    return new Promise(async (res, rej) => {
      await Application
        .create(newApplicationObject)
        .then(async (newApplicationDocumentInDb) => {
          res({
            newApplicationDocumentInDb,
            "create.application()": {
              arguments: newApplicationObject
            }
          })
        })
        .catch(async (childError) => {
          rej({error:{
            method: "create.application()",
            message: "Errore while creating the new Application document",
            child: childError
          }})
        })
    })
  },
  telegramChat: async (newTelegramChat) => {
    return new Promise(async (res, rej) => {
      await TelegramChat
        .create(newTelegramChat)
        .then(async (newTelegramChatDoc) => {
          res(newTelegramChatDoc)
        })
        .catch(async (childError) => {
          rej({error:{
            method: "create.telegramChat",
            message: "Error while creating Telegram Chat",
            child: childError
          }})
        })
    })
  },
  chat: async (telegramChat_id) => {
    return new Promise(async (res, rej) => {
      await Chat
        .create({
          chat_info: telegramChat_id
        })
        .then(async (newChatDoc) => {
          res(newChatDoc)
        })
        .catch(async (e) => {
          rej(e)
        })
    })
  },
  test: async (chat_id, application_id) => {
    return new Promise(async (res, rej) => {
      await Test
        .create({
          chat: chat_id,
          application: application_id
        })
        .then(async (newTestDoc) => {
          res({
            newTestDoc,
            method: {
              name: "create.test()",
              arguments: {
                chat_id, application_id
              }
            }
          })
        })
        .catch(async (e) => {
          rej({
            method: {
              name: "create.test()",
              arguments: {
                chat_id, application_id
              }
            },
            child: e,
            message: "Problem while creating a Test"
          })
        })
    })
  },
}