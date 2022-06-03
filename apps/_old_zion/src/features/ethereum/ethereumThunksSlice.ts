import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ethers } from 'ethers'

import { store } from '../../app/store'
import { NFTInviteAbi } from "../../blockchain/ABIs/NFTInviteAbi"
import { database } from "../../Database/users/database"
// import { Accounts } from "web3-eth-accounts" da controllare
import {
  setIsEth,
  setIsConnected,
  setUserAddr,
  setUserChain
} from "./ethereumSlice"



export let handleUserAddress = createAsyncThunk(
  'ethereum/handleUserAddress',
  async e => {
    let provider = new ethers.providers.Web3Provider(e)
    let network = await provider.getNetwork()
    let userChain = network.name
    let dispatch = store.dispatch
    let userAddress = await e.request({ method: 'eth_accounts' })
    let { payload } = await dispatch(isConnected(userAddress))
    let { isConnected: _isConnected, userAddr } = payload
    switch (_isConnected) {
      case false:
        dispatch(setIsConnected(false));
        dispatch(setUserAddr(userAddr))
        dispatch(setUserChain('user has not yet connected'))
        break;
      case true:
        dispatch(setIsConnected(true));
        dispatch(setUserAddr(userAddr))
        dispatch(setUserChain(userChain))
        console.log('is still working');
    }
    return
  }
)

export let startSession = createAsyncThunk(
  'ethereum/startSession',
  async eth => {
    await new Promise((res, rej) => {}) // PAUSER
    let dispatch = store.dispatch
    let res = await dispatch(isEth(eth))
    let _isEth = res.payload
    switch (_isEth) {
      case false: dispatch(setIsEth(false)); break;
      case true:
        dispatch(setIsEth(true))
        await eth.on('accountsChanged', () => dispatch(handleUserAddress(eth)))
        await eth.on('chainChanged', () => dispatch(handleUserAddress(eth)))

        await new Promise((res, rej) => {})
    }
    return 'session ended'
  }
)

export let isEth = createAsyncThunk(
  'ethereum/isEth',
  async e => {
    if (!e) { return false }
    if (e) { return true }
  }
)

export let isConnected = createAsyncThunk(
  'ethereum/isConnected',
  async userAddress => {
    let response = {
      isConnected: null,
      userAddr: null
    }
    switch (true) {
      case userAddress.length === 0:
        response.isConnected = false
        response.userAddr = 'no address found'
        break;
      case userAddress.length !== 0:
        response.isConnected = true
        response.userAddr = userAddress
        break;
    }
    return response
  }
)

export let connectToMetamask = createAsyncThunk(
  'ethereum/connectToMetamask',
  async e => {
    try {
      let address = await e.request({ method: 'eth_requestAccounts' })
      return address[0]
    } catch (error) {
      return error
    }
  }
)

export const ethereumMiddleware = (store) => {
  let { state, dispatch } = store
  return (next) => {
    return (action) => {
      return next(action)
    }
  }
}

export let getMainNetBalance = createAsyncThunk(
  'ethereum/getMainNetBalance',
  async (addr, provider) => {
    const balance = await provider.getBalance(addr)
    const decBalance = ethers.utils.formatEther(balance)
    // store.dispatch(setUserMainNetBalance(decBalance))
  }
)

export let getTokenBalance = createAsyncThunk(
  'ethereum/getInvitationTokenBalance',
  async (addr, web3) => {
    const accounts = database.accounts
    const nftInviteAddr = accounts[0].nftInviteAddr
    const chainID = store.getState().ethereum.userChain
    if (chainID === 'rinkeby') {
      const NFTInviteContract = new web3.eth.Contract(NFTInviteAbi, nftInviteAddr, { from: addr });
      const result = await NFTInviteContract.methods.balanceOf(addr).call();
      // store.dispatch(getUserInviteTokenBalance(result))
    } else {
      // this will set the token balance to initialized value
      // store.dispatch(getUserInviteTokenBalance('0000'))
    }
  }
)

export const userWeb3AccountObj = {
  isSessionStarted: null,
  isEthLoading: null,
  isConnectedLoading: null,
  isUserAddrLoading: null,
  isUserChainLoading: null,
  isWeb3BalanceLoading: null
}

export const ethereumThunksSlice = createSlice({
  name: 'ethereumThunks',
  initialState: userWeb3AccountObj,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(startSession.fulfilled, (state, action) => {
        state.isSessionStarted = false
      })
      .addCase(startSession.rejected, (state, action) => {  ////////
        state.isSessionStarted = false
        action.payload = 'there was a problem with your session'
      })
      .addCase(startSession.pending, (state, action) => {
        state.isSessionStarted = true
        action.payload = 'pending'
      })
    builder // isEth
      .addCase(isEth.fulfilled, (state, action) => {
        state.isEthLoading = false
      })
      .addCase(isEth.rejected, (state, action) => {  ///////
        state.isEthLoading = false
        action.payload = 'there was a problem with your connection'
      })
      .addCase(isEth.pending, (state, action) => {
        action.payload = 'pending'
        state.isEthLoading = true
      })
    builder
      .addCase(handleUserAddress.fulfilled, (state, action) => {
        state.isUserAddrLoading = false
      })
      .addCase(handleUserAddress.rejected, (state, action) => { //////
        state.isUserAddrLoading = false
      })
      .addCase(handleUserAddress.pending, (state, action) => {
        state.isUserAddrLoading = true
        action.payload = 'pending'
      })
    builder // isConnected
      .addCase(isConnected.fulfilled, (state, action) => {
        state.isConnectedLoading = false
      })
      .addCase(isConnected.rejected, (state, action) => {  /////
        state.isConnectedLoading = false
        action.payload = 'there was a problem trying to retrieve your connection status'
      })
      .addCase(isConnected.pending, (state, action) => {
        state.isConnectedLoading = true
        action.payload = 'pending'
      })
    builder
      .addCase(connectToMetamask.fulfilled, (state, action) => {
      })
      .addCase(connectToMetamask.rejected, (state, action) => {
      })
      .addCase(connectToMetamask.pending, (state, action) => {
      })
    builder
      .addCase(getMainNetBalance.fulfilled, (state, action) => {
      })
      .addCase(getMainNetBalance.rejected, (state, action) => {
      })
      .addCase(getMainNetBalance.pending, (state, action) => {
      })
    builder
      .addCase(getTokenBalance.fulfilled, (state, action) => {
      })
      .addCase(getTokenBalance.rejected, (state, action) => {
      })
      .addCase(getTokenBalance.pending, (state, action) => {
      })
  }
})