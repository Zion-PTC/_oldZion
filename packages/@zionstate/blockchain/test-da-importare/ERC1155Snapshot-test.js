const { expect } = require("chai");
const { ethers } = require("hardhat");
const { zionUtils } = require("./utils/test-utils");

let ERC1155Snap, erc1155snap, deployer, holder1, holder2

beforeEach("Setup",async()=>{
  [deployer, holder1, holder2, _] = await ethers.getSigners();
  ERC1155Snap = await zionUtils.getContractFactory("ERC1155Snap")
})

describe("Deploy",()=>{
  it("Should deploy", async()=>{
    erc1155snap = await ERC1155Snap.deploy()
    const mint = await erc1155snap.mint(deployer.address, 0, 1000, "0x00");
    const gasUsed = await zionUtils.getGasUsed(mint)
    console.log("Gas Used:",gasUsed);
    let data = "0x00"
    let tx1 = await erc1155snap.safeTransferFrom(deployer.address, holder1.address, 0, 300, data)
    let tx2 = await erc1155snap.safeTransferFrom(deployer.address, holder2.address, 0, 200, data)
    console.log("gas tx1:", await zionUtils.getGasUsed(tx1));
    console.log("gas tx2:", await zionUtils.getGasUsed(tx2));
    let tx3 = await erc1155snap.connect(holder1).safeTransferFrom(holder1.address, holder2.address, 0, 30, data)
    console.log("gas tx3:", await zionUtils.getGasUsed(tx3));
    let snap2 = await erc1155snap.snapshot()
    console.log("gas snap2:", await zionUtils.getGasUsed(snap2));
    let balanceH1S1 = await erc1155snap.balanceOfAt(holder1.address, 0, 1)
    console.log("balance of holder1 at snap 1:", balanceH1S1);
    let balanceH1S2 = await erc1155snap.balanceOfAt(holder1.address, 0, 2)
    console.log("balance of holder1 at snap 2:", await balanceH1S2.toNumber());
  })
})