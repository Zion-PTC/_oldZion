import { zionTelegraf } from "../../../utils.js"

export let replyTestStarted = async (
  ctx, startedTest
) => {
  console.log("replyTestStarted");
  return new Promise(async (res, rej) => {
    res(await zionTelegraf.botReply(
      ctx,
      `Ok, cominciamo il test!\n${startedTest}`
    ))
  })
}