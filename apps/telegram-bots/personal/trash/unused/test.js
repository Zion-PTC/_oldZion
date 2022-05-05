import mongoose from "mongoose";
import dotenv from "dotenv"
import { createProcessTestDocumentForThisCall } from "./createProcessTestDocumentForThisCall.js";
import { confirmation } from "./confirmation.js";
import { inputFromUser } from "./🗄.post/inputFromUser.js";
import { insertDataInDB } from "../🗄.post/unused/insertDataInDB.js";
import { quitProcess } from "./quitProcess.js";
import { continueProcess } from "./continueProcess.js";
import { zionTelegraf } from "../../../utils.js";
import { replyUserInput } from "../🤖.bot/unused/replyUserInput.js";
import { replyTestStarted } from "../🤖.bot/replyTestStarted.js";
import { askUserIfHeWantsToQuit } from "../🤖.bot/unused/askUserIfHeWantsToQuit.js";
import { checkIfChatCanStartThisTest } from "../🚓.control/unused/checkIfChatCanStartThisTest.js";
import { replyAskConfirmationToStartTest } from "../🤖.bot/askConfirmationToStartTest.js";
import { insertTestInDB } from "../🗄.post/unused/insertTestInDB.js";
import { editTest } from "../🖊.edit/edit.js";
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


export let test = async (bot) => {
  let testObj = {
    name: "Testing NodeJS application syntax",
    category: "Architecture",
    type: "design",
    CRUD: "create",
    models: ["Test", "Process", "Chat", "TelegramChat"],
    fields: {
      amount:3,
      steps: [
        {name:"Confirmation", description:""},
        {name:"Title", description:"Titolo del item"},
        {name:"Category", description:"Categoria di cui fa parte l'item"},
        {name:"Description", description:"Descrizione dell'item che lo user sta inserendo"}
      ]
    }
  }
  bot.command("/test", async (ctx, next) => {
    await createProcessTestDocumentForThisCall(ctx, testObj)
      .then(async (processId) => {
        await ctx.reply("Hai chiesto di cominciare il test per il processo: " + processId)
        await checkIfChatCanStartThisTest(ctx, processId, testObj)
          .then(async ({testRunningThisProcess, chatId}) => {
            await replyAskConfirmationToStartTest(ctx, testObj)
            await confirmation(ctx, bot, testRunningThisProcess, chatId, testObj)                          
              .then(async (test) => {
                console.log("confirmation: ", test);
                // let test = await insertTestInDB(data)
                /* set test confirmed true */
                await editTest.is_confirmed(true, test)
                  .then(async(savedDocument)=>{
                    replyTestStarted(ctx, savedDocument)
                  })
                let userInput1 = await inputFromUser(ctx, bot, processId, test)
                let input1 = await insertDataInDB(userInput1)
                await replyUserInput(input1)
                let userInput2 = await inputFromUser()
                let input2 = await insertDataInDB(userInput2)
                await replyUserInput(input2)
                let userInput3 = await inputFromUser()
                let input3 = await insertDataInDB(userInput3)
                await replyUserInput(input3)
                  .then(async (r) => { await ctx.reply(r) })
              })
              .catch(async () => {
                await quitProcess()
              })
          })
          .catch(async () => {
            await askUserIfHeWantsToQuit()
              .then(async () => {
                zionTelegraf.botReply(ctx, `Hai gia un altro test in corso `)
                await quitProcess()
              })
              .catch(async () => {
                await continueProcess()
              })
          })
      })
  })
}