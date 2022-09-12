const { expect } = require("chai");
const { ethers } = require("hardhat");

let Greeter, greeter, deployer

beforeEach(async()=>{
  Greeter = await ethers.getContractFactory("Greeter");
  greeter = await Greeter.deploy("Hello World");
  [deployer, addr1, _] = await ethers.getSigners();
})

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello World");
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // wait until the transaction is mined
    await setGreetingTx.wait();
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should return address of the owner equal to the first address in the wallet", async () => {
    
    expect(await greeter.owner()).to.equal(deployer.address);
  });

  it("Should throw an error when a non owner attempts to change the greeting",async()=>{
    await expect(greeter.connect(addr1).setGreeting("ciao")).to.be.revertedWith("error");
  })
});

