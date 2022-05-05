import { zionTelegraf } from "../../../../../../../../../../utils.js"

export let checkIfUserEntersANewCommand = async (ctx, keyword) => {
  let { update: { message: { message_id , text } } } = ctx
  // await ctx.reply("checkIfUserEntersANewCommand: "+message_id)
  return new Promise(async(res, rej)=>{
    if(text===keyword) {
      /*Test connection*/
      // zionTelegraf.testReply(ctx, "checkIfUserEntersANewCommand: ucci")
      res({
        text,
        message_id
      })
    }
    else {
      /*Test connection*/
      // zionTelegraf.testReply(ctx, "checkIfUserEntersANewCommand: "+text)
      // await ctx.reply("checkIfUserEntersANewCommand: "+text)
      rej({
        text,
        message_id
      })
    }
    
  })
  // return "checkIfUserEntersANewCommand"
}