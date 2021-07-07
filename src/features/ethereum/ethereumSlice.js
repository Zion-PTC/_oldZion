import { createSlice } from "@reduxjs/toolkit"
import { store } from '../../app/store'
import { ethers } from 'ethers'
import { NFTInviteAbi } from "../../blockchain/ABIs/NFTInviteAbi"
import database from '../../Database/Accounts.json'
// import { Accounts } from "web3-eth-accounts" da controllare
import Web3 from 'web3'

// when user has metamask but not connected address is === null

let eth = window.ethereum
const accounts = database.accounts
const nftInviteAddr = accounts[0].nftInviteAddr


let isEth = new Promise((res, rej) => {
  const isEth = eth
  if (isEth !== undefined) { res(true) }
  if (isEth === undefined) {
    let x
    rej(false)
  }
})

async function web3() {
  await isEth
  eth.on('accountsChanged', () => {
    getUserInfos()
  })
  eth.on('chainChanged', () => {
    console.log('chain has changed');
    getUserInfos()
  })
  getUserInfos()
}
web3()

async function getUserInfos() {
  let provider = new ethers.providers.Web3Provider(eth)
  let network = await provider.getNetwork()
  let userChain = network.name
  store.dispatch(setUserChain(userChain))
  const web3 = new Web3(Web3.givenProvider);
  store.dispatch(setIsEth(eth.isMetaMask))
  store.dispatch(setUserAddr(eth.selectedAddress))
  const addr = store.getState().ethereum.userAddr
  if (addr === null) { store.dispatch(setIsUserConnected(false)) }
  if (addr !== null) {
    store.dispatch(setIsUserConnected(true))
    getMainNetBalance(addr, provider)
    getInvitationTokenBalance(addr, web3)
  }
}

async function getMainNetBalance(addr, provider) {
  const balance = await provider.getBalance(addr)
  const decBalance = ethers.utils.formatEther(balance)
  store.dispatch(getUserMainNetBalance(decBalance))
}

async function getInvitationTokenBalance(addr, web3) {
  const chainID = store.getState().ethereum.userChain
  if (chainID === 'rinkeby') {
    const NFTInviteContract = new web3.eth.Contract(NFTInviteAbi, nftInviteAddr, { from: addr });
    const result = await NFTInviteContract.methods.balanceOf(addr).call();
    console.log('this is result', result);
    store.dispatch(getUserInviteTokenBalance(result))
  } else {
    // this will set the token balance to initialized value
    store.dispatch(getUserInviteTokenBalance('0000'))
  }
}

async function lastEthCheck() {
  await isEth
  setTimeout(() => {
    const addr = store.getState().ethereum.userAddr
    if (addr === '0000') { web3() }
  }, 1000);
}

// this set the state values for users without Metamask
setTimeout(() => {
  if (eth === undefined) {
    store.dispatch(setIsEth(false))
    store.dispatch(setIsUserConnected(null))
    store.dispatch(setUserAddr('install meta'))
    store.dispatch(setUserChain('no metamask'))
  } else lastEthCheck()
}, 1000);

export const ethereumSlice = createSlice({
  name: 'ethereum',
  initialState: {
    isEth: '0000',
    isUserConnected: '00000',
    userAddr: '00000',
    userChain: '0000',
    userInvitationTokens: [{}],
    userZionDaosTokens: [{}],
    userMainNetBalance: '0000',
    userTNLinvitationTokenBalance: '0000',
  },
  reducers: {
    setIsEth: (state, action) => {
      state.isEth = action.payload
    },
    setUserAddr: (state, action) => {
      state.userAddr = action.payload
    },
    setIsUserConnected: (state, action) => {
      console.log(action.payload);
      state.isUserConnected = action.payload
    },
    setUserChain: (state, action) => {
      state.userChain = action.payload
    },
    getUserMainNetBalance: (state, action) => {
      state.userMainNetBalance = action.payload
    },
    getUserInviteTokenBalance: (state, action) => {
      state.userTNLinvitationTokenBalance = action.payload
    }
  }
})

export const selectEthereum = state => state.ethereum
export const {
  setIsEth,
  setUserAddr,
  setIsUserConnected,
  setUserChain,
  getUserMainNetBalance,
  getUserInviteTokenBalance
} = ethereumSlice.actions
export default ethereumSlice.reducer