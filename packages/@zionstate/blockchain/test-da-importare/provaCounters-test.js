const { expect } = require("chai");
const { ethers } = require("hardhat");

let ProvaCounters, provaCounters

beforeEach("Setup",async()=>{
  ProvaCounters = await ethers.getContractFactory("provaCounters")
})

describe("Prova Counters", ()=>{
  it("Should add",async()=>{
    provaCounters = await ProvaCounters.deploy()
    let supply = await provaCounters.supply()
    console.log("supply", supply);
    await provaCounters.increment()
    let supply2 = await provaCounters.supply()
    console.log("supply", supply2);

  })
})