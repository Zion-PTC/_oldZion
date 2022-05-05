import { zionTelegraf } from "../../../utils.js"
import { setTestListening } from "../🗄.post/unused/setTestListening.js"
import { setTestActive } from "../🗄.post/unused/setTestActive.js"
import { setTestAbort } from "../🗄.post/unused/setTestAbort.js"
import { askUserIfAbortTest } from "../🤖.bot/unused/askUserIfAbortTest.js"
import { answerIfAbortFromUser } from "../💻.logic/unused/answerIfAbortFromUser.js"
import { confirmationAnswer } from "../💻.logic/confirmationAnswer.js"
import { checkIfTestIsListening } from "../🚓.control/checkIfTestIsListening.js"
import { checkIfTestIsSuspended } from "../🚓.control/unused/checkIfTestIsSuspended.js"
import { checkIfChatIsDoingThisTest } from "../🚓.control/unused/checkIfChatIsDoingThisTest.js"
import { checkIfMessageComesFromChatWhichCalledTest } from "../🚓.control/unused/checkIfMessageComesFromChatWhichCalledTest.js"
import { setTestSuspended } from "../🗄.post/unused/setTestSuspended.js"

export let confirmation = async (ctx, bot, testRunningThisProcess, chatId, testObj) => {
  let test = await checkIfChatIsDoingThisTest(ctx, testRunningThisProcess, chatId)
  await setTestListening(test[0], true)
  return new Promise((res, rej) => {
    bot.on("text", async (ctx, next) => {
      next()
      await checkIfTestIsListening(test[0]._id)
        .then(async ({ is_listening, idOfChatUsingTest }) => {
          // await ctx.reply(is_listening)
          await checkIfMessageComesFromChatWhichCalledTest(ctx, idOfChatUsingTest)
            .then(async (r) => {
              await checkIfUserEntersANewCommand(ctx, "/t")
                .then(async ({
                  command,
                  message_id
                }) => {
                  // console.log("here");
                  // console.log("testId: " + test[0]._id)
                  let messId = await askUserIfAbortTest(ctx, message_id)
                  await ctx.reply("confirmation: " + messId)
                  await setTestSuspended(test, true, messId)
                })
                .catch(async ({
                  text,
                  message_id
                }) => {
                  // console.log(test);
                  console.log("confirmation: there");
                  await checkIfTestIsSuspended(ctx, test)
                    .then(async (r) => {
                      /*await for asnwer from user*/
                      await answerIfAbortFromUser(ctx)
                        .then(async (r) => {
                          zionTelegraf.testReply(ctx, "said abort")
                          /*check if the message from user is the one with id+1 after the bot message*/
                          /*set test to is_listenint=false*/
                          await setTestListening(test[0], false)
                          /*set test to is_suspended=false*/
                          await setTestSuspended(test, false)
                          /*set test to is_active=false*/
                          await setTestActive(ctx, false, test)
                          /*set test to is_aborted=true*/
                          await setTestAbort(ctx, true, test)
                          /*reply saying that the Test has been aborted*/
                          await zionTelegraf.botReply(ctx, `Hai chiesto di abortire, e così feci`)
                        })
                        .catch(async (e) => {
                          zionTelegraf.testReply(ctx, "said continue: " + e)
                          /*set test to is_suspended false*/
                          await setTestSuspended(test, false)
                          /*reply saying that the Test will continue*/
                          await zionTelegraf.botReply(ctx, `Hai chiesto di cotinuare, e così feci`)
                        })
                    })
                    .catch(async (e) => {
                      console.log("confirmation: also there");
                      await confirmationAnswer(ctx)
                        .then(async (r) => {
                          /*resolve*/
                          zionTelegraf.botReply(ctx, `continue`)
                          /*set test to is_listening=false*/
                          await setTestListening(test[0], false)
                          /*set test to is_suspended=false*/
                          await setTestSuspended(test, false)
                          /*set test to is_active=true*/
                          await setTestActive(ctx, true, test)
                          /*set test to is_aborted=false*/
                          await setTestAbort(ctx, false, test)
                          /*resolve and continue with test*/
                          res(test)
                        })
                        .catch(async (e) => {
                          /*reject*/
                          zionTelegraf.testReply(ctx, `abort`)
                          /*set test to is_listening=false*/
                          await setTestListening(test[0], false)
                          /*set test to is_suspended=false*/
                          await setTestSuspended(test, false)
                          /*set test to is_active=false*/
                          await setTestActive(ctx, false, test)
                          /*set test to is_aborted=true*/
                          await setTestAbort(ctx, true, test)
                          /*reject and continue with test*/
                          rej(test)
                        })
                      // await setTestListening(test[0], false)
                    })
                })
            })
            .catch(async (e) => { /*The message coming in
            was not sent from the chat which called the test
            so ... :do nothin*/
            })
        })
        .catch(async (e) => { /*The test is not listening*/ })
    })
  })
}