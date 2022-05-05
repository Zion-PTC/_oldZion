import { Process } from "../../../Models/Application.js"
import { checkIfApplicationExists } from "../🚓.control/unused/checkIfApplicationExists.js"

export let createProcessTestDocumentForThisCall = async (ctx, testObj) => {
  return new Promise(async (res, rej) => {
    await checkIfApplicationExists(ctx, testObj)
      .then(async (processId) => {
        res(processId)
      })
      .catch(async (e) => {
        await ctx.reply("Error in checkIfProcessExists: " + e)
        await Process
          .create(testObj
            .then(async (processId) => { res(processId) }))
              .catch(async(e)=>{
                rej(`There was an error ${e}`)
              })
      })
  })
}