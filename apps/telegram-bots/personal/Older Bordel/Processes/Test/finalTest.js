import mongoose from "mongoose";
import { Application } from "../../Models/Application.js"
import { Chat } from "../../Models/Profiles.js";
import { TelegramChat, TelegramFrom } from "../../Models/Telegram.js";
import { zionTelegraf } from "../../utils.js";

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

export let finalTest = async (bot) => {
  let application = {
    name: "Testing the Bot Part I",
    category: "Architecture",
    type: "design",
    CRUD: "create",
    validation: {
      is_validated: undefined
    },
    models: ["Test", "Process", "Chat", "TelegramChat"],
    fields: {
      amount: 4,
      steps: [
        { name: "Confirmation", description: "" },
        { name: "Title", description: "Titolo dell'item" },
        { name: "Category", description: "Categoria di cui fa parte l'item" },
        { name: "Description", description: "Descrizione dell'item che lo user sta inserendo" }
      ]
    }
  }

  let x = (a, b) => {
    return a + b
  }
  x(1,2)

  bot.command("test", async (ctx, next) => {

    let app = new Application(application)
    let application_exists = await app.existsByName()
      .catch(async (err) => { console.log(err); })
    if (application_exists === true) {
      await ctx.reply("Application already exists")
    }
    else if (application_exists === false) {
      let doc = await app.saveToDb()
        .catch(async (err) => { console.log(err); })
      await ctx.reply(doc)

    }

    let telegramFrom = new TelegramFrom(ctx.update.message.from)
    let telegramFrom_exists = await telegramFrom.existsById()
      .catch(async (err) => { console.log(err); })
    if (telegramFrom_exists === true) {
      await ctx.reply("From already exists")
    } else if (telegramFrom_exists === false) {
      let doc = await telegramFrom.saveToDb()
        .catch(async (err) => { console.log(err); })
      await ctx.reply(doc)
    }

    let telegramChatDoc
    let telegramChat = new TelegramChat(ctx.update.message.chat)
    let telegramChat_exists = await telegramChat.existsById()
    if (telegramChat_exists === true) {
      telegramChatDoc = await telegramChat.getDoc()
      await ctx.reply("Telegram Chat already exists")
    } else if (telegramChat_exists === false) {
      let doc = await telegramChat.saveToDb()
        .catch(async (err) => { console.log(err); })
      telegramChatDoc = doc
      await ctx.reply(doc)
        .then(async(result)=>{ /*write code here*/ })
        .catch(async(error)=>{ /*write code here*/ })
    }

    let chatDoc
    let chat = new Chat(telegramChatDoc._id)
    let chat_exists = await chat.existsBy_id()
    if (chat_exists === true) {
      chatDoc = await chat.getDoc()
      await ctx.reply("Chat already exists")
    } else if (chat_exists === false) {
      await ctx.reply("Chat doesnt exists, do you want to create one?")

      // chatDoc = await chat.saveToDB()
      //   .catch(async (err) => { console.log(err); })
    }
  })


}