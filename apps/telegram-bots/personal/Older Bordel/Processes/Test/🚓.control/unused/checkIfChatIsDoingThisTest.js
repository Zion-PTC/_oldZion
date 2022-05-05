import { Test } from "../../../../Models/Testing.js";

/// Se la chat ha un test attivo la funzione ritorna il test
export let checkIfChatIsDoingThisTest = async (ctx, testRunningThisProcess, chatId) => {
  // let chat = await Chat.where("_id").equals(chatId)
  let test = await Test
    .where("chat")
    .equals(chatId)
    .where("status.is_active")
    .equals(true)
  if(test.length!==0){return test}
  // else {throw false}
}