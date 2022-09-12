const { expect } = require("chai");
const { ethers } = require("hardhat");

let TokenShop, tokenShop, Membership, membership, Zion, zion, USDC, usdc, DAO, deployer, buyer1, buyer2

beforeEach("Env without TokenShop",async() => {
  [DAO, deployer, buyer1, buyer2, _] = await ethers.getSigners();
  /// get contracts
  TokenShop = await ethers.getContractFactory("TokenShop");
  Membership = await ethers.getContractFactory("Membership")
  Zion = await ethers.getContractFactory("Zion")
  USDC = await ethers.getContractFactory("USDC")
  /// deploy
  membership = await Membership.deploy()
  zion = await Zion.deploy()
  usdc = await USDC.deploy()
  /// transfer ownerships
  await membership.transferOwnership(DAO.address)
  await zion.transferOwnership(DAO.address)
  expect(await membership.owner()).to.be.equal(DAO.address)
  expect(await zion.owner()).to.be.equal(DAO.address)
  /// mint USDC for buyers
  let USDCReceivers = [buyer1, buyer2]
  USDCReceivers.forEach(async (element) => {
    await usdc.mint(element.address, 100)
    expect(await usdc.balanceOf(element.address)).to.be.equal(100)
  });
  await zion.connect(DAO).mint(DAO.address, 10000)
  expect(await zion.balanceOf(DAO.address)).to.be.equal(10000)
})

describe("Deployment", () => {
  it("Should deploy the token shop with owner the DAO, membership token, token for payment, token to sell and price", async () => {
    tokenShop = await TokenShop.deploy(DAO.address, membership.address, usdc.address, zion.address, 1)
    expect(await tokenShop.owner()).to.be.equal(DAO.address)
    expect(await tokenShop.membership()).to.be.equal(membership.address)
    expect(await tokenShop.tokenUsedForPayement()).to.be.equal(usdc.address)
    expect(await tokenShop.tokenContract()).to.be.equal(zion.address)
    expect(await tokenShop.price()).to.be.equal(1)
    expect(await tokenShop.crowdSaleOpen()).to.be.false
  })
})

