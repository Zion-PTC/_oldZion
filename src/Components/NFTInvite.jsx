import React, { useState } from 'react'
import Web3 from 'web3';
import { NFTInviteAbi } from '../blockchain/ABIs/NFTInviteAbi'

export default function NFTInvite(userAddr) {
  const _userAddr = userAddr.userAddr
  const web3 = new Web3(Web3.givenProvider);
  const nftInviteAddr = '0xDc59783e7970D5f1313edD06f91baC178E5424bC';
  const NFTInviteContract = new web3.eth.Contract(NFTInviteAbi, nftInviteAddr, {from: _userAddr});
  const [recAddr, setRecAddr] = useState()

  const inputHandler = (event) => {
    setRecAddr(event.target.value);
  }

  const submitHandler = async () => {
    const gas = await NFTInviteContract.methods.mintNftOwners(recAddr).estimateGas();
    console.log(gas);
    const result = await NFTInviteContract.methods.mintNftOwners(recAddr).send();
    console.log(userAddr);
    console.log(result);
  }

  return (
    <div>
      <input type='input' onChange={inputHandler} placeholder='Address'></input>
      <input type='submit' onClick={submitHandler}></input>
      <p>You will send your NFT to {recAddr} </p>
    </div>
  )
}
