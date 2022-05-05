import { Process } from "../../../../Models/Application.js"
import { zionTelegraf } from "../../../../utils.js"
import { getExistingApplications } from "../../📦.get/unused/getExistingApplications.js"

export let checkIfApplicationExists = async (ctx, application) => {
  return new Promise(async (res, rej) => {
    await getExistingApplications( application.name)
      .then(async (application) => {
        res(application._id)
      })
      .catch(async (e) => {
        rej(e)
      })
  })
}