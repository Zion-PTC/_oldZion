const { Telegraf } = require("telegraf")
require("dotenv").config()
const zionTelegraf = require("./utils");

const bot = new Telegraf(process.env.TOKEN)

let createSingleLineCallbackButtons = zionTelegraf.createSingleLineCallbackButtons
let createReplyMarkup = zionTelegraf.createReplyMarkup
let createCommandList = zionTelegraf.createCommandList
let createSendMessage = zionTelegraf.createSendMessage

let createAction = zionTelegraf.createAction



let WELCOME_MESS = (ctx) => `Welcome ${ctx.message.from.first_name}. I am the Zion bot!\nI can help you discovering our vision and our protocol.\nClick on one of the menus hereunder.`
let NEW_MEMBER_WELCOME_MESSAGE = (newMember) => `Hi ${newMember.first_name}!! Welcome, I am the Zion Bot, you can chat with me if you want to have more infos about our vision,project,protocol and platforms....\n\nps: don't get used to kindness, I'm a rough bot!!🤖🌋⚡️`
const DAOVOTE = "\nThis parameters can be changed via a DAO votation."

const webpageURL = `https://znft.tech`
const discordURL = `https://discord.gg/QrVfMgGPeH`
const mattermostSignUp = `http://board.doorgefreakt.cc:8065/signup_user_complete/?id=9doxdr4yntfoijryyc6eesyc7o`

let arrayOfWords1 = {
  listOfWords: ["nft", "NFT", "Nft"],
  messages: [
    {sec:0, text: "wow"},
    {sec:1, text: "wowowo"},
    {sec:2, text: "it seems you know what NFTs are!!"},
    {sec:5, text: "NFTS are not art!!"}
  ],
  type: "or",
  limit: 0
}

let arrayOfWords2 = {
  listOfWords: [["bot","robot", "Bot"], ["bastard", "bastardo", "infame", "stronzo"]],
  messages: [
    {sec:0, text: "ehy"},
    {sec:1, text: "you"},
    {sec:2, text: "I ain't no bastard, I am just a self-breed bot"},
    {sec:5, text: "don't make me nervous"}
  ],
  type: "and",
  limit: 0
}

let wordCountLimit = {
  mess:"ehy, bwoy, chiiilll",
  limit: 30
}

bot.on("text", (ctx, next) => {
  zionTelegraf.createBotResponseForArrayOfWords(ctx,arrayOfWords1)
  zionTelegraf.createBotResponseForArrayOfWords(ctx,arrayOfWords2)
  zionTelegraf.wordLimit(ctx, wordCountLimit)
  next()
})

bot.on('new_chat_members', (ctx) => {

  let newMembers = ctx.message.new_chat_members
  newMembers.forEach(newMember => {
    ctx.reply(NEW_MEMBER_WELCOME_MESSAGE(newMember), {
      reply_markup: {
        inline_keyboard: [[{
          text:"Chat with me, bitch",url: "https://t.me/zion_dapp_bot",
        }]]
      }
    })
  })
  console.log(ctx.message.new_chat_members)
})

console.log("bot is running");

bot.start(ctx => createSendMessage(bot, ctx, WELCOME_MESS(ctx), createSingleLineCallbackButtons(mainMenuLines)))
bot.command("zion_tokenomics", ctx => createSendMessage(bot, ctx, WELCOME_MESS, createSingleLineCallbackButtons(tokenMenuLines)))

const COMMAND_LIST = [
  "/start",
  "/zion_tokenomics"
]

const backToCommandsLines = [
  [["« Back to Main Menu", "menu"]]
]

const commands = createCommandList(COMMAND_LIST)

const mainMenuLines = [
  [[`Tokenomics`, `tokenomics`]],
  [["DAO", "dao"]],
  [["Token Sale", "tokensale"]],
  [[`Links`, `links`]],
  [[`Commands`, `commands`]]
]

const menuObj = {
  bot: bot,
  title: "menu",
  mess: WELCOME_MESS,
  callback: createReplyMarkup(createSingleLineCallbackButtons(mainMenuLines))
}

const tokenMenuLines = [
  [["Supply", "supply"]],
  [["Income Sources", "income"]],
  [["Token Distribution", "token_dist"]],
  [["Income Distribution", "income_dist"]],
  [[`« Back to Main Menu`, `menu`]]
]

const tokenObj = {
  bot: bot,
  title: "tokenomics",
  mess: "\nHere you can grab some information about Zion token.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(tokenMenuLines))
}

const linksMenuLines = [
  [[`Web Page`, `webpage`]],
  [[`Discord Server`, `discord`]],
  [[`« Back to Main Menu`, `menu`]]
]

const linksObj = {
  bot: bot,
  title: "links",
  mess: "\nHere you can find some useful links",
  callback: createReplyMarkup(createSingleLineCallbackButtons(linksMenuLines))
}

const commandsObj = {
  bot: bot,
  title: "commands",
  mess: "\Here you can find the list of avalaible commands\n(type the command or simply click on it):" + commands,
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToCommandsLines))
}

const backToTokenLines = [
  [["« Back to Token Menu", "tokenomics"], ["« Back to Main Menu", "menu"]]
]

const incomeObj = {
  bot: bot,
  title: "income",
  mess: "Platform Fees : 2% on each sale.\nPlatform Fees will vary based on market volume: the higher the volume, the lower the fees. The initial value and the type of curve that it will follow will be decided with the community, when we reached a fair amount of investors and users.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToTokenLines))
}

const tokenomicsObj = {
  bot: bot,
  title: "token_dist",
  mess: "The distribution of tokens is initially set as following:\n10% Creators,\n25% Team,\n25% Dao,\n30% Investors,\n10% Stake." + DAOVOTE,
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToTokenLines))
}

const incomeDistObj = {
  bot: bot,
  title: "income_dist",
  mess: "25% Creators,\n25% Team,\n25% Dao,\n25% Stake" + DAOVOTE,
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToTokenLines))
}

const supplyObj = {
  bot: bot,
  title: "supply",
  mess: "The supply is set to be 1B tokens, and it will be inflationary. Inflation will be used to reward digital and physical nodes. The inflation rate is not yet been established." + DAOVOTE,
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToTokenLines))
}

const daoMenuLines = [
  [["Tokens", "tokens"]],
  [["Governance", "governance"]],
  [[`« Back to Main Menu`, `menu`]]
]

const daoObj = {
  bot: bot,
  title: "dao",
  mess: "Here you can find informations on how we are going to structure our DAO.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(daoMenuLines))
}

const tokensMenuLines = [
  [["Zion Token", "ziontoken"]],
  [["Creators Token", "creatorstoken"]],
  [["Team Token", "teamtoken"]],
  [["Community Token", "communitytoken"]],
  [[`« Back to DAO Menu`, `dao`], [`« Back to Main Menu`, `menu`]]
]

const tokensObj = {
  bot: bot,
  title: "tokens",
  mess: "Here you can find infos about how a zNFT actually works. Zion will be the first zNFT profile created and will be used for testing. A profile zNFT is an ERC1155 standard token, which wraps an ERC721 which actually holds the informations about the account. Each zNFT Profile will be able to generate some standard type of tokens. For instance this tokens will represent the four core roles:\nCreators\nInvestors\nTeam\nCommunity.\nEach one of these actors will have a wallet which will be governed via votations. Each of these 'departments' will act as an autonomous organism, let's say like a DAO within the DAO.\nThese tokens are going to be fungible tokens within an ERC1155 contract, the contract of the profile, and they will be used to weight decisional power over the 'departments' wallets.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(tokensMenuLines))
}

const backToTokensLines = [
  [[`« Back to DAO Tokens Menu`, `tokens`], [`« Back to Main Menu`, `menu`]]
]

const zionTokenObj = {
  bot: bot,
  title: "ziontoken",
  mess: "The Zion ERC1155 Fungible token will represent a SAFT, a Simple Agreement for Future Tokens. Each ERC1155 Zion Token will be exchangeable for ERC20 standard Zion tokens, which will be avalaible later on, once we will have found a suitable launchpad for our community.\nZion tokens, the ones which are going to be sold to first investors, will have a fixed max supply equal to the amount of tokens which are meant to be distributed to Investors via token sale.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToTokensLines))
}

const creatorsTokenObj = {
  bot: bot,
  title: "creatorstoken",
  mess: "The Creators token will be rewarded to all the early contributors. Only 10% of these tokens will be pre-distributed to Zion first ideators, on a 24 months vesting period. The rest of the tokens will be rewarded to early team members, community, and investors. Creators tokens will be rewarded on top of the agreed reward for each type of contribution to the platform.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToTokensLines))
}

const teamTokenObj = {
  bot: bot,
  title: "teamtoken",
  mess: "Team Members will be rewarded with Team Tokens. The amount of reward will be calculated based on the current private or public sale price of the tokens. We will set an variable limit for withdrawals, which will be a lower amount in the early stages, and we will slowly adjust its value via governance votations.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToTokensLines))
}

const communityTokenObj = {
  bot: bot,
  title: "communitytoken",
  mess: "The community token will be distributed to users as reward for completion of several tasks, like:\n•testing the application\n•using the application\n•streaming music from our application\nThis tokens will be used to calculate how the airdrop distribution will be executed once the token will be on public exchanges.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToTokensLines))
}

const backToMainMenu = [
  [["« Back To Main Menu", "menu"]]
]

const tokenSaleObj = {
  bot: bot,
  title: "tokensale",
  mess: "We will proceed with a token sale based on two major phases that we called Pre-Seed and Seed Phase.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToMainMenu))
}

const backToDaoMenu = [
  [[`« Back to DAO Menu`, `dao`], [`« Back to Main Menu`, `menu`]]
]

const governanceObj = {
  bot: bot,
  title: "governance",
  mess: "For the governance we are building our contracts on the audited standard from Open Zeppelin : Governor. It is a safe and agile framework for DAOs.",
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToDaoMenu))
}

const backToLinksLines = [
  [["« Back To Links Menu", "links"], ["« Back to Main Menu", "menu"]]
]

const webPageObj = {
  bot: bot,
  title: "webpage",
  mess: "Zion, zNFT landing page\n" + webpageURL,
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToLinksLines))
}

const discordObj = {
  bot: bot,
  title: "discord",
  mess: "Join Zion's Discord server here:\n" + discordURL,
  callback: createReplyMarkup(createSingleLineCallbackButtons(backToLinksLines))
}

createAction({ ...menuObj })

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

bot.launch();