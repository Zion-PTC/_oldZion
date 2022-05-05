import { Test } from "../../../../Models/Testing.js"

export let getActiveTestsOfChat = async (ctx, processId, chatId) => {
  let testRunningThisProcess = await Test
    .where("process")                     /// Search within the Process models
    .equals(processId)                    /// value equals the processId argument
    .where("chat")                        /// Searh within the Chat models
    .equals(chatId)                       /// value equals the telegram chat id
    .where("status.is_active")
    .equals(true)
  // await ctx.reply("<testRunningThisProcess>: " + testRunningThisProcess)
  return new Promise(async (res, rej) => {
    if (testRunningThisProcess.length !== 0) { res(testRunningThisProcess) }
    else {
      rej(processId)
    }
  })
}