const { expect } = require("chai");
const { ethers } = require("hardhat");

let Membership, membership, deployer, addr1, addr2, addr3, addr4
let uri = "ciao"

beforeEach(async () => {
  Membership = await ethers.getContractFactory("Membership");
  membership = await Membership.deploy();
  [deployer, addr1, addr2, addr3, addr4, _] = await ethers.getSigners();
})

describe("Deployment", () => {
  it("Should return the address of deployer as the address of the owner", async () => {
    await membership.deployed();
    expect(await membership.owner()).to.equal(deployer.address)
  })
})

describe("Minting", () => {
  it("Should revert saying user is not member of the DAO", async () => {
    await expect(membership.connect(addr1).mint(addr2.address)).to.be.revertedWith("Only token holders can perform this action");
  }),
    it("Should return a balance of 1 token for addr2", async () => {
      const mintTokenToAddr2 = await membership.mint(addr2.address);
      await mintTokenToAddr2.wait();
      expect(await membership.balanceOf(addr2.address, 0)).to.be.equal(1)
    }),
    it("Should revert cause holders can only hold 1 token", async () => {
      const mintTokenToAddr2 = await membership.mint(addr2.address);
      await mintTokenToAddr2.wait();
      await expect(membership.mint(addr2.address)).to.be.revertedWith("Members can only hold one membership token")
    }),
    it("Should return a balance of 1 token for addr3", async () => {
      const mintTokenToAddr2 = await membership.mint(addr2.address);
      await mintTokenToAddr2.wait();
      const mintTokenToAddr3 = await membership.mint(addr3.address);
      await mintTokenToAddr3.wait();
      expect(await membership.balanceOf(addr3.address, 0)).to.be.equal(1)
    }),
    it("Should return balance of 1 token for addr4", async () => {
      const mintTokenToAddr2 = await membership.mint(addr2.address);
      await mintTokenToAddr2.wait();
      expect(await membership.balanceOf(addr2.address, 0)).to.be.equal(1)
      await expect(membership.connect(addr3).mint(addr1.address)).to.be.revertedWith("Only token holders can perform this action");
      const mintTokenToAddr3 = await membership.mint(addr3.address);
      await mintTokenToAddr3.wait();
      expect(await membership.balanceOf(addr3.address, 0)).to.be.equal(1)
      const mintTokenToAddr4 = await membership.connect(addr3).mint(addr4.address);
      await mintTokenToAddr4.wait();
      expect(await membership.balanceOf(addr4.address, 0)).to.be.equal(1)
    }),
    it("Should revert cause users can only have 1 token", async () => {
      const mintTokenToAddr2 = await membership.mint(addr2.address);
      const mintTokenToAddr3 = await membership.mint(addr3.address);
      await expect(membership.connect(addr2).mint(addr3.address)).to.be.revertedWith("Members can only hold one membership token");
      await mintTokenToAddr2.wait();
      await mintTokenToAddr3.wait();
    })
})

describe("Transfer", ()=>{
  it("Shall revert cause transfer is disabled", async()=>{
    expect (await membership.balanceOf(deployer.address,0)).to.equal(1);
    await membership.mint(addr2.address)
    expect(await membership.balanceOf(addr2.address, 0)).to.be.equal(1);
    await expect( membership.safeTransferFrom(addr2.address, addr3.address, 0, 1, "0x00")).to.be.revertedWith("This is a memebership token which can't be transferred")
  })
})

describe("Set Uri", ()=>{
  it("Should retrieve the URI stored on deploying", async()=>{
    await membership.deployed();
    expect(await membership.uri(0)).to.equal("");
    expect(await membership.setUri("ciao"));
    expect(await membership.uri(0)).to.equal("ciao");
    expect(await membership.pause());
    await expect(membership.setUri("pio")).to.reverted
  })
})