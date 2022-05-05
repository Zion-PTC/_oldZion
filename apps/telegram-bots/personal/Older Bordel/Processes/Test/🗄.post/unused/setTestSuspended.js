import { Test } from "../../../../Models/Testing.js"

export let setTestSuspended = async (test, is_suspended, mess) => {
  return new Promise(async (res, rej) => {
    let result = await Test
      .where("_id")
      .equals(test[0]._id)
    result[0].status.suspension.is_suspended = is_suspended
    result[0].status.suspension.suspension_mess_id = mess
    let saved = await result[0].save()
    res(saved)
    // console.log(saved);
  })
}