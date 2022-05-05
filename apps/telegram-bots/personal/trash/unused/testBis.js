import { Process } from "../../../Models/Application"
import { Chat } from "../../../Models/Profiles"
import { TelegramChat } from "../../../Models/Telegram"
import { Test } from "../../../Models/Testing"

((ctx, testObj) => {
  return new Promise(async (res, rej) => {
    ((testObj) => {
      return new Promise(async (res, rej) => {
        ((name) => {
          return new Promise(async (res, rej) => {
            let array = await Process
              .where("name")
              .equals(name)
            if (array.length !== 0) { res(array[0]) }
            else { rej(false) }
          })
        })(testObj.name)
          .then(async (process) => {
            res(process._id)
          })
          .catch(async (e) => {
            await Process
              .create(testObj)
              .then(async (processId) => {
                res(processId)
              })
              .catch(async (e) => {
                rej(e)
              })
          })
      })
    })(testObj)
      .then(async (processId) => {
        res(processId)
      })
      .catch(async (e) => {
        await ctx.reply("Error in checkIfProcessExists" + e)
      })
  })
})(ctx, testObj)
  .then(async (processId) => {
    await ((ctx, processId, testObj) => {
      return new Promise(async (res, rej) => {
        let chatId = await ((ctx) => {
          return new Promise(async (res, rej) => {
            await ((ctx) => {
              return new Promise(async (res, rej) => {
                let chat = await TelegramChat
                  .where("id")
                  .equals(ctx.update.message.chat.id)
                if (chat.length !== 0) { res(chat[0]) }
                else { rej("Chat is not in Database") }
              })
            })(ctx)
              .then(async (telegramChatDoc) => {
                let { _id } = telegramChatDoc
                await ((_id) => {
                  return new Promise(async (res, rej) => {
                    await Chat
                      .where("chat_info")
                      .equals(_id)
                      .then(async (r) => {
                        if (chatSearchResult.length !== 0) {
                          await Chat.create({
                            chat_info: _id
                          })
                            .then(async (chatInZionDB) => {
                              res(chatInZionDB)
                            })
                            .catch(async (e) => {
                              "There was and error creating the "
                                + "record in the database: "
                                + e
                            })
                        } else {
                          res(chatSearchResult[0])
                        }
                      })
                      .catch(async (e) => {
                        "There was and error creating the "
                          + "record in the database: "
                          + e
                      })
                  })
                })(_id)
                  .then(async (chatDoc) => { res(chatDoc._id) })
                  .catch(async (e) => {
                    await ctx.reply("Chat doesn't "
                      + "exists in Zion DB: "
                      + e)
                  })
              })
              .catch(async (e) => {
                let { update: { message: { chat: { id } } } } = ctx
                let telegramChat = await TelegramChat
                  .create({
                    ...ctx.update.message.chat
                  })
                let { _id } = telegramChat
                await ((_id) => {
                  return new Promise(async (res, rej) => {
                    await Chat
                      .where("chat_info")
                      .equals(_id)
                      .then(async (chatSearchResult) => {
                        if (chatSearchResult.length === 0) {
                          await Chat
                            .create({
                              chat_info: _id
                            })
                            .then(async (chatInZionDB) => {
                              res(chatInZionDB)
                            })
                            .catch(async (e) => {
                              "There was and error creating the "
                                + "record in the database: "
                                + e
                            })
                        }
                      })
                      .catch(async (e) => {
                        "C'è stato un errore durante "
                          + "la ricerca nel DC: " + e
                      })
                  })
                })(_id)
                  .then(async (chatDoc) => {
                    res(chatDoc._id)
                  })
                  .catch(async (e) => {
                    await Chat
                      .create({
                        slug: "/" + id
                      })
                      .then(async (chatDoc) => { res(chatDoc._id) })
                      .catch(async (e) => {
                        await ctx.reply("L'inserimento "
                          + "non è andato a buon fine"
                          + e)
                      })
                  })
              })
          })
        })(ctx)
          .then(async (r) => {

          })
          .catch(async (e) => {

          })
        //getActiveTestsOfChat
        await ((ctx, processId, chatId) => {
          return new Promise((res, rej) => {
          })
        })(ctx, processId, chatId)
          .then(async (testRunningThisProcess) => {
            rej({ testRunningThisProcess, chatId })
          })
          .catch(async (processId) => {
            await Test
              .create({
                chat: chatId,
                process: processId
              })
              .then(async (newlyCreatedTest) => {
                res({ newlyCreatedTest, chatId })
              })
              .catch(async (e) => {
                await ctx.reply("C'è stato un problema durante "
                  + "la creazione del documento: " + e)
              })
          })
      })
    })(ctx, processId, testObj)
  })
  .catch(async (e) => { /*write code here*/ })