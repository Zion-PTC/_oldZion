import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers'
import Web3 from 'web3'

import { store } from '../../app/store'
import { NFTInviteAbi } from "../../blockchain/ABIs/NFTInviteAbi"
import database from '../../Database/Accounts.json'
// import { Accounts } from "web3-eth-accounts" da controllare
import { userWeb3AccountObj } from "../../Database/factory/users_userWeb3Account"

export let connectUserToWeb3 = createAsyncThunk(
  'ethereum/connectUserToWeb3',
  async (eth) => {
    try {
      let _isEth = await store.dispatch(isEth(eth))
      // if (_isEth.payload) {
      //   let _isConnected = await store.dispatch(isConnected(eth))
      //   let checkIsConnected = (value) => {
      //     // if (value.payload) { return true }
      //     if (value.payload) { return store.dispatch(startSession(eth)) }
      //     if (!value.payload) { return false }
      //   }
      //   let result = checkIsConnected(_isConnected)
      //   return result
      // }
      return false
    } catch (error) {
      return error
    }
  }
)

export let isEth = createAsyncThunk(
  'ethereum/isEth',
  async e => {
    try {
      let _isEth = await new Promise((res, rej) => {
        if (!e) { rej(false) }
        if (e) { res(true) }
      })
      return _isEth
    } catch (error) {
      return error
    }
  }
)

export let isConnected = createAsyncThunk(
  'ethereum/isConnected',
  async e => {
    try {
      let _userAddr = await new Promise(async (res, rej) => {
        let address = await e.request({ method: 'eth_accounts' })
        let chain = await e.request({ method: 'eth_chainId' })
        if (address.length === 0) { rej(false) }
        if (address.length !== 0) { res(true) }
      })
      return _userAddr
    } catch (error) {
      return error
    }
  }
)

export let connectToMetamask = createAsyncThunk(
  'ethereum/connectToMetamask',
  async e => {
    console.log(e);
    let address = await e.request({ method: 'eth_requestAccounts' })
    return address[0]
  }
)

export let startSession = createAsyncThunk(
  'ethereum/startSession',
  async e => {
      await new Promise((res, rej) => {
        let handleChanged = () => { store.dispatch(isConnected(e)) }
        e.on('accountsChanged', handleChanged)
        // e.on('chainChanged', handleChanged)
      })
      return 'session started'
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


// const accounts = database.accounts
// const nftInviteAddr = accounts[0].nftInviteAddr


// async function getMainNetBalance(addr, provider) {
//   const balance = await provider.getBalance(addr)
//   const decBalance = ethers.utils.formatEther(balance)
//   store.dispatch(getUserMainNetBalance(decBalance))
// }

// async function getInvitationTokenBalance(addr, web3) {
//   const chainID = store.getState().ethereum.userChain
//   if (chainID === 'rinkeby') {
//     const NFTInviteContract = new web3.eth.Contract(NFTInviteAbi, nftInviteAddr, { from: addr });
//     const result = await NFTInviteContract.methods.balanceOf(addr).call();
//     store.dispatch(getUserInviteTokenBalance(result))
//   } else {
//     // this will set the token balance to initialized value
//     store.dispatch(getUserInviteTokenBalance('0000'))
//   }
// }



export const ethereumSlice = createSlice({
  name: 'ethereum',
  initialState: userWeb3AccountObj,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectUserToWeb3.fulfilled, (state, action) => {
        state.isConnected = action.payload
      })
      .addCase(connectUserToWeb3.rejected, (state, action) => {
        state.isConnected = action.payload
      })
      .addCase(connectUserToWeb3.pending, (state, action) => {
        action.payload = 'pending'
      })
    builder // isEth
      .addCase(isEth.fulfilled, (state, action) => {
        state.isEth = action.payload
      })
      .addCase(isEth.rejected, (state, action) => {
        state.isEth = action.payload
      })
      .addCase(isEth.pending, (state, action) => {
        action.payload = 'pending'
      })
    builder // isConnected
      .addCase(isConnected.fulfilled, (state, action) => {
        state.isConnected = action.payload
      })
      .addCase(isConnected.rejected, (state, action) => {
        state.isConnected = action.payload
      })
      .addCase(isConnected.pending, (state, action) => {
        action.payload = 'pending'
      })
    builder
      .addCase(connectToMetamask.fulfilled, (state, action) => {
        state.userAddr = action.payload
      })
      .addCase(connectToMetamask.rejected, (state, action) => {
      })
      .addCase(connectToMetamask.pending, (state, action) => {
        action.payload = 'pending'
      })
    builder
      .addCase(startSession.fulfilled, (state, action) => {
      })
      .addCase(startSession.rejected, (state, action) => {
      })
      .addCase(startSession.pending, (state, action) => {
      })
  }
})

export const selectEthereum = state => state.ethereum
export const {
} = ethereumSlice.actions
export default ethereumSlice.reducer