const { expect } = require("chai");
const { ethers } = require("hardhat");
const { zionUtils } = require("./utils/test-utils");

let ERC20Snap, erc20snap, deployer, holder1, holder2, holder3

beforeEach("Setup",async()=>{
  [deployer, holder1, holder2, holder3, _] = await ethers.getSigners();
  ERC20Snap = await zionUtils.getContractFactory("ERC20Snap")
})

describe("Deploy",()=>{
  it("Should deploy", async()=>{
    erc20snap = await ERC20Snap.deploy()
    const estimation = await erc20snap.estimateGas.mint(deployer.address, 1000);
    console.log("estimategasprice", await estimation.toNumber());
    let mintTokens = await erc20snap.mint(deployer.address, 1000)
    let txCost = await zionUtils.getGasUsed(mintTokens)
    console.log("transactioncost", txCost);
    await erc20snap.transfer(holder1.address, 200);
    await erc20snap.transfer(holder2.address, 300);
    let balanceOfDatSnap1 = await erc20snap.balanceOfAt(deployer.address, 1)
    console.log("balance of deployer at snap 1",await balanceOfDatSnap1.toNumber());
    let balanceOfh1atSnap1 = await erc20snap.balanceOfAt(holder1.address, 1)
    console.log("balance of holder 1 at snap 1",await balanceOfh1atSnap1.toNumber());
    await erc20snap.connect(holder1).transfer(holder2.address, 50);
    await erc20snap.mint(deployer.address, 1000)
    let balanceOfDatSnap2 = await erc20snap.balanceOfAt(deployer.address, 2)
    console.log("balance of deployer at snap 1",await balanceOfDatSnap2.toNumber());
    let balanceOfh1atSnap2 = await erc20snap.balanceOfAt(holder1.address, 2)
    console.log("balance of holder 1 at snap 1",await balanceOfh1atSnap2.toNumber());
  })
})