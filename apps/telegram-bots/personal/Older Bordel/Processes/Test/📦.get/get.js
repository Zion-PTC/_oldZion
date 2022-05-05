import { Application } from "../../../Models/Application.js"
import { Chat } from "../../../Models/Profiles.js"
import { TelegramChat } from "../../../Models/Telegram.js"
import { Test } from "../../../Models/Testing.js"

export let get = {
  application: {
    byName: async (applicationName) => {
      return new Promise(async (res, rej) => {
        await Application
          .where("name")
          .equals(applicationName) /// DB PROCESS QUERY
          .then(async ([match]) => {
            res({
              match,
              method: {
                name: "get.application.byname()",
                arguments: {
                  applicationName
                }
              }
            })
          })
          .catch(async () => {
            rej({
              method: {
                name: "get.application.byName",
                arguments: {
                  applicationName
                }
              },
              message: "Application doesn't exist!!"
            })
          })
      })
    }
  },
  test: {
    activeOfChat: async (application_Id, chat_Id) => {
      return new Promise(async (res, rej) => {
        await Test
          .where("application")                     /// Search within the Process models
          .equals(application_Id)                    /// value equals the processId argument
          .where("chat")                        /// Searh within the Chat models
          .equals(chat_Id)                       /// value equals the telegram chat id
          .where("status.is_active")
          .equals(true)
          .then(async (testRunningThisApplication) => {
            testRunningThisApplication.length !== 0 ?
              res({
                testRunningThisApplication: testRunningThisApplication[0],
                method: {
                  name: "get.test.activeOfChat",
                  arguments: {
                    application_Id, chat_Id
                  }
                }
              }) :
              rej({
                message: "No match found",
                method: {
                  name: "get.test.activeOfChat",
                  arguments: {
                    application_Id, chat_Id
                  }
                }
              })
          })
          .catch(async (e) => {
            rej(e)
          })
      })
    }
  },
  process: {

  },
  telegramChat: {
    byContextChatId: async (contextChatId) => {
      return new Promise(async (res, rej) => {
        await TelegramChat
          .where("id")
          .equals(contextChatId)
          .then(async ([match]) => {
            match ?
              res(match) :
              rej({
                error: {
                  method: "get.telgramChat.byContextId",
                  message: "No match found"
                }
              })
          })
          .catch(async (error) => {
            rej({
              error: {
                method: "get.telgramChat.byContextId",
                message: "Problem while fetching TelegramChat",
                childError: error
              }
            })
          })
      })
    }
  },
  chat: {
    byContextChatId: async (contextChatId) => {
      return new Promise(async (res, rej) => {
        await Chat
          .where("id")
          .equals(contextChatId)
          .then(async ([match]) => {
            match ?
              res(match) :
              rej("No match found")
          })
          .catch(async (error) => {
            rej(error)
          })
      })
    }
  }
}