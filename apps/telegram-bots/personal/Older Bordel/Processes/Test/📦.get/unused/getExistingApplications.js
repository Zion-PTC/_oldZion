import { Application } from "../../../../Models/Application.js"

export let getExistingApplications = async (applicationName) => {
  return new Promise(async (res, rej) => {
    await Application
      .where("name")
      .equals(applicationName) /// DB PROCESS QUERY
      .then(async (queryResults) => { res(queryResults[0]) })
      .catch(async (e) => { rej("Application doesn't exist!!") 
    })
  })
}