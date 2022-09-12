const { expect } = require("chai");
const { ethers } = require("hardhat");

let Zion, zion, deployer, owner, addr1, addr2

beforeEach(async () => {
  Zion = await ethers.getContractFactory("Zion");
  zion = await Zion.deploy();
  [deployer, owner, addr1, addr2] = await ethers.getSigners();
  await zion.deployed();
})

describe("Deployment", () => {
  it("Shall return the address of the deployer as the owner of the contract", async () => {
    expect(await zion.owner()).to.be.equal(deployer.address);
  })
})

describe('Minting', () => {
  it("Shall mint 100 tokend to addr2", async () => {
    expect(await zion.mint(addr2.address, 100));
    expect(await zion.balanceOf(addr2.address)).to.be.equal(100);
  }),
  it("Shall revert cause addr1 is not the owner", async()=>{
    await expect(zion.connect(addr1).mint(addr1,100)).to.be.reverted
  })
})

describe("Transfers", () => {
  it("Shall transfer 50 tokens to addr1, the balance of deployer should be 50, and balance of addr1 50", async () => {
    await zion.deployed()
    await zion.mint(deployer.address, 100)
    expect(await zion.transfer(addr1.address, 50));
    expect(await zion.balanceOf(addr1.address)).to.be.equal(50);
    expect(await zion.balanceOf(deployer.address)).to.be.equal(50);
  })
})

describe('Burning', () => {
  it("Shall therow a TypeError cause the burn function is not available",async()=>{
    expect(await zion.mint(addr1.address,100))
    try {
      zion.burn(addr1.address,50)
    } catch (error) {
      expect(error)
    }
  })
})

describe("Pausing", () => {
  it("Shall pause the contract", async () => {
    let pauseContract = await zion.pause()
    await pauseContract.wait()
    expect(await zion.paused()).to.be.true
  }),
  it("Shall not let deployer mint new tokens", async () => {
    let pauseContract = await zion.pause()
    await pauseContract.wait()
    expect(zion.mint(addr1.address,100)).to.be.reverted
  }),
  it("Shall not let deployer transfer tokens", async () => {
    let mintTokensToDeployer = await zion.mint(deployer.address, 100)
    await mintTokensToDeployer.wait()
    let pauseContract = await zion.pause()
    await pauseContract.wait()
    expect(zion.transfer(addr1.address, 10)).to.be.revertedWith('Pausable: paused')
  }),
  it("Shall not let addr1 transfer tokens", async () => {
    let mintTokensToDeployer = await zion.mint(addr1.address, 100)
    await mintTokensToDeployer.wait()
    expect(await zion.balanceOf(addr1.address)).to.be.equal(100)
    let pauseContract = await zion.pause()
    await pauseContract.wait()
    await expect(zion.transfer(addr2.address, 10)).to.be.revertedWith('Pausable: paused')
  })
})

describe("Snapshot", ()=>{
  it("Should perform a snapshot", async()=>{
    expect(await zion.snapshot()).to.emit(zion, "Snapshot").withArgs(1)
  }),
  it("Should retrive the current Snapshot ID which sould be 1", async()=>{
    expect(await zion.snapshot()).to.emit(zion, "Snapshot").withArgs(1)
    expect(await zion.getCurrentSnapshotId()).to.be.equal(1)
    }),
  it("Should return a value of 50, cause that was the balance of addr1 at the moment in which the Snapshot was taken", async()=>{
    await zion.mint(addr1.address, 100);
    expect(await zion.balanceOf(addr1.address)).to.be.equal(100);
    expect(await zion.snapshot()).to.emit(zion, "Snapshot").withArgs(1)
    await zion.connect(addr1).transfer(addr2.address,50)
    expect(await zion.balanceOf(addr1.address)).to.be.equal(50);
    expect(await zion.balanceOf(addr2.address)).to.be.equal(50);
    expect(await zion.balanceOfAt(addr1.address,1)).to.be.equal(100);
  })
})
