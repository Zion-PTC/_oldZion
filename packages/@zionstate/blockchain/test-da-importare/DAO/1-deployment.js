const { expect } = require("chai");
const { ethers } = require("hardhat");
const { logDeploymentGasLimit, emitsEventOnDeploy, hashTx, calculateProposalId, zionUtils, governance } = require("../utils/test-utils");

let Zion, zion, ZionVote, zionVote, ZionDao, zionDao, USDC, usdc, holder1, holder2, holder3, deployer

beforeEach("Zion token, holder1(1000), holder2(1000), holder3(500)", async () => {
  // injected addresses
  [deployer, holder1, holder2, holder3, employee, _] = await ethers.getSigners();
  // deployer creates USDC tokens to pay employee
  USDC = await ethers.getContractFactory("USDC")
  usdc = await USDC.deploy()
  expect(await usdc.deployed())
  // deployer creates the Zion token
  Zion = await ethers.getContractFactory("Zion");
  zion = await Zion.deploy()
  expect(await zion.deployed())
  // deployer creates the Zion Vote token
  ZionVote = await ethers.getContractFactory("ZionVote");
  zionVote = await ZionVote.deploy(zion.address)
  expect(await zionVote.deployed())
  // distribute zion tokens
  let holders = [
    holder1,
    holder2,
    holder3
  ]
  await zion.mint(holder1.address, 1000)
  await zion.mint(holder2.address, 1000)
  await zion.mint(holder3.address, 500)
  expect(await zion.balanceOf(holder1.address)).to.be.equal(1000)
  expect(await zion.balanceOf(holder2.address)).to.be.equal(1000)
  expect(await zion.balanceOf(holder3.address)).to.be.equal(500)
  // holders wrap theirs tokens to be able to vote
  await zion.connect(holder1).approve(zionVote.address, 1000)
  await zion.connect(holder2).approve(zionVote.address, 1000)
  await zion.connect(holder3).approve(zionVote.address, 500)
  await zionVote.connect(holder1).depositFor(holder1.address, 1000)
  await zionVote.connect(holder2).depositFor(holder2.address, 1000)
  await zionVote.connect(holder3).depositFor(holder3.address, 500)
  expect(await zionVote.balanceOf(holder1.address)).to.be.equal(1000)
  expect(await zionVote.balanceOf(holder2.address)).to.be.equal(1000)
  expect(await zionVote.balanceOf(holder3.address)).to.be.equal(500)
  holders.forEach(async (holder) => {
    await zionVote.connect(holder).delegate(holder.address)
  })
  // deployer creates the DAO
  ZionDao = await ethers.getContractFactory("ZionDao")
  zionDao = await ZionDao.deploy(zionVote.address)
  expect(await emitsEventOnDeploy(zionDao, "ZionDaoCreated")).to.be.true
  expect(await usdc.mint(zionDao.address, 10000))
})

describe("Deployment", () => {
  it("Should print the gas needed to deploy the contracts", async () => {
    logDeploymentGasLimit(usdc, "USDC")
    logDeploymentGasLimit(zion, "Zion")
    logDeploymentGasLimit(zionDao, "Zion Dao")
    logDeploymentGasLimit(zionVote, "Zion Vote")
  })
  it("Should create a DAO with name ZionDao", async () => {
    expect(await zionDao.name()).to.be.equal("Zion Dao")
  }),
    it("Should create a DAO with voting delay 1", async () => {
      expect(await zionDao.votingDelay()).to.be.equal(1)
    }),
    it("Should create a DAO with voting period 45818", async () => {
      expect(await zionDao.votingPeriod()).to.be.equal(45)
    }),
    it("Should create a DAO with proposal threshold 0", async () => {
      expect(await zionDao.proposalThreshold()).to.be.equal(0)
    }),
    it("Should create a DAO with quorum fraction 4", async () => {
      expect(await zionDao.quorumNumerator()).to.be.equal(4)
    }),
    it("Should create a DAO with executor the DAO address", async () => {
      expect(await zionDao.executor()).to.be.equal(zionDao.address)
    }),
    it("Should return a quorum of 100", async () => {
      let blockNumber = await ethers.provider.getBlockNumber()
      let supposedSupply = 1000 + 1000 + 500
      let quorumFraction = 4
      let supposedQuorum = supposedSupply * quorumFraction / 100
      expect(await zionDao.quorum(blockNumber - 1)).to.be.equal(supposedQuorum)
    }),
    it("Should return that holder1 delegates himself", async () => {
      expect(await zionVote.delegates(holder1.address)).to.be.equal(holder1.address)
    })
})

describe("Proposal Creation", () => {
  it("Should create a proposal to send tokens usdc tokens to employee", async () => {
    let tx1 = {
      contract: usdc,
      functionName: "transfer",
      arguments: [employee.address, 1000]
    }
    let proposalObj = {
      targets: [usdc.address],
      values: [0],
      txs: [tx1],
      description: "description"
    }
    let { proposal, proposalId } = await governance.deployProposal(zionDao, { ...proposalObj })
    expect(proposal).to.emit(zionDao, "ProposalCreated")
  })
})

describe("Voting Period", () => {
  it("Should register votation by holder1,holder 2 and return that holder3 has not yet voted, vote has not succeded", async () => {
    let { proposal, proposalId } = await governance.precondition1(usdc, zionDao, employee)
    expect(proposal).to.emit(zionDao, "ProposalCreated")
    console.log(await zionUtils.getBlockNumber());
    await zionDao.connect(holder1).castVote(proposalId, 0) // against
    expect(await zionDao.hasVoted(proposalId, holder1.address)).to.be.true
    await zionDao.connect(holder2).castVote(proposalId, 1) // pro
    expect(await zionDao.hasVoted(proposalId, holder2.address)).to.be.true
    expect(await zionDao.hasVoted(proposalId, holder3.address)).to.be.false
    let proposalVotes = await zionDao.proposalVotes(proposalId)
    console.log("proposal votes are:", proposalVotes[0].toNumber());
    expect(await zionDao.voteSucceded(proposalId)).to.be.false
  }),
    it("Should return that holder3 has voted and that the proposal has succeded", async () => {
      let { proposalId } = await governance.precondition2(usdc, zionDao, employee, holder1, holder2)
      await zionDao.connect(holder3).castVote(proposalId, 1) // abstain
      expect(await zionDao.hasVoted(proposalId, holder3.address)).to.be.true
      expect(await zionDao.voteSucceded(proposalId)).to.be.true
    })
})

describe("Execution", () => {
  it("Should execute the proposal after the deadline and send money to employee", async () => {
    let { proposalId, proposalObj } = await governance.precondition3(usdc, zionDao, employee, holder1, holder2, holder3)
    let { targets, values, calldatas, description } = proposalObj
    for (let index = 0; index < 47; index++) {
      await zionUtils.getBlockNumber();
    }
    await zionDao.execute(targets, values, calldatas, description)
    let employeeBalance = await usdc.balanceOf(employee.address)
    expect(employeeBalance.toNumber()).to.be.equal(1000)
  })
})

describe("Changing Voting period", () => {
  it("Should create 2 proposals with 2 different voting periods", async () => {
    // create a first proposal
    let { proposal, proposalId } = await governance.precondition1(usdc, zionDao, employee)
    let proposal1DeadLine = await zionDao.proposalDeadline(proposalId)
    console.log(proposal1DeadLine.toNumber());
    let tx1 = {
      contract: zionDao,
      functionName: "setVotingPeriod",
      arguments: [20]
    }
    let proposal2Obj = {
      targets: [zionDao.address],
      values: [0],
      txs: [tx1],
      description: "voteperiod"
    }
    let { proposal: proposal2, proposalId: proposal2Id, proposalObj: proposal2ObjHash } = await governance.deployProposal(zionDao, { ...proposal2Obj })
    console.log(await zionUtils.getBlockNumber());
    await zionDao.connect(holder1).castVote(proposal2Id, 1) // against
    await zionDao.connect(holder2).castVote(proposal2Id, 1) // against
    await zionDao.connect(holder3).castVote(proposal2Id, 1) // against
    let proposal2DeadLine = await zionDao.proposalDeadline(proposal2Id)
    console.log(proposal2DeadLine.toNumber());
    await governance.createTransactions(41)
    console.log(await zionUtils.getBlockNumber());
    let { targets, values, calldatas, description } = proposal2ObjHash
    await zionDao.execute(targets, values, calldatas, description)
    
  })
})


// 33306861011289251571408859401844220887267332816625958716097126010439618610700
// 0x49a303e93b4d84ea20e6a2cf7df1fb3629be2b5c63674ded57095a17bdd9460c