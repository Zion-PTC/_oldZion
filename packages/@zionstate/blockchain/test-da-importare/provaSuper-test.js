const { expect } = require("chai");
const { ethers } = require("hardhat");

let ProvaSuper, provaSuper

beforeEach("Setup",async()=>{
  ProvaSuper = await ethers.getContractFactory("ProvaSuper")
})

describe("Prova Super", ()=>{
  it("Should add",async()=>{
    provaSuper = await ProvaSuper.deploy()
    await provaSuper.updateNumber(2)
    let number = await provaSuper.number()
    console.log(await number.toNumber());
  })
})