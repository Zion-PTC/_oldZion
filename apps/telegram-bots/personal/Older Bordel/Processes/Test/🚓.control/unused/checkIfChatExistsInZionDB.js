import { Chat } from "../../../../Models/Profiles.js"

export let checkIfChatExistsInZionDB = async (telegramChat_id) => {
  return new Promise(async (res, rej) => {
    await Chat.where("chat_info").equals(telegramChat_id) ///DB CHAT QUERY
      .then(async (chatSearchResult) => {
        if (chatSearchResult.length === 0) {
          await Chat.create({ /// DB CHAT CREATE
            chat_info: telegramChat_id
          })
            .then(async (chatInZionDB) => { res(chatInZionDB) })
            .catch(async (e) => { "There was and error creating the record in the database: " + e })
        }
        else { res(chatSearchResult[0]) }
      })
      .catch(async (e) => { "C'è stato un errore durante la ricerca nel DC: " + e })
  })
}