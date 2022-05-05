export let checkIfMessageComesFromChatWhichCalledTest = async (ctx, idOfChatUsingTest) => {
  if(ctx.update.message.chat.id===idOfChatUsingTest) {
    // await ctx.reply("checkIfMessageComesFromChatWhichCalledTest: "+idOfChatUsingTest)
    return {
      idOfChatFromWhichTheMessComes: ctx.update.message.chat.id,
      idOfChatUsingTest
    }
  } else {
    throw {
      idOfChatFromWhichTheMessComes: ctx.update.message.chat.id,
      idOfChatUsingTest
    }
  }
}