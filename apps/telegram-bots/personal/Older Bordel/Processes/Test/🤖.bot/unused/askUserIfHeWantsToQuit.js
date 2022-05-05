export let askUserIfHeWantsToQuit = async (ctx) => {
  return new Promise((res, rej) => {
    res("askUserIfHeWantsToQuit")
    // return await ctx.reply("Vuoi interrompere il processo?")
  })
}