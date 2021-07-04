import { createSlice } from "@reduxjs/toolkit"
import { store } from '../../app/store'
import { ethers } from 'ethers'

// when user has metamask but not connected address is === null

console.clear()
let eth = window.ethereum

let isEth = new Promise((res, rej) => {
  const isEth = eth
  if (isEth !== undefined) { res(true) }
  if (isEth === undefined) { rej('User has no access to Web3') }
})


async function web3() {
  await isEth
  eth.on('accountsChanged', () => {
    store.dispatch(setIsEth())
    store.dispatch(setUserAddr())
    const addr = store.getState().ethereum.userAddr
    if (addr === null) { store.dispatch(setIsUserConnected(false)) }
    if (addr !== null) { store.dispatch(setIsUserConnected(true)) }
  })
  let provider = new ethers.providers.Web3Provider(eth)
  let network = await provider.getNetwork()
  let userChain = network.name
  store.dispatch(setUserChain(userChain))
} web3() 

async function onChainChange() {
  eth.on('chainChanged', () => {
    web3()
  })
} onChainChange()

export const ethereumSlice = createSlice({
  name: 'ethereum',
  initialState: {
    isEth: '0000',
    isUserConnected: '00000',
    userAddr: '00000',
    userChain: '0000'
  },
  reducers: {
    setIsEth: state => {
      state.isEth = eth.isMetaMask
    },
    setUserAddr: state => {
      state.userAddr = eth.selectedAddress
    },
    setIsUserConnected: (state, action) => {
      state.isUserConnected = action.payload
    },
    setUserChain: (state, action) => {
      state.userChain = action.payload
    }
  }
})

export const {
  setIsEth,
  setUserAddr,
  setIsUserConnected,
  setUserChain
} = ethereumSlice.actions