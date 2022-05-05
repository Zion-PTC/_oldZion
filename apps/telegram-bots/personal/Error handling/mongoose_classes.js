import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGODB_URI,
  {
    "auth": {
      "authSource": "admin"
    },
    "user": process.env.DB_USER,
    "pass": process.env.DB_PWD
  })
const db = mongoose.connection;
db.on("error", (error) => {
  console.log("connection error: ", error)
})
db.once("open", () => {
  console.log("Connected successfully")
})

export class PersonClass {
  constructor(obj){
    let {name, nickname} = obj
    this.name = name
    this.nickname = nickname
  }
  async saveDb(){
    return await Person.create(this)
  }
}

let personSchema = new mongoose.Schema({
  name: String,
  nickname: String
})
personSchema.loadClass(PersonClass)
export let Person = mongoose.model("Person", personSchema)

let giacomo = new Person({name:"Giacomo", nickname:"thaBrain"})
giacomo.
// giacomo.saveDb()
// error.cause = "another error"
console.log(giacomo);


