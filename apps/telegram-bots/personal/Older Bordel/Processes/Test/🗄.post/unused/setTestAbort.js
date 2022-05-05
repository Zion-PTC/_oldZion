import { Test } from "../../../../Models/Testing.js"

export let setTestAbort = async (ctx, is_aborted, test) => {
  return new Promise(async(res, rej)=>{
    let result = await Test
      .where("_id")
      .equals(test[0]._id)
    result[0].status.is_aborted = is_aborted
    let save = await result[0].save()
    res(save)
  })
}