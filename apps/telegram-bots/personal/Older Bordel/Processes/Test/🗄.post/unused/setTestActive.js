import { Test } from "../../../../Models/Testing.js"

export let setTestActive = async (ctx, is_active, test) => {
  return new Promise(async(res, rej)=>{
    let result = await Test
      .where("_id")
      .equals(test[0]._id)
    // await zionTelegraf.testReply(ctx, "setTestActive: " + result)
    result[0].status.is_active = is_active
    let save = await result[0].save()
    res(save)
  })
}