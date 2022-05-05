import mongoose from "mongoose";
import dotenv from "dotenv"
import { Investor } from "./Models/Investors.js";
import { ZionclopediaItem } from "./Models/Zionclopedia.js";
import { Task } from "./Models/Management.js";
import { zionTelegraf } from "./utils.js";
import { User } from "./Models/Profiles.js";

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

export let zion_db = {
  createInvestor: async (name, amount) => {
    try {
      let investor = await Investor.create({
        name: name,
        amount: amount
      })
      console.log(investor);
    } catch (e) {
      console.log(e.message);
    }
    return
  },
  createUser: async (ctx) => {
    let createUser = async ({
      id,
      is_bot,
      first_name,
      last_name,
      username,
      language_code
    }) => {
      let newUser = await User.create({
        tg_infos: {
          id,
          is_bot,
          first_name,
          last_name,
          username,
          language_code
        }
      }).catch("User.create", e)
      return newUser
    }
    return new Promise(async (res, rej) => {
      await User.find({ "tg_infos.id": ctx.message.from.id }, function (e, docs) {
        if (docs.length === 0) { res = createUser(ctx.message.from).catch(e => console.log("createUser", e)) }
        else { rej("Sei già registrato idiota!!") }
      }).catch(e => console.log("User.find", e.message))
    })
  },
  createZionclopediaItem: async (name) => {
    try {
      let zionclopediaItem = await ZionclopediaItem.create({
        name
      })
      console.log(zionclopediaItem);
    } catch (e) {
      console.log(e.message)
    }
  },
  createZionClopediaItemProcess: async (bot, ctx) => {
    try {
      let reply = await ctx.reply("Benvenuto nel processo di inserimento Item nella Zionclopedia\nDimmi il titolo dell'item che devo aggiungere alla Zionclopedia.\n(rispondi a questo messaggio)")
      let { message_id, from, chat, date } = reply
      let { id } = chat
      let users = []
      let processStep = 0
      function insertTitle(bot) {
        processStep++
        return new Promise((res, rej) => {
          bot.on("text", (ctx, next) => {
            if (processStep === 1) {
              if (ctx.update.message.chat.id === id) {
                users.push(ctx.update.message.from.id)
                res(ctx.update.message.text)
              }
            }
            next()
          })
        })
      }
      function insertCategory(bot) {
        processStep++
        return new Promise((res, rej) => {
          bot.on("text", (ctx, next) => {
            if (processStep === 2) {
              if (ctx.update.message.chat.id === id) {
                users.push(ctx.update.message.from.id)
                res(ctx.update.message.text)
              }
            }
            next()
          })
        })
      }
      function insertDescriprion(bot) {
        processStep++
        return new Promise((res, rej) => {
          bot.on("text", (ctx, next) => {
            if (processStep === 3) {
              if (ctx.update.message.chat.id === id) {
                if (!users.includes(ctx.update.message.from.id)) {
                  users.push(ctx.update.message.from.id)
                }
                res(ctx.update.message.text)
              }
            }
            next()
          })
        })
      }
      let title = await insertTitle(bot).catch("ERROR: there was an error while trying to insert a ZC Item's title in the db.")
      ctx.reply("In che categoria vuoi che inserisca " + title + "?")
      let category = await insertCategory(bot).catch("ERROR: there was an error while trying to insert a ZC Item's catergory in the db.")
      ctx.reply("Ora fammi una descrizionde di " + title)
      let description = await insertDescriprion(bot).catch("ERROR: there was an error while trying to insert a ZC Item's descripption in the db.")
      let participatingUsers = []
      for (let index = 0; index < users.length; index++) {
        const user = users[index];
        let matchedUser = await User.find({ "tg_infos.id": user }).exec()
        participatingUsers.push(matchedUser[0]._id)
      }
      let item = ZionclopediaItem.create({
        title,
        category,
        description,
        created_by: participatingUsers
      })
      return item
    } catch (e) {
      console.log("error", e.message);
    }
  },
  startTaskInsertProcess: async (bot, ctx) => {
    try {
      let reply = await ctx.reply("Benvenuto nel processo di inserimento Task nella sistema decentralizzato Zion.\nDimmi il nome della task che devo aggiungere a questo gruppo.\n(rispondi a questo messaggio)")
      let { message_id, from, chat, date } = reply
      let { id } = chat
      let users = []
      let processStep = 0
      function insertTitle(bot) {
        processStep++
        return new Promise((res, rej) => {
          bot.on("text", (ctx, next) => {
            if (processStep === 1) {
              if (ctx.update.message.chat.id === id) {
                users.push(ctx.update.message.from.id)
                res(ctx.update.message.text)
              }
            }
            next()
          })
        })
      }
      function insertDescription(bot) {
        processStep++
        return new Promise((res, rej) => {
          bot.on("text", (ctx, next) => {
            if (processStep === 2) {
              if (ctx.update.message.chat.id === id) {
                users.push(ctx.update.message.from.id)
                res(ctx.update.message.text)
              }
            }
            next()
          })
        })
      }
      let name = await insertTitle(bot)
      ctx.reply("Ora fammi una descrizionde di " + name)
      let description = await insertDescription(bot)
      let participatingUsers = []
      for (let index = 0; index < users.length; index++) {
        const user = users[index];
        let matchedUser = await User.find({ "tg_infos.id": user }).exec()
        participatingUsers.push(matchedUser[0]._id)
      }
      let task = await Task.create({
        general_infos: {
          name,
          description,
          created_by: participatingUsers
        }
      })
      return task
    } catch (e) {
      console.log("error", e.message);
    }
  },
  startNewUserRegistration: async (bot, ctx) => {
    let reply = await ctx.reply("Benvenuto nel processo di registrazione Profilo sullo Zion Dapp Bot.\nLo Zion Dapp Bot ti permette di interagire facilmente con il protocollo Zion.\nRispondendo a qusto messaggio effettueremo la registrazione del tuo account tramite le credenziali di Telegram.\n(rispondi a questo messaggio)").catch(e => console.log("ERROR: happened in reply, inside startNewUserRegistration", e))
    let id = reply.chat.id
    function confirmation(bot) {
      return new Promise((res, rej) => {
        bot.on("text", async (ctx, next) => {
          let mess = ctx.update.message.text
          let responseChatId = ctx.update.message.chat.id
          if (responseChatId = id) {
            if (mess) {
              let user = await zion_db.createUser(ctx).catch(e => rej(e))
              res(user)
            }
          }
          next()
        })
      })
    }
    let confirmationResponse
    return await confirmation(bot)
      .then(res => confirmationResponse = res)
      .catch(e => confirmationResponse = e)
  },
  get: {
    chat: {
      taskAddOns: {
        checkChat: (chatId, { update: { message: { text, chat: { id } } } }) => {
          console.log("liveChatId ", id);
          return new Promise((res, rej) => {
            if (chatId === id) { res(text) }
            // else { rej("Starting chat is not the same as the onw calling this function") }
          })
        },
        confirmationPromise: (bot, chatId) => {
          let confirmed = () => "hai detto si"
          let notConfirmed = () => "hai detto no, cancello il processo!"
          return new Promise(async (res, rej) => {
            bot.on("text", async (ctx, next,) => {
              console.log("getConfirmationFromUserLoopBot:storedChatId", chatId);
              await zion_db.get.chat.taskAddOns.checkChat(chatId, ctx).catch(e => res(e))
              // step1 : listen message from user for confirmationtion
              await zion_db.get.chat.taskAddOns.hasConfirmed(ctx)
                .then(r => {
                  if (r === true) {
                    res(confirmed())
                  }
                })
                .catch(e => { res(notConfirmed()) })
              next()
              rej(undefined)
            })
          }).catch("kkk")
        },
        getConfirmationFromUser: async (chatId, bot, ctx, chatType, chatTitle, user) => {
          let confirmation = undefined
          let howStupid = 0
          let askConfirmationMess = zion_db.get.chat.taskAddOns.askConfirmationMess
          let confirmationPromise = zion_db.get.chat.taskAddOns.confirmationPromise
          do {
            howStupid++
            console.log(howStupid);
            if(howStupid!=1) {await ctx.reply("fava")}
            await ctx.reply(await askConfirmationMess(chatType, chatTitle, user))
            confirmation = await confirmationPromise(
              bot,
              chatId
            ).catch(() => confirmation = undefined)
          } while (confirmation === undefined);
          return confirmation
        },
        askConfirmationMess: async (chatType, chatTitle, user) => {
          let getChatName = zion_db.get.chat.taskAddOns.getChatName
          let chatName = await getChatName(chatType, chatTitle)
          return "Ciao " + user + ". Hai richiesto di visualizzare le task della chat" + chatName + ". Confermi? Si o No"
        },
        getChatName: (chatType, chatTitle) => {
          return new Promise((res, rej) => {
            if (chatType === "private") { res(" privata con te") }
            else if (chatType === "supergroup") { res(": " + chatTitle) }
            else (rej("Questa chat è di tipo ancora sconosciuto"))
          })
        },
        hasConfirmed: (ctx) => {
          return new Promise(async (res, rej) => {
            if (ctx.update.message.text === "si") { res(true) }
            else if (ctx.update.message.text === "no") { rej(false) }
            else { res("not") }
          })
        }
      },
      tasks: async (
        chatId,
        chatTitle,
        chatType,
        user,
        testId,
        bot,
        ctx
      ) => {
        let getConfirmationFromUser = zion_db.get.chat.taskAddOns.getConfirmationFromUser
        return new Promise(async (res, rej) => {
          // send a replay message to the user asking to start the conversation
          let has_confirmed = await getConfirmationFromUser(
            chatId,
            bot,
            ctx,
            chatType,
            chatTitle,
            user
          )
          res(has_confirmed)
        })
      }
    }
  }
}