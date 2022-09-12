const { expect } = require("chai");
const { ethers } = require("hardhat");
const { zionUtils } = require("./utils/test-utils");

let ProvaMaster, provaMaster, prod1, prod2, prod3, buyer1, buyer2, TokenShop

beforeEach("Setup",async()=>{
  [prod1, prod2, prod3, buyer1, buyer2, _] = await ethers.getSigners();
  ProvaMaster = await zionUtils.getContractFactory("ProvaMaster")
})

describe("Deploy",()=>{
  it("Should work", async()=>{
    provaMaster = await ProvaMaster.deploy()
    let balanceOfShares = (await provaMaster.balanceOf(prod1.address,1)).toNumber()
    console.log(balanceOfShares);
    await provaMaster.safeTransferFrom(prod1.address, prod2.address, 1, 200, "0x00")
    // // let balanceAtSnap1 = (await provaMaster.balanceOfAt(prod1.address, 1)).toNumber()
    // // console.log("snap1",balanceAtSnap1);
    // await provaMaster.safeSharesTransferFrom(prod1.address, prod3.address, 200)
    // // let balanceAtSnap2 = (await provaMaster.balanceOfAt(prod1.address, 2)).toNumber()
    // // console.log("snap2",balanceAtSnap2);
    
  })
})