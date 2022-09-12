const { expect } = require("chai");
const { ethers } = require("hardhat");

let TokenShop,
  tokenShop,
  Membership,
  membership,
  Zion,
  zion,
  USDC,
  usdc,
  DAO,
  deployer,
  buyer1,
  buyer2;

beforeEach("Env without TokenShop", async () => {
  [deployer, DAO, buyer1, buyer2, _] = await ethers.getSigners();
  /// get contracts
  TokenShop = await ethers.getContractFactory("TokenShop");
  Membership = await ethers.getContractFactory("Membership");
  Zion = await ethers.getContractFactory("Zion");
  USDC = await ethers.getContractFactory("USDC");
  /// deploy
  membership = await Membership.deploy();
  zion = await Zion.deploy();
  usdc = await USDC.deploy();
  /// transfer ownerships
  await expect(membership.transferOwnership(DAO.address))
    .to.emit(membership, "OwnershipTransferred")
    .withArgs(deployer.address, DAO.address);
  await expect(zion.transferOwnership(DAO.address))
    .to.emit(zion, "OwnershipTransferred")
    .withArgs(deployer.address, DAO.address);
  /// dao mints membership tokens for buyer 1
  await membership.mint(DAO.address);
  expect(await membership.balanceOf(DAO.address, 0)).to.be.equal(1);
  /// mint USDC for buyers
  let USDCReceivers = [buyer1, buyer2];
  USDCReceivers.forEach(async (element) => {
    await usdc.mint(element.address, 100);
    expect(await usdc.balanceOf(element.address)).to.be.equal(100);
  });
  /// mint ZION for DAO
  await zion.connect(DAO).mint(DAO.address, 10000);
  expect(await zion.balanceOf(DAO.address)).to.be.equal(10000);
  /// deploy token shop
  tokenShop = await TokenShop.deploy(
    DAO.address,
    membership.address,
    usdc.address,
    zion.address,
    1
  );
});

describe("Initialization", () => {
  it("Should revert as it is not possible to buy tokens when the shop is closed", async () => {
    await tokenShop.deployed();
    expect(await tokenShop.owner()).to.be.equal(DAO.address);
    await expect(tokenShop.buyTokens(100)).to.be.reverted;
  }),
    it("The shop should not be set to open, as it has not yet received tokens", async () => {
      let activateShop = await tokenShop.connect(DAO).setCrowdSaleState();
      expect(await activateShop.wait());
      expect(await tokenShop.crowdSaleOpen()).to.be.false;
    }),
    it("Should set the shop open", async () => {
      await zion.connect(DAO).transfer(tokenShop.address, 1000);
      expect(await zion.balanceOf(tokenShop.address)).to.be.equal(1000);
      let activateShop = await tokenShop.connect(DAO).setCrowdSaleState();
      expect(await activateShop.wait());
      expect(await tokenShop.crowdSaleOpen()).to.be.true;
    });
});
