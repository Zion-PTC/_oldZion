const { expect } = require("chai");
const { ethers } = require("hardhat");

let TokenShop, tokenShop, Membership, membership, Zion, zion, USDC, usdc, DAO, deployer, buyer1, buyer2

beforeEach("Env: shop deployed", async () => {
  [deployer, DAO, buyer1, buyer2, _] = await ethers.getSigners();
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
  await expect(membership.transferOwnership(DAO.address)).to.emit(membership, "OwnershipTransferred")
    .withArgs(deployer.address, DAO.address)
  await expect(zion.transferOwnership(DAO.address)).to.emit(zion, "OwnershipTransferred")
    .withArgs(deployer.address, DAO.address)
  /// dao mints membership tokens for buyer 1
  await membership.mint(DAO.address)
  expect(await membership.balanceOf(DAO.address, 0)).to.be.equal(1)
  /// mint USDC for buyers
  let USDCReceivers = [buyer1, buyer2]
  USDCReceivers.forEach(async (element) => {
    await usdc.mint(element.address, 100)
    expect(await usdc.balanceOf(element.address)).to.be.equal(100)
  });
  /// mint ZION for DAO
  await zion.connect(DAO).mint(DAO.address, 10000)
  expect(await zion.balanceOf(DAO.address)).to.be.equal(10000)
  /// deploy token shop
  tokenShop = await TokenShop.deploy(DAO.address, membership.address, usdc.address, zion.address, 1)

  /// send tokens to shop
  await zion.connect(DAO).transfer(tokenShop.address, 1000)
  expect(await zion.balanceOf(tokenShop.address)).to.be.equal(1000)
  let activateShop = await tokenShop.connect(DAO).setCrowdSaleState()
  expect(await activateShop.wait())
  expect(await tokenShop.connect(DAO).crowdSaleOpen()).to.be.true
  /// dao mints membership tokens for buyer 1
  await membership.connect(DAO).mint(buyer1.address)
  expect(await membership.balanceOf(buyer1.address, 0)).to.be.equal(1)
  /// buyer1 approves the token shop as spender, and purchases 100 zion tokens
  await usdc.connect(buyer1).approve(tokenShop.address, 100)
  await tokenShop.connect(buyer1).buyTokens(100)
  expect(await usdc.balanceOf(tokenShop.address)).to.be.equal(100)
})

describe("Withdrawal processes", () => {
  it("Should not let user1 withdraw the capital from the contract", async () => {
    await expect(tokenShop.connect(buyer1).withdrawRaisedCapital()).to.be.revertedWith("Ownable: caller is not the owner")
  }),
    it("Should not let the deployer withdraw the capital from the contract", async () => {
      await expect(tokenShop.connect(deployer).withdrawRaisedCapital()).to.be.revertedWith("Ownable: caller is not the owner")
    }),
    it("Should not let buyer1 withdraw tokens on sale from the contract", async () => {
      await expect(tokenShop.connect(buyer1).withdrawTokensOnSale(100)).to.be.revertedWith("Ownable: caller is not the owner")
    }),
    it("Should not let deployer withdraw tokens on sale from the contract", async () => {
      await expect(tokenShop.connect(deployer).withdrawTokensOnSale(100)).to.be.revertedWith("Ownable: caller is not the owner")
    }),
    it("Should let the DAO withdraw all the capital from the contract", async () => {
      await tokenShop.connect(DAO).withdrawRaisedCapital()
      expect(await usdc.balanceOf(DAO.address)).to.be.equal(100)
    }),
    it("Should let the DAO withdraw all the tokens on sale from the contract", async () => {
      expect(await zion.balanceOf(DAO.address)).to.be.equal(9000)
      await tokenShop.connect(DAO).withdrawTokensOnSale(900)
      expect(await zion.balanceOf(DAO.address)).to.be.equal(9900)
      expect(await zion.balanceOf(buyer1.address)).to.be.equal(100)
      expect(await zion.totalSupply()).to.be.equal(10000)
    })
})