import { Test } from "../../../../Models/Testing.js"
import { zionTelegraf } from "../../../../utils.js"

export let checkIfTestIsSuspended = async (
  ctx,
  test
) => {
  return new Promise(async (res, rej) => {
    /*write code here*/
    let testResult = await Test
      .where("_id")
      .equals(test)
    testResult[0].status.suspension.is_suspended
    /*returns */
    await zionTelegraf.testReply(ctx, "checkIfTestIsSuspended: " + testResult[0].status.suspension.is_suspended)
    if (testResult[0].status.suspension.is_suspended) {
      /*resolve that chat is suspended*/
      res(true)
    } else {
      /*rejects that chat is not suspended*/
      rej(false)
    }
  })
}