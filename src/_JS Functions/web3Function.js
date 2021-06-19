import { ethers } from "ethers"
import Web3 from 'web3'
import database from '../Database/Accounts.json'
import { NFTInviteAbi } from '../blockchain/ABIs/NFTInviteAbi'

// const provider = new ethers.providers.Web3Provider(eth)
const eth = window.ethereum
const userAddr = eth.selectedAddress
const isMeta = eth.isMetaMask
const web3 = new Web3(Web3.givenProvider)
const provider = new ethers.providers.Web3Provider(eth)

function connectMetamask() {
  eth.request({ method: 'eth_requestAccounts' })
}

function onEthConnect() {
  eth.on('connect', () => { 'do something' })
}

function onAccountChange() {
  eth.on('accountsChanged', () => { 'do something' })
}

function onChainChange() {
  eth.on('chainChanged', () => { 'do something' })
}

async function getMainNetBalance(userAddr) {
  const balance = await provider.getBalance(userAddr)
  const decBalance = ethers.utils.formatEther(balance)
  return decBalance
}


const nftInviteAddr = database.accounts[0].nftInviteAddr

const NFTInviteContract = new web3.eth.Contract(NFTInviteAbi, nftInviteAddr, { from: userAddr })

const getNFTBalance = async () => {
  const result = await NFTInviteContract.methods.balanceOf(userAddr).call();
  // useState function to update value
}

const recAddr = '' // get from input handler

const writeSmartContract = async () => {
  const gas = await NFTInviteContract.methods.mintNFTowners(recAddr).estimateGas();
  const result = await NFTInviteContract.methods.mintNFTowners(recAddr).send();
}





export {
  eth,
  userAddr,
  isMeta,
  connectMetamask,
  onEthConnect,
  onAccountChange,
  onChainChange,
  getMainNetBalance
}