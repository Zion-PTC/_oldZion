import { Telegraf } from "telegraf"
import { audius } from "./audius.js"
import dotenv from "dotenv"
import { zionTelegraf } from "./utils.js"
import { zion_db } from "./zion_db.js";
// import { test1 } from "./Test/test1.js";
// import { test2 } from "./Test/test2.js";
// import { test3 } from "./Test/test3.js";
// import { test } from "./Processes/Test/test.js";
import { test } from "./Processes/Test/test.js";
import { test1 } from "./Processes/Test/test1.js";
import { finalTest } from "./Processes/Test/finalTest.js";
import { testNft } from "./Test/testNft.js";
import { ZionBot } from "./Classes/ZionBot.js";

dotenv.config()

let sayHi = async (bot) => {
  return new Promise(async (res, rej) => {
    /*write code here*/
    res(bot.hears("hi", (ctx) => ctx.reply("hi")))
  })
}

// const bot = new Telegraf(process.env.TOKEN)
const bot = new ZionBot(process.env.TOKEN)

// console.log(bot.userConfirmation());
sayHi(bot)



// bot.command("/test", async (ctx)=>{
//   let user = ctx.update.message.from.first_name
//   console.log("Test: create Task (o 'cose da fare')");
//   let task = await zion_db.startTaskInsertProcess(bot, ctx)
//   ctx.reply(user+" ha chiamato /test ed ha inserito questa task: "+task)
// })

let createReplyInlineKeyboard = zionTelegraf.createReplyInlineKeyboard
let createReplyKeyboard = zionTelegraf.createReplyKeyboard
let startTasKInsertionProcess = zionTelegraf.startTasKInsertionProcess
let createCommandList = zionTelegraf.createCommandList
let createSendMessage = zionTelegraf.createSendMessage

let createAction = zionTelegraf.createAction


let START_MESS = (ctx) => `Welcome ${ctx.message.from.first_name}. I am the Zion bot!\nI can help you discovering our vision and our protocol.\nClick on one of the menus hereunder.}`
let WELCOME_MESS = `Welcome. I am the Zion bot!\nI can help you discovering our vision and our protocol.\nClick on one of the menus hereunder.`
let NEW_MEMBER_WELCOME_MESSAGE = (newMember, ctx) => {
  let isBot
  if (ctx.message.new_chat_members[0].is_bot) { isBot = "\nAAA ATTENTION MEMBERS, THIS USER IS A BOT" } else { isBot = "." }
  let mess = `Hi ${newMember.first_name}!! Welcome, I am the Zion Bot, you can chat with me if you want to have more infos about our vision,project,protocol and platforms....\n\nps: don't get used to kindness, I'm a rough bot!!🤖🌋⚡️${isBot}.
  \nI suggest you to check if this bot can see messages, cause, ONLY ME IN THIS GROUP SHOULD BE ABLE TO ACCESS MESSAGES!!⚡️⚡️⚡️.
  \nI also suggest to EXTERMINATE IT!!!`
  return mess
}
const DAOVOTE = "\nThis parameters can be changed via a DAO votation."

const webpageURL = `https://znft.tech`
const discordURL = `https://discord.gg/QrVfMgGPeH`
const mattermostSignUp = `http://board.doorgefreakt.cc:8065/signup_user_complete/?id=9doxdr4yntfoijryyc6eesyc7o`

let arrayOfWords1 = {
  listOfWords: ["nft", "NFT", "Nft"],
  messages: [
    { sec: 0, text: "wow" },
    { sec: 1, text: "wowowo" },
    { sec: 2, text: "it seems you know what NFTs are!!" },
    { sec: 5, text: "NFTS are not art!!" }
  ],
  type: "or",
  limit: 0
}

let arrayOfWords2 = {
  listOfWords: [["bot", "robot", "Bot"], ["cornuto", "bastard", "bastardo", "infame", "stronzo", "puttana"]],
  messages: [
    { sec: 0, text: "ehy" },
    { sec: 1, text: "you" },
    { sec: 2, text: "I ain't no bastard, I am just a self-breed bot" },
    { sec: 5, text: "don't make me nervous" }
  ],
  type: "and",
  limit: 0
}

let arrayOfWords3 = {
  listOfWords: [["grazie", "thanks"], ["bot", "boty", "boty bot", "stronzo"]],
  messages: [
    { sec: 1, text: "di niente bro" },
  ],
  type: "and",
  limit: 0
}

let wordCountLimit = {
  mess: "ehy, bwoy, chiiilll",
  limit: 30
}

bot.on("text", async (ctx, next) => {
  zionTelegraf.createBotResponseForArrayOfWords(ctx, arrayOfWords1)
  zionTelegraf.createBotResponseForArrayOfWords(ctx, arrayOfWords2)
  zionTelegraf.createBotResponseForArrayOfWords(ctx, arrayOfWords3)
  zionTelegraf.wordLimit(ctx, wordCountLimit)
  next()
})

bot.on('new_chat_members', (ctx) => {
  let newMembers = ctx.message.new_chat_members
  newMembers.forEach(newMember => {
    ctx.reply(NEW_MEMBER_WELCOME_MESSAGE(newMember, ctx), {
      reply_markup: {
        inline_keyboard: [[{
          text: "Chat with me, bitch", url: "https://t.me/zion_dapp_bot",
        }]]
      }
    })
  })
})

// let count = audius.fetchAudius("getTrailingMetrics", "ciao")
// console.log("count",await count);

console.log("bot is running");
bot.start(ctx => createSendMessage(bot, ctx, START_MESS(ctx), mainMenuLines))
bot.help(ctx => ctx.reply("You Called Help"))
bot.settings(ctx => ctx.reply("You Called Settings"))

bot.command("zion_tokenomics", ctx => createSendMessage(bot, ctx, WELCOME_MESS, tokenMenuLines))

// bot.command("ciao", (ctx) => ctx.reply("Ecco", createReplyInlineKeyboard([["prova"]])))
bot.command("removekeyboard", (ctx) => ctx.reply("2", { reply_markup: { remove_keyboard: true } }))
// bot.command("audius", async (ctx) => {
//   console.log("audius called");
//   ctx.telegram.sendChatAction(ctx.chat.id, "upload_document").catch(e => console.log("Error at sendChatAction, in /audius", e))
//   let playlist = await audius.createHashtagPlaylist("tnlwip").catch(e => console.log("ERROR ar createHashtahPlaylist, in /audius", e))
//   zionTelegraf.sendMediaGroup(bot, ctx, playlist)
// })

////////////
//////////// COMMANDS

// bot.command("/newUserProfile", async (ctx) => {
//   console.log("Start New User Profile Registration Process");
//   let mess = await zion_db.startNewUserRegistration(bot, ctx).catch(e => console.log(e))
//   ctx.reply(mess).catch(e => console.log(e))
// })

// bot.command("/newZionclopediaItem", async (ctx) => {
//   console.log("Start Zionclopedia Item Insertion Process");
//   let mess = await zion_db.createZionClopediaItemProcess(bot, ctx).catch(e => console.log(e))
//   ctx.reply("Ho aggiunto questo documento: " + mess + "\nnel database distribuito di ZION").catch(e => console.log(e))
// })

// bot.command("/newGroupTask", async (ctx) => {
//   let testId = "Start Zionclopedia Item Insertion Process"
//   console.log(testId);
//   let mess = await zion_db.startTaskInsertProcess(bot, ctx).catch(e => console.log(e))
//   console.log(mess);
//   ctx.reply("Ho aggiunto questo documento: " + mess + " nel database distributio di ZION").catch(e => console.log("ERROR at reply, in /newGroupTask", e))
// })

// test(bot)
// test1(bot)
// finalTest(bot)
testNft(bot)
// bot.email("jonny@doe.com")

// bot.command("/management", (ctx) => {
//   ctx.reply("Che cosa vuoi fare oggi?", zionTelegraf.createReplyInlineKeyboard([
//     [["Non so cosa fare oggi", "get_tasks"]],
//     [["Voglio aggiungere una cosa da fare", "add_task"]],
//     [[`« Back to Main Menu`, `menu`]]
//   ])).catch(e => console.log("ERROR at reply, in /management"))
// })

const INTRO_MESS = "We are building a decentralized protocol for "
  + "the music industry."
  + "\nIt will consists of an open source set of "
  + "Smart Contracts, written for the most popular "
  + "blockchains."
const BACK_TO_MAIN = "«« Back to Main Menu"
const BACK_TO_TOKENOMICS = "«« Back to Tokenomics Menu"


let logged = {
  artists: {},
  labels: {
    name: "Labels",
    buttons: [
      {
        label: {
          name: {
            playists: [
              {
                name: "Playlists"
              }
            ], artists: [
              {
                name: "Artists"
              }
            ], NFT: [
              {
                name: "NFTs",
                audio: {
                  name: "Audio"
                }
              }
            ]
          }
        }
      }
    ]
  },
}

let prova = {
  login: {
    name: "Log In",
    message: "",
    menu: {
      name: BACK_TO_MAIN
    }
  },
  signup: {
    name: "Sign Up",
    menu: {
      name: BACK_TO_MAIN
    }
  },
  about: {
    name: "About Zion",
    mess: WELCOME_MESS,
    intro: {
      name: "Introduction",
      mess: INTRO_MESS,
      menu: {
        name: BACK_TO_MAIN
      }
    },
    tokenomics: {
      name: "Tokenomics",
      supply: {
        name: "Supply",
        tokenomics: {
          name: BACK_TO_TOKENOMICS
        },
        menu: {
          name: BACK_TO_MAIN
        }
      },
      income: {
        tokenomics: {
          name: BACK_TO_TOKENOMICS
        },
        menu: {
          name: BACK_TO_MAIN

        } },
      token_dis: {
        tokenomics: {

        },
        menu: {

        }
      },
      income_dis: { tokenomics: {}, menu: {} },
      menu: {
        name: BACK_TO_MAIN
      }
    },
    dao: {
      name: "Dao",
      tokens: {
        ziontoken: {

        },
        creatorstoken: {

        },
        teamtoken: {

        },
        communitytoken: {

        },
        menu: {

        }
      },
      governance: {
        menu: {

      } },
      menu: {

      }
    },
    tokenSale: {
      name: "Token Sale",
      menu: {

      }
    },
    links: {
      name: "Links",
      webpage: {
        tokenomics: {

        }, menu: {

        }
      },
      discord: {
        tokenomics: {

        }, menu: {

        }
      },
      menu: {

      }
    },
    commands: {
      name: "Commands",
      menu: {

      }
    }
  },
  [Symbol.iterator]: function * () {
    for (let key in this) {
      yield [key, this[key]] // yield [key, value] pair
    }
  }
}
if (typeof prova === "object"){console.log("thats ok bitch");}
// console.log(Object.entries(prova.about).map(entry => [[entry[1].name, entry[0]]]));
// console.log(Object.fromEntries(prova));

let getTaskObj = {
  bot: bot,
  title: "get_tasks",
  mess: "ecco una list delle cose da fare"
}

let addTaskObj = {
  bot: bot,
  title: "add_task",
  mess: "dai un nome alla cosa che da fare",
  // callback : startTasKInsertionProcess()
}

const COMMAND_LIST = [
  "/start",
  "/zion_tokenomics",
  "/audius",
  "/management",
  "/help",
  "/settings",
  "/removekeyboard",
  "/newUserProfile",
  "/newZionclopediaItem",
  "/test"
]

const backToCommandsLines = [
  [["« Back to Main Menu", "menu"]]
]

const mainMenuLines = [
  [[`Introduction`, `intro`]],
  [[`Tokenomics`, `tokenomics`]],
  [["DAO", "dao"]],
  [["Token Sale", "tokensale"]],
  [[`Links`, `links`]],
  [[`Commands`, `commands`]]
]

const introMenuLines = [
  [["« Back to main Menu", "menu"]]
]

const tokenMenuLines = [
  [["Supply", "supply"]],
  [["Income Sources", "income"]],
  [["Token Distribution", "token_dist"]],
  [["Income Distribution", "income_dist"]],
  [[`« Back to Main Menu`, `menu`]]
]

const linksMenuLines = [
  [[`Web Page`, `webpage`]],
  [[`Discord Server`, `discord`]],
  [[`« Back to Main Menu`, `menu`]]
]

const backToTokenLines = [
  [["« Back to Token Menu", "tokenomics"], ["« Back to Main Menu", "menu"]]
]

const daoMenuLines = [
  [["Tokens", "tokens"]],
  [["Governance", "governance"]],
  [[`« Back to Main Menu`, `menu`]]
]

const tokensMenuLines = [
  [["Zion Token", "ziontoken"]],
  [["Creators Token", "creatorstoken"]],
  [["Team Token", "teamtoken"]],
  [["Community Token", "communitytoken"]],
  [[`« Back to DAO Menu`, `dao`], [`« Back to Main Menu`, `menu`]]
]

const backToTokensLines = [
  [[`« Back to DAO Tokens Menu`, `tokens`], [`« Back to Main Menu`, `menu`]]
]

const backToMainMenu = [
  [["« Back To Main Menu", "menu"]]
]

const backToLinksLines = [
  [["« Back To Links Menu", "links"], ["« Back to Main Menu", "menu"]]
]

const backToDaoMenu = [
  [[`« Back to DAO Menu`, `dao`], [`« Back to Main Menu`, `menu`]]
]

const commands = createCommandList(COMMAND_LIST)

const menuObj = {
  bot: bot,
  title: "menu",
  mess: WELCOME_MESS,
  callback: createReplyInlineKeyboard(mainMenuLines)
}

const introObj = {
  bot: bot,
  title: "intro",
  mess: "We are building a decentralized protocol for th music industry.\nIt will consists of an open source set of Smart Contracts, written for the most popural blockchains.",
  callback: createReplyInlineKeyboard(introMenuLines)
}

const tokenObj = {
  bot: bot,
  title: "tokenomics",
  mess: "\nHere you can grab some information about Zion token.",
  callback: createReplyInlineKeyboard(tokenMenuLines)
}

const linksObj = {
  bot: bot,
  title: "links",
  mess: "\nHere you can find some useful links",
  callback: createReplyInlineKeyboard(linksMenuLines)
}

const commandsObj = {
  bot: bot,
  title: "commands",
  mess: "\Here you can find the list of avalaible commands\n(type the command or simply click on it):" + commands,
  callback: createReplyInlineKeyboard(backToCommandsLines)
}

const incomeObj = {
  bot: bot,
  title: "income",
  mess: "Platform Fees : 2% on each sale.\nPlatform Fees will vary based on market volume: the higher the volume, the lower the fees. The initial value and the type of curve that it will follow will be decided with the community, when we reached a fair amount of investors and users.",
  callback: createReplyInlineKeyboard(backToTokenLines)
}

const tokenomicsObj = {
  bot: bot,
  title: "token_dist",
  mess: "The distribution of tokens is initially set as following:\n10% Creators,\n25% Team,\n25% Dao,\n30% Investors,\n10% Stake." + DAOVOTE,
  callback: createReplyInlineKeyboard(backToTokenLines)
}

const incomeDistObj = {
  bot: bot,
  title: "income_dist",
  mess: "25% Creators,\n25% Team,\n25% Dao,\n25% Stake" + DAOVOTE,
  callback: createReplyInlineKeyboard(backToTokenLines)
}

const supplyObj = {
  bot: bot,
  title: "supply",
  mess: "The supply is set to be 1B tokens, and it will be inflationary. Inflation will be used to reward digital and physical nodes. The inflation rate is not yet been established." + DAOVOTE,
  callback: createReplyInlineKeyboard(backToTokenLines)
}

const daoObj = {
  bot: bot,
  title: "dao",
  mess: "Here you can find informations on how we are going to structure our DAO.",
  callback: createReplyInlineKeyboard(daoMenuLines)
}

const tokensObj = {
  bot: bot,
  title: "tokens",
  mess: "Here you can find infos about how a zNFT actually works. Zion will be the first zNFT profile created and will be used for testing. A profile zNFT is an ERC1155 standard token, which wraps an ERC721 which actually holds the informations about the account. Each zNFT Profile will be able to generate some standard type of tokens. For instance this tokens will represent the four core roles:\nCreators\nInvestors\nTeam\nCommunity.\nEach one of these actors will have a wallet which will be governed via votations. Each of these 'departments' will act as an autonomous organism, let's say like a DAO within the DAO.\nThese tokens are going to be fungible tokens within an ERC1155 contract, the contract of the profile, and they will be used to weight decisional power over the 'departments' wallets.",
  callback: createReplyInlineKeyboard(tokensMenuLines)
}

const zionTokenObj = {
  bot: bot,
  title: "ziontoken",
  mess: "The Zion ERC1155 Fungible token will represent a SAFT, a Simple Agreement for Future Tokens. Each ERC1155 Zion Token will be exchangeable for ERC20 standard Zion tokens, which will be avalaible later on, once we will have found a suitable launchpad for our community.\nZion tokens, the ones which are going to be sold to first investors, will have a fixed max supply equal to the amount of tokens which are meant to be distributed to Investors via token sale.",
  callback: createReplyInlineKeyboard(backToTokensLines)
}

const creatorsTokenObj = {
  bot: bot,
  title: "creatorstoken",
  mess: "The Creators token will be rewarded to all the early contributors. Only 10% of these tokens will be pre-distributed to Zion first ideators, on a 24 months vesting period. The rest of the tokens will be rewarded to early team members, community, and investors. Creators tokens will be rewarded on top of the agreed reward for each type of contribution to the platform.",
  callback: createReplyInlineKeyboard(backToTokensLines)
}

const teamTokenObj = {
  bot: bot,
  title: "teamtoken",
  mess: "Team Members will be rewarded with Team Tokens. The amount of reward will be calculated based on the current private or public sale price of the tokens. We will set an variable limit for withdrawals, which will be a lower amount in the early stages, and we will slowly adjust its value via governance votations.",
  callback: createReplyInlineKeyboard(backToTokensLines)
}

const communityTokenObj = {
  bot: bot,
  title: "communitytoken",
  mess: "The community token will be distributed to users as reward for completion of several tasks, like:\n•testing the application\n•using the application\n•streaming music from our application\nThis tokens will be used to calculate how the airdrop distribution will be executed once the token will be on public exchanges.",
  callback: createReplyInlineKeyboard(backToTokensLines)
}

const tokenSaleObj = {
  bot: bot,
  title: "tokensale",
  mess: "We will proceed with a token sale based on two major phases that we called Pre-Seed and Seed Phase.",
  callback: createReplyInlineKeyboard(backToMainMenu)
}

const governanceObj = {
  bot: bot,
  title: "governance",
  mess: "For the governance we are building our contracts on the audited standard from Open Zeppelin : Governor. It is a safe and agile framework for DAOs.",
  callback: createReplyInlineKeyboard(backToDaoMenu)
}

const webPageObj = {
  bot: bot,
  title: "webpage",
  mess: "Zion, zNFT landing page\n" + webpageURL,
  callback: createReplyInlineKeyboard(backToLinksLines)
}

const discordObj = {
  bot: bot,
  title: "discord",
  mess: "Join Zion's Discord server here:\n" + discordURL,
  callback: createReplyInlineKeyboard(backToLinksLines)
}

createAction({ ...menuObj })

createAction({ ...introObj })

createAction({ ...tokenObj })
createAction({ ...incomeObj })
createAction({ ...tokenomicsObj })
createAction({ ...incomeDistObj })
createAction({ ...supplyObj })

createAction({ ...daoObj })
createAction({ ...tokensObj })
createAction({ ...zionTokenObj })
createAction({ ...creatorsTokenObj })
createAction({ ...teamTokenObj })
createAction({ ...communityTokenObj })

createAction({ ...tokenSaleObj })

createAction({ ...linksObj })
createAction({ ...webPageObj })
createAction({ ...discordObj })

createAction({ ...governanceObj })

createAction({ ...commandsObj })

createAction({ ...getTaskObj })

createAction({ ...addTaskObj })

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))