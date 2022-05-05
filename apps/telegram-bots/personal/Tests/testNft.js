import { ZionBot } from "../Classes/ZionBot.js"
import { Nft } from "../Models/Classes/Nft/Nft.js"
// import { ZionEmitter } from "../Classes/ZionEmitter.js"
// import { Znft } from "../Models/Classes/Nft/Znft/Znft.js"

let closeThisFucker = async (bot) => {
  return new Promise(async(res, rej)=>{
    /*write code here*/
    bot.command("/test", (ctx, next)=>{
      let thi = () =>{
        return "ciao"
      }
      console.log("it");
      res(thi())
    })
  })
}


export let testNft = async (bot) => {
  await new Promise(async(res, rej) => {
    // let chill = new Nft(
    //   "ciao",
    //   "che bel giorno",
    //   "nessuna immagine",
    //   "url manco"
    // )
    // chill.log()
    // let g = new ZionBot()
    // let keys = Object.keys(g)
    // console.log(keys);
    let result = await closeThisFucker (bot)
    console.log(result)
  })
  return 
}