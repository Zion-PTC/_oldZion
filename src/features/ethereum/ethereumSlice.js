import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { store } from '../../app/store'
import { ethers } from 'ethers'
import { NFTInviteAbi } from "../../blockchain/ABIs/NFTInviteAbi"
import database from '../../Database/Accounts.json'
// import { Accounts } from "web3-eth-accounts" da controllare
import Web3 from 'web3'
import { userWeb3AccountObj } from "../../Database/factory/users_userWeb3Account"

export let connectUserToWeb3 = createAsyncThunk(
  'ethereum/connectUserToWeb3',
  async eth => {
    try {
      await new Promise((res, rej) => {
        if (eth === undefined) { rej({
          isEth: false
        }) }
        if (eth !== undefined) { res() }
      })
      let userAddress = await new Promise((res, rej) => {
        eth.on('accountsChanged',(e)=>{
          if (e.length === 0) {}
          if (e.length !== 0) {res(e)}
        })
        // here the code will go on
      })
      return {
        isEth: true,
        isConnected: true,
        isLoading: false,
        userAddr: userAddress[0]
      }
    } catch (error) {
      return error
    }
  }
)

export let connectToMetamask = createAsyncThunk(
  'ethereum/connectToMetamask',
  async () => {
    try {
      const eth = window.ethereum
      await eth.request({ method: 'eth_requestAccounts' })
      return
    } catch (error) {
      return error
    }
  }
)

export const ethereumMiddleware = store => next => action => {
  if (action.type === 'ethereum/connectUserToWeb3/pending') {
    if (action.payload === undefined) {console.log('undef')}
    if (action.payload !== undefined) {console.log(action)}
    action.payload = {
      isLoading: true,
      isEth: true
    }
    return next(action)
  }
  if (action.type === 'ethereum/connectUserToWeb3/fulfilled') {
    return next(action)
  }
  return next(action)
}

// when user has metamask but not connected address is === null

// let eth = window.ethereum
// const accounts = database.accounts
// const nftInviteAddr = accounts[0].nftInviteAddr




// async function web3() {
//   await isEth
//   eth.on('accountsChanged', () => {
//     getUserInfos()
//   })
//   eth.on('chainChanged', () => {
//     console.log('chain has changed');
//     getUserInfos()
//   })
//   getUserInfos()
// }
// web3()

// async function getUserInfos() {
//   let provider = new ethers.providers.Web3Provider(eth)
//   let network = await provider.getNetwork()
//   let userChain = network.name
//   store.dispatch(setUserChain(userChain))
//   const web3 = new Web3(Web3.givenProvider);
//   store.dispatch(setIsEth(eth.isMetaMask))
//   store.dispatch(setUserAddr(eth.selectedAddress))
//   const addr = store.getState().ethereum.userAddr
//   if (addr === null) { store.dispatch(setIsUserConnected(false)) }
//   if (addr !== null) {
//     store.dispatch(setIsUserConnected(true))
//     getMainNetBalance(addr, provider)
//     getInvitationTokenBalance(addr, web3)
//   }
// }

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

// async function lastEthCheck() {
//   await isEth
//   setTimeout(() => {
//     const addr = store.getState().ethereum.userAddr
//     if (addr === '0000') { web3() }
//   }, 1000);
// }

// // this set the state values for users without Metamask
// setTimeout(() => {
//   if (eth === undefined) {
//     store.dispatch(setIsEth(false))
//     store.dispatch(setIsUserConnected(null))
//     store.dispatch(setUserAddr('install meta'))
//     store.dispatch(setUserChain('no metamask'))
//   } else lastEthCheck()
// }, 1000);


export const ethereumSlice = createSlice({
  name: 'ethereum',
  initialState: userWeb3AccountObj,
  // initialState: {
  //   isEth: null,
  //   isEth: '0000',
  //   isUserConnected: '00000',
  //   userAddr: '00000',
  //   userChain: '0000',
  //   userInvitationTokens: [{}],
  //   userZionDaosTokens: [{}],
  //   userMainNetBalance: '0000',
  //   userTNLinvitationTokenBalance: '0000',
  //   isLoading: false
  // },
  reducers: {
    // setIsEth: (state, action) => {
    //   state.isEth = action.payload
    // },
    // setUserWeb3Infos: (state, action) => {

    // },
    // setUserAddr: (state, action) => {
    //   state.userAddr = action.payload
    // },
    // setIsUserConnected: (state, action) => {
    //   state.isUserConnected = action.payload
    // },
    // setUserChain: (state, action) => {
    //   state.userChain = action.payload
    // },
    // getUserMainNetBalance: (state, action) => {
    //   state.userMainNetBalance = action.payload
    // },
    // getUserInviteTokenBalance: (state, action) => {
    //   state.userTNLinvitationTokenBalance = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectUserToWeb3.fulfilled, (state, action) => {
        state.isEth = action.payload.isEth
      })
      .addCase(connectUserToWeb3.rejected, (state, action) => {
        state = action.payload
      })
      .addCase(connectUserToWeb3.pending, (state, action) => {
        state.isLoading = action.payload.isLoading
        state.isEth = action.payload.isEth
      })
    // builder // isEth
    //   .addCase(isEth.fulfilled, (state, action) => {
    //   })
    //   .addCase(isEth.rejected, (state, action) => {
    //   })
    //   .addCase(isEth.pending, (state, action) => {
    //   })
    // builder // isConnected
    //   .addCase(isConnected.fulfilled, (state, action) => {

    //   })
    //   .addCase(isConnected.rejected, (state, action) => {
    //     state.isConnected = action.payload
    //   })
    //   .addCase(isConnected.pending, (state, action) => {

    //   })
    builder
      .addCase(connectToMetamask.fulfilled, (state, action) => {
        state.isLoading = false
        // return action.payload
      })
      .addCase(connectToMetamask.rejected, (state, action) => {
        state.isLoading = false

      })
      .addCase(connectToMetamask.pending, (state, action) => {
        state.isLoading = true
        action.payload = 'pending'
      })
  }
})

export const selectEthereum = state => state.ethereum
export const {
  setUserWeb3Infos,
  // setIsEth,
  // setUserAddr,
  // setIsUserConnected,
  // setUserChain,
  // getUserMainNetBalance,
  // getUserInviteTokenBalance
} = ethereumSlice.actions
export default ethereumSlice.reducer