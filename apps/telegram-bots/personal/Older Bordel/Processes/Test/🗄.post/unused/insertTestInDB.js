import { zionTelegraf } from "../../../../utils.js"

export let insertTestInDB = async (ctx) => {
  zionTelegraf.botReply(ctx)
  return new Promise((res, rej) => {
    res("insertTestInDB")
  })
}