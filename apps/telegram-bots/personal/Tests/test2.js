import mongoose from "mongoose";
import dotenv from "dotenv"
import { Test } from "../Models/Testing.js"
import { ZionclopediaItem } from "../Models/Zionclopedia.js"
import { Process } from "../Models/Application.js";
import { TelegramChat } from "../Models/Telegram.js";
import { Chat } from "../Models/Profiles.js";

//////// ⛔️✅🔴🟢1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣⏹
dotenv.config()

mongoose.connect(process.env.MONGODB_URI,
  {
    "auth": {
      "authSource": "admin"
    },
    "user": process.env.DB_USER,
    "pass": process.env.DB_PWD
  })
const db = mongoose.connection;
db.on("error", (error) => {
  console.log("connection error: ", error)
})
db.once("open", () => {
  console.log("Connected successfully")
})

let testObj = {
  name: "Testing NodeJS application syntax",
  category: "Architecture",
  type: "design",
  CRUD: "create",
  models: ["Test", "Process"],
  fields: 3
}
/// 🏷2️⃣1️⃣
let createProcessTestDocumentForThisCall = async (ctx) => {
  ///PRIMO SUB_METHOD di createProcessTestDocumentForThisCall
  /// 🏷2️⃣1️⃣.🏷2️⃣1️⃣
  let checkIfProcessExists = async () => {
    /// 🏷2️⃣1️⃣.🏷2️⃣1️⃣.🏷1️⃣1️⃣
    let checkArrayLength = async (name) => {                                      
      return new Promise(async (res, rej) => {
        let array = await Process.where("name").equals(name) /// DB PROCESS QUERY
        if (array.length !== 0) {
          /// 🏷2️⃣1️⃣.🏷2️⃣1️⃣.🏷1️⃣1️⃣✅1️⃣
          res(array[0])
        }
        else {
          /// 🏷2️⃣1️⃣.🏷2️⃣1️⃣.🏷1️⃣1️⃣⛔️2️⃣
          rej(false)
        }
      })
    }
    return new Promise(async (res, rej) => {
      /// 🏷2️⃣1️⃣.🏷2️⃣1️⃣
      await checkArrayLength(testObj.name)
        .then(async (process) => {
          /// 🏷2️⃣1️⃣.🏷2️⃣1️⃣✅2️⃣
          res(process._id)
        })
        .catch(async (e) => {
          /// 🏷2️⃣1️⃣.🏷2️⃣1️⃣⛔️3️⃣
          await Process.create(testObj) /// DB PROCESS CREATE
            .then(async (processId) => {
              /// 🏷2️⃣1️⃣.🏷2️⃣1️⃣⛔️3️⃣✅4️⃣
              res(processId)
            })
            .catch(async (e) => {
              /// 🏷2️⃣1️⃣.🏷2️⃣1️⃣⛔️3️⃣⛔️5️⃣
              rej(e)
            })
        })
    })
  }
  /////
  ///// RETURN DI createProcessTestDocumentForThisCall
  /////
  return new Promise(async (res, rej) => {
    /// 🏷2️⃣1️⃣.🏷1️⃣1️⃣
    await checkIfProcessExists(testObj) ////PRIMO SUB_METHOD
      .then(async (processId) => {
        /// 🏷2️⃣1️⃣.🏷1️⃣1️⃣✅2️⃣
        res(processId)
      })
      .catch(async (e) => {
        /// 🏷2️⃣1️⃣.🏷1️⃣1️⃣⛔️3️⃣
        await ctx.reply("Error in checkIfProcessExists" + e)
      })
  })
} /// 1️⃣

let array = []

/// 🏷2️⃣1️⃣✅3️⃣
let checkIfChatCanStartThisTest = async (ctx, processId) => {
  /// PRIMO SUB_METHOD di CHECKIFCHATCANSTARTTHISTEST
  /// 🏷2️⃣1️⃣✅3️⃣.🏷2️⃣1️⃣
  let getChatId = async () => {
    /// PRIMO SUB_SUB_METHOD di GETCHATID
    let checkIfTelegramChatExistsInZionDB = async (ctx) => {
      let chat = await TelegramChat.where("id").equals(ctx.update.message.chat.id) ///DB TELEGRAMCHAT QUERY
      if (chat.length !== 0) { return chat[0] }
      else { throw "Chat is not in database" }
    }
    /// SECONDO SUB_SUB_METHOD di GETCHATID
    let checkIfChatExistsInZionDB = async (telegramChat_id) => {
      return new Promise(async (res, rej) => {
        await Chat.where("chat_info").equals(telegramChat_id) ///DB CHAT QUERY
          .then(async (chatSearchResult) => {
            if (chatSearchResult.length === 0) {
              await Chat.create({ /// DB CHAT CREATE
                chat_info: telegramChat_id
              })
                .then(async (chatInZionDB) => { res(chatInZionDB) })
                .catch(async (e) => { "There was and error creating the record in the database: " + e })
            }
            else { res(chatSearchResult[0]) }
          })
          .catch(async (e) => { "C'è stato un errore durante la ricerca nel DC: " + e })
      })
    }
    /////
    ///// RETURN OF GET CHAT ID
    /////
    return new Promise(async (res, rej) => {
      await checkIfTelegramChatExistsInZionDB(ctx) ///PRIMO SUB_METHOD
        .then(async (telegramChatDoc) => {
          let { _id } = telegramChatDoc
          await checkIfChatExistsInZionDB(_id)  ///SECONDO SUB_METHOD
            .then(async (chatDoc) => { res(chatDoc._id) })
            .catch(async (e) => { await ctx.reply("Chat doesn't exists in Zion DB: " + e) })
        })
        .catch(async (e) => {
          let { update: { message: { chat: { id } } } } = ctx
          let telegramChat = await TelegramChat.create({/// DB TELEGRAMCHAT CREATE
            ...ctx.update.message.chat
          })
          let { _id } = telegramChat
          await checkIfChatExistsInZionDB(_id)  ///SECONDO SUB_METHOD
            .then(async (chatDoc) => { res(chatDoc._id) })
            .catch(async (e) => {
              await Chat.create({   /// DB CHAT CREATE
                slug: "/" + id
              })
                .then(async (chatDoc) => { res(chatDoc._id) })
                .catch(async (e) => { await ctx.reply("L'inserimento non è andato a buon fine" + e) })
            })
        })
    })
  }
  /// SECONDO SUB_METODO di CHECKIFCHATCANSTARTTHISTEST
  let getActiveTestsOfChat = async (ctx, processId) => {
    let testRunningThisProcess = await Test
      .where("process")                     /// Search within the Process models
      .equals(processId)                    /// value equals the processId argument       /// DB TEST QUERY
      .where("chat.id")                     /// Searh within the Chat models
      .equals(ctx.update.message.chat.id)   /// value equals the telegram chat id
    await ctx.reply("<testRunningThisProcess>: " + testRunningThisProcess)
    return new Promise(async (res, rej) => {
      if (testRunningThisProcess.length !== 0) { res(+testRunningThisProcess) }
      else {
        rej(processId)
      }
    })
  }
  //////
  ////// RETURN OF THE CHECKIFCHATCANSTARTTHISTEST
  //////
  return new Promise(async (res, rej) => {
    /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣1️⃣
    let chatId = await getChatId(ctx) /// PRIMO SUB_METODO
    /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣2️⃣
    await ctx.reply("chatId in Zion DB: " + chatId)
    /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣3️⃣
    await getActiveTestsOfChat(ctx, processId, chatId) /// SECONDO SUB_METHOD
      // .then(async (r) => { await ctx.reply("siamo qui" + r) })
      // .catch(async (testRunningThisProcess) => { await ctx.reply(testRunningThisProcess) })
      .then(async (testRunningThisProcess) => {
        /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣3️⃣✅4️⃣
        res("Questa chat sta eseguendo questi test: " + testRunningThisProcess)
      })
      .catch(async (processId) => {
        /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣3️⃣⛔️5️⃣
        let { name, category, type, CRUD, fields } = testObj
        /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣3️⃣⛔️6️⃣
        await ctx.reply("ProcessId: " + processId)
        /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣3️⃣⛔️7️⃣
        await ctx.reply("Id della chat che ha chiamato test: " + ctx.update.message.chat.id)
        /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣3️⃣⛔️8️⃣
        await ctx.reply("Oggetto del test che è stato chiamato: " + testObj)
        /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣3️⃣⛔️9️⃣
        let testRunningThisProcess = await Test.create({   /// DB TEST CREATE
          chat: chatId,
          process: processId,
        })
          .then(async (r) => {
            /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣3️⃣⛔️9️⃣✅
            await ctx.reply("la creazione del documento è andata a buon fine" + r)
          })
          .catch(async (e) => {
            /// 🏷2️⃣1️⃣✅3️⃣.🏷1️⃣3️⃣⛔️9️⃣⛔️
            await ctx.reply("C'è stato un problema durante a creazione del documento: " + e)
          })

      })
  })
} /// 2️⃣

let replyAskConfirmation = async (ctx, testObj) => {
  return new Promise((res, rej) => {
    res("replyAskConfirmation")
  })
  // let typeOfChat = async () => {
  //   return "typeOfChat"
  // }
  // let chatType = await typeOfChat()
  // let user = ctx.message.from.first_name
  // let message = "Ciao" + user + ", stai cominciando " + testObj.title + " nella chat " + chatType + ".\nVuoi cominciare?"
  // return await ctx.reply(message)
}

let confirmation = async (bot, testObj) => {
  // let checkIfChatIsDoingThisTest = async () => {
  //   return "checkIfChatIsDoingThisTest"
  // }
  // let sendReplyKeyboard = async () => {
  //   return "sendReplyKeyboard"
  // }
  // let answerFromUser = async () => {
  //   return "answerFromUser"
  // }
  // return new Promise((res, rej) => {
  //   bot.on("text", async (ctx, next) => {
  //     next()
  //     await checkIfChatIsDoingThisTest(ctx, testObj)
  //     await sendReplyKeyboard()
  //     await answerFromUser()
  //       .then(() => {
  //         res(true)
  //       })
  //       .catch(() => {
  //         res(false)
  //       })
  //   })
  // })
  return new Promise((res, rej) => {
    res("confirmation")
  })
}

let insertTestInDB = async () => {
  return new Promise((res, rej) => {
    res("insertTestInDB")
  })
}

let insertDataInDB = async () => {
  return new Promise((res, rej) => {
    res("insertDataInDB")
  })
}

let replyTestStarted = async () => {
  return new Promise((res, rej) => {
    res("replyTestStarted")
  })
}

let inputFromUser = async () => {
  return new Promise((res, rej) => {
    res("inputFromUser")
  })
}

let replyUserInput = async () => {
  return new Promise((res, rej) => {
    res("replyUserInput")
  })
}

let askUserIfHeWantsToQuit = async (ctx) => {
  return new Promise((res, rej) => {
    res("askUserIfHeWantsToQuit")
    // return await ctx.reply("Vuoi interrompere il processo?")
  })
}

let quitProcess = async (ctx) => {
  // let editTestInDB = async () => {
  //   return "editTestInDB"
  // }
  // let replyOnAbortedTest = async (ctx, abortedTest) => {
  //   return "replyOnAbortedTest"
  // }
  // let abortedTest = await editTestInDB()
  // return await replyOnAbortedTest(ctx, abortedTest)
  return new Promise((res, rej) => {
    res("quitProcess")
  })
}

let continueProcess = async (ctx) => {
  // let replyOnContinuedProcess = async (ctx) => {
  //   return "replyOnContinuedProcess"
  // }
  // return await replyOnContinuedProcess(ctx)
  return new Promise((res, rej) => {
    res("continueProcess")
  })
}

export let test2 = async (bot, testObj) => {
  bot.command("/test", async (ctx, next) => {
    /// 🏷1️⃣1️⃣
    await createProcessTestDocumentForThisCall(ctx)
      .then(async (processId) => {
        /// 🏷1️⃣1️⃣✅2️⃣
        await ctx.reply("Hai chiesto di cominciare il test per il processo: " + processId)
        /// 🏷1️⃣1️⃣✅3️⃣
        await checkIfChatCanStartThisTest(ctx, processId)
          .then(async (testRunningThisProcess) => {
            /// 🏷1️⃣1️⃣✅3️⃣✅4️⃣
            await replyAskConfirmation(ctx, testRunningThisProcess)
            /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣
            await confirmation(bot, testObj)                          
              .then(async (data) => {
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅6️⃣🚹🟠
                let test = await insertTestInDB(data)
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅7️⃣🚹🔵
                await replyTestStarted(test)
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅8️⃣🅰️🟠
                let userInput1 = await inputFromUser()
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅9️⃣🅰️🔵
                let input1 = await insertDataInDB(userInput1)
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅1️⃣0️⃣🅰️🟣
                await replyUserInput(input1)
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅1️⃣1️⃣🅰️🟠
                let userInput2 = await inputFromUser()
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅1️⃣2️⃣🅰️🔵
                let input2 = await insertDataInDB(userInput2)
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅1️⃣3️⃣🅰️🟣
                await replyUserInput(input2)
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅1️⃣4️⃣🅰️🟠
                let userInput3 = await inputFromUser()
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅1️⃣5️⃣🅰️🔵
                let input3 = await insertDataInDB(userInput3)
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣✅1️⃣6️⃣🅰️🟣
                await replyUserInput(input3)
                  .then(async (r) => { await ctx.reply(r) })
              })
              .catch(async () => {
                /// 🏷1️⃣1️⃣✅3️⃣✅5️⃣⛔️1️⃣7️⃣
                await quitProcess()
              })
          })
          .catch(async () => {
            /// 🏷1️⃣1️⃣✅3️⃣⛔️1️⃣8️⃣
            await askUserIfHeWantsToQuit()
              .then(async () => {
                /// 🏷1️⃣1️⃣✅3️⃣⛔️1️⃣8️⃣✅1️⃣9️⃣
                await quitProcess()
              })
              .catch(async () => {
                /// 🏷1️⃣1️⃣✅3️⃣⛔️1️⃣8️⃣⛔️2️⃣0️⃣
                await continueProcess()
              })
          })
      })
  })
}