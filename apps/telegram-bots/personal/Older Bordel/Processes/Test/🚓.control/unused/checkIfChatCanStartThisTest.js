import { Test } from "../../../../Models/Testing.js"
import { getActiveTestsOfChat } from "../../📦.get/unused/getActiveTestsOfChat.js"
import { getChatId } from "../../📦.get/getChadId.js"

export let checkIfChatCanStartThisTest = async (ctx, processId, testObj) => {
  return new Promise(async (res, rej) => {
    let chatId = await getChatId(ctx)
    // await ctx.reply("chatId in Zion DB: " + chatId)
    await getActiveTestsOfChat(ctx, processId, chatId)
      .then(async (testRunningThisProcess) => {
        // await ctx.reply("testRunningThisProcess: "+testRunningThisProcess)
        rej({testRunningThisProcess, chatId})
      })
      .catch(async (processId) => {
        let { name, category, type, CRUD, fields } = testObj
        await ctx.reply("ProcessId: " + processId)
        await ctx.reply("Id della chat che ha chiamato test: " + ctx.update.message.chat.id)
        await ctx.reply("Oggetto del test che è stato chiamato: " + testObj)
        await Test.create({
          chat: chatId,
          process: processId,
        })
          .then(async (newlyCreatedTest) => {
            res({newlyCreatedTest, chatId})
          })
          .catch(async (e) => {
            await ctx.reply("C'è stato un problema durante a creazione del documento: " + e)
          })

      })
  })
}