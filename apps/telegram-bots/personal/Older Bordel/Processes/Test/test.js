import mongoose from "mongoose";
import dotenv from "dotenv"
import { zionTelegraf } from "../../utils.js";
import { create } from "./🗄.post/create.js";
import { get } from "./📦.get/get.js";
import { edit } from "./🖊.edit/edit.js";
import { askConfirmationToStartTest } from "./🤖.bot/askConfirmationToStartTest.js";
import { deleteDoc } from "./🗑.delete/delete.js";

import { confirmationAnswer } from "./💻.logic/confirmationAnswer.js";
import { checkIfTestIsListeningRightField } from "./🚓.control/checkIfTestIsListeningRightField.js";
import { replyTestStarted } from "./🤖.bot/replyTestStarted.js";
// import { confirmation } from "./1️⃣.createProcessTestDocumentForThisCall/confirmation.js";
dotenv.config()

// mongoose.connect(process.env.MONGODB_URI,
//   {
//     "auth": {
//       "authSource": "admin"
//     },
//     "user": process.env.DB_USER,
//     "pass": process.env.DB_PWD
//   })
// const db = mongoose.connection;
// db.on("error", (error) => {
//   console.log("connection error: ", error)
// })
// db.once("open", () => {
//   console.log("Connected successfully")
// })

export let test = async (bot) => {
  let application = {
    name: "Testing the Bot Part I",
    category: "Architecture",
    type: "design",
    CRUD: "create",
    models: ["Test", "Process", "Chat", "TelegramChat"],
    fields: {
      amount: 3,
      steps: [
        { name: "Confirmation", description: "" },
        { name: "Title", description: "Titolo del item" },
        { name: "Category", description: "Categoria di cui fa parte l'item" },
        { name: "Description", description: "Descrizione dell'item che lo user sta inserendo" }
      ]
    }
  }
  let initialization = async () => {
    let applicationDoc = {}
    let telegramChatDoc = {}
    let chatDoc = {}
    let testDoc = {}
    let chatCallingTestCommand
    return new Promise(async (res, rej) => {
      bot.command("/test", async (ctx, next) => {
        // next()
        chatCallingTestCommand = ctx.update.message.chat.id
        /* await wallet balance */
        await get.application.byName(application.name)
          .then(async ({ match, method }) => {
            applicationDoc._id = match._id
          })
          .catch(async (error) => {
            await create.application(application)
              .then(async ({
                newApplicationDocumentInDb
              }) => {
                applicationDoc._id = newApplicationDocumentInDb._id
              })
              .catch(async (error) => {
                rej({
                  message: "There was an error while creating the application doc.",
                  child: error
                })
              })
            error ? rej({
              message: "There was an error getting the application by name.",
              child: error
            }) : {}
          })
        await get.telegramChat.byContextChatId(chatCallingTestCommand)
          .then(async (match) => {
            telegramChatDoc._id = match._id
            let chatQueryResult = await get.chat.byContextChatId(chatCallingTestCommand)
            chatDoc = chatQueryResult
          })
          .catch(async (error) => {
            console.log("there");
            await create.telegramChat(ctx.update.message.chat)
              .then(async (newTelegramChatDoc) => {
                telegramChatDoc._id = newTelegramChatDoc._id
              })
              .catch(async (error) => {
                rej(error)
              })
            await create.chat(telegramChatDoc._id)
              .then(async (newChatDoc) => {
                chatDoc._id = newChatDoc._id
              })
              .catch(async (error) => {
                rej(error)
              })
          })

        let chatResult = await get.chat.byContextChatId(ctx.update.message.chat.id)
          .catch(async(childError)=>{{
            rej({
              childError,
              message: "Error while retrieving chat by context chat id"
            })
          }})
        await get.test.activeOfChat(applicationDoc._id, chatResult._id)
          .then(async ({ testRunningThisApplication }) => {
            testDoc._id = testRunningThisApplication._id
            console.log("THere was a test already");
            return continueHere({
              message: `Chat has already an active test running this application: ${testDoc._id}`,
              testDoc,
              applicationDoc,
              application,
              chatDoc,
              ctx
            })
            /* Se esiste un test attivo della chat, l'azione non deve continuare*/
            ////======>>======>>|=====>>\\ // >>======>>======>>======>>======>>======>>
            ////======>>======>>|===  >> /'\  >>  ||  >>  ||  >>======>>======>>======>>
            ////======>>======>>|=====>>// \\ >>======>>  ||  >>======>>======>>======>>
          })
          .catch(async ({
            message,
            chat_Id
          }) => {
            console.log("THere was no test so lets create one");
            await create.test(chat_Id, applicationDoc._id)
              .then(async ({
                newTestDoc,
                method
              }) => {
                testDoc._id = newTestDoc._id
                console.log("we created one, here it is =): ", testDoc);
                return continueHere({
                  message: `New Test created:`,
                  testDoc,
                  applicationDoc,
                  application,
                  chatDoc,
                  ctx,
                  child: { newTestDoc, method }
                })
              })
              .catch(async (error) => {
                rej({
                  message: error
                })
              })
          })
        // res("ciao")
        console.log("name() arrived to the end");
        // continueHere(ctx)
        ///
      })
    })
  }
  initialization()

  
  let continueHere = async (r) => {
    await confirmation(bot, r)
    console.log("GOOD ENDING: ", r)
  }
}

let confirmation = async (bot, initializationResult) => {
  await askConfirmationToStartTest(initializationResult.ctx, initializationResult.application)
  await edit.test.is_listening(true, initializationResult.testDoc, 1)
  bot.on("text", async (ctx, next) => {
    next()
    await checkIfTestIsListeningRightField(
      initializationResult.applicationDoc._id,
      ctx.update.message.chat.id,
      1,
      ctx.update.message.text
    )
      .then(async ({ match, textMessage }) => {
        await confirmationAnswer(textMessage)
          .then(async ({ has_user_confirmed, text }) => {
            if (has_user_confirmed === true) {
              await edit.test.is_confirmed(true, initializationResult.testDoc)
              await edit.test.is_listening(false, initializationResult.testDoc, undefined)
              await replyTestStarted(ctx, initializationResult.testDoc)
            } else if (has_user_confirmed === false) {
              await edit.test.is_listening(false, initializationResult.testDoc, undefined)
              await edit.test.is_aborted(true, initializationResult.testDoc)
              await edit.test.is_active(true, initializationResult.testDoc)
            }
          })
          .catch(async (misunderstandingMessage) => {
            zionTelegraf.botReply(ctx, misunderstandingMessage)
          })
      })
      .catch(async (error) => { console.log("not ok", error); })
  })

}

