import { Test } from "../../../Models/Testing.js"

export let edit = {
  test: {
    is_confirmed: async (value, testToEdit) => {
      return new Promise(async (res, rej) => {
        let dbDocuments = await Test
          .where("_id")
          .equals(testToEdit._id)
          let [match] = dbDocuments
        match.status.is_confirmed = value
        await match.save()
          .then(async (saveDocument) => {
            res(saveDocument)
          })
          .catch(async (e) => {
            "There was an error editing is_confirmed"
              + "in Test"
          })
      })
    },
    is_aborted: async (value, testToEdit) => {
      return new Promise(async (res, rej) => {
        let dbDocuments = await Test
          .where("_id")
          .equals(testToEdit._id)
        let [match] = dbDocuments
        match.status.is_aborted = value
        await match.save()
          .then(async (editedDocument) => {
            res(editedDocument)
          })
          .catch(async (e) => {
            rej(
              "There was an error editing is_aborted"
              + "in Test"
            )
          })
      })
    },
    is_active: async (value, testToEdit) => {
      return new Promise(async (res, rej) => {
        let dbDocuments = await Test
          .where("_id")
          .equals(testToEdit._id)
        let [match] = dbDocuments
        match.status.is_active = value
        await match.save()
          .then(async (editedDocument) => {
            res(editedDocument)
          })
          .catch(async (e) => {
            rej(
              "There was an error editing is_aborted"
              + "in Test"
            )
          })
      })
    },
    is_suspended: async (testToEdit, is_suspended, mess) => {
      return new Promise(async (res, rej) => {
        let [match] = dbDocuments = await Test
          .where("_id")
          .equals(testToEdit[0]._id)
        match.status.suspension.is_suspended = is_suspended
        match.status.suspension.suspension_mess_id = mess
        await match.save()
          .then(async (editedDocument) => {
            res(editedDocument)
          })
          .catch(async (e) => {
            rej(
              "There was an error editing is_aborted"
              + "in Test"
            )
          })
      })
    },
    is_listening: async (value, testToEdit, field) => {
      return new Promise(async (res, rej) => {
        let dbDocuments = await Test
          .where("_id")
          .equals(testToEdit._id)
        let [match] = dbDocuments
        match.status.listening.is_listening = value
        match.status.listening.field = field
        await match.save()
          .then(async (editedDocument) => {
            res(editedDocument)
          })
          .catch(async (e) => {
            rej(
              "There was an error editing is_listening"
              + "in Test" + e
            )
          })
      })
    },
    execution: {
      field: async (testToEdit_id, field) => {
        return new Promise(async (res, rej) => {
          await Test
            .where("_id")
            .equals(testToEdit_id)
            .then(async ([match]) => {
              match.execution.field_being_executed = field
              match.save()
                .then(async (editedDocument) => {
                  res(editedDocument)
                })
                .catch(async (error) => {
                  rej(
                    "There was an error editing is_listening"
                    + "in Test" + error
                  )
                })
            })
            .catch(async (error) => {
              rej(
                "There was an error matching is_listening"
                + "in Test" + error
              )
            })
        })
      }
    }
  }
}