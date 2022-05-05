export let askUserIfAbortTest = async (ctx) => {
  let abortAskMess = await ctx.reply("Hai chiamato un altro comando, vuoi terminare il test in corso?")
  return abortAskMess.message_id
}