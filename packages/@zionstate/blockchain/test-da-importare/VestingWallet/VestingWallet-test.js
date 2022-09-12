const { expect } = require("chai");
const { ethers } = require("hardhat");
const { zionUtils } = require("../utils/test-utils");

let ZionVestingWallet,
  zionVestingWallet,
  blockTimestamp,
  deployer,
  beneficiary,
  usdc,
  _1stTimestamp,
  _2ndTimestamp,
  _3rdTimestamp,
  _1stVestAmount,
  _2ndVestAmount,
  _3rdVestAmount


beforeEach("Setup", async () => {
  [deployer, beneficiary, _] = await ethers.getSigners();
  blockTimestamp = await zionUtils.getBlockTimestamp()
  usdc = await zionUtils.mineUSDC()
  ZionVestingWallet = await zionUtils.getContractFactory("ZionVestingWallet")
  zionVestingWallet = await ZionVestingWallet.deploy(
    beneficiary.address,
    blockTimestamp,
    20
  )
  let amountOfUSDinVestingWallet = 10000
  let start = await zionVestingWallet.start()
  await usdc.mint(zionVestingWallet.address, amountOfUSDinVestingWallet)
})

describe("Deployment", () => {
  it("Vesting wallet should have a balance of 10000", async () => {
    _1stTimestamp = await zionUtils.getBlockTimestamp()
    let balance = await usdc.balanceOf(zionVestingWallet.address)
    expect(balance).to.be.equal(10000)
    _1stVestAmount = (await zionVestingWallet.vestedAmount(usdc.address, _1stTimestamp)).toNumber()
    console.log("1blocktimestamp", _1stTimestamp);
    console.log("1st vested amount:", _1stVestAmount);
    await zionUtils.createTransactions(10)
    _2ndTimestamp = await zionUtils.getBlockTimestamp()
    console.log("2blocktimestamp", _2ndTimestamp);
    _2ndVestAmount = (await zionVestingWallet.vestedAmount(usdc.address, _2ndTimestamp)).toNumber()
    console.log("2nd vested amount:", _2ndVestAmount);

  })
})