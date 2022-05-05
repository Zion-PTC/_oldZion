export let quitProcess = async (ctx) => {
  // let editTestInDB = async () => {
  //   return "editTestInDB"
  // }
  // let replyOnAbortedTest = async (ctx, abortedTest) => {
  //   return "replyOnAbortedTest"
  // }
  // let abortedTest = await editTestInDB()
  // return await replyOnAbortedTest(ctx, abortedTest)
  return new Promise((res, rej) => {
    res("quitProcess")
  })
}