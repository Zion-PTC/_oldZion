export let test1 = async (bot) => {

  let chatsUsingTest = [
    // 1409312095
  ]
  let chatsInConfirmation = []

  let checkChatsUsingTest = async (ctx, array) => {
    return await new Promise((res, rej) => {
      if (array.includes(ctx.update.message.chat.id)) { res(true) }
      else { rej(false) }
    })
  }

  let addChatToArray = async (ctx, array) => {
    return array.push(ctx.update.message.chat.id)
  }

  let checkTextFor1KeyWord = async (word, ctx) => {
    return new Promise((res, rej) => {
      if (ctx.message.text === word) { res(true) }
      else { rej(false) }
    })
  }

  let checkTextFor2KeyWord = async (word1, word2, ctx) => {
    return new Promise((res, rej) => {
      if (ctx.message.text === word1) { res(true) }
      else if (ctx.message.text === word2) { rej(true) }
      else { ctx.reply("santafe") }
    })
  }

  let confirmationFromUser = async (ctx) => {
    await addChatToArray(ctx, chatsInConfirmation)
    await ctx.reply("This chats are in confirmation " + chatsInConfirmation)
    await ctx.reply("Rispondi si se vuoi interrompere, no se vuoi continuare")
    return new Promise(async (res, rej) => {
      bot.on("text", async (ctx, next) => {
        await checkChatsUsingTest(ctx, chatsInConfirmation)
          .then(async () => {
            await checkTextFor2KeyWord("si", "no", ctx)
              .then(() => {
                chatsInConfirmation.splice(chatsInConfirmation.indexOf(ctx.update.message.chat.id), 1)
                res(true)
              })
              .catch(() => {
                chatsInConfirmation.splice(chatsInConfirmation.indexOf(ctx.update.message.chat.id), 1)
                rej(false)
              })
          })
          .catch(() => { })
        next()
      })
      // rej()
    })
  }

  let counter = 0
  bot.command("test", async (ctx, next) => {
    counter++
    checkChatsUsingTest(ctx, chatsUsingTest)
      .then(async e => {
        ctx.reply("Vuoi smettere?")
        // chatsUsingTest.splice(chatsUsingTest.indexOf(ctx.update.message.chat.id), 1)
        await ctx.reply(chatsUsingTest)
        await confirmationFromUser(ctx)
          .then(() => {
            ctx.reply("you said yes")
          })
          .catch(() => {
            ctx.reply("you said no")
          })
        // .catch(()=>addChatToArray(ctx, chatsUsingTest))
      })
      .catch(async e => {
        await addChatToArray(ctx, chatsUsingTest)
        bot.on("text", async (ctx, next) => {
          // await ctx.reply("chatusingtest in test on",chatsUsingTest)
          await checkChatsUsingTest(ctx, chatsInConfirmation)
            .then(() => { })
            .catch(async() => {
              await checkChatsUsingTest(ctx, chatsUsingTest)
                .then(async () => {
                  await checkTextFor1KeyWord("si", ctx)
                    .then(async () => {
                      chatsUsingTest.splice(chatsUsingTest.indexOf(ctx.update.message.chat.id), 1)
                      ctx.reply(chatsUsingTest)
                    })
                    .catch(async () => {
                      await ctx.reply(counter)
                      await ctx.reply(chatsUsingTest)
                    })
                })
                .catch(() => { })
            })
          next()
        })
      })
    next()
    return
  })

}