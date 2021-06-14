import React from 'react'

export default function ERCBalance() {
  const nftInviteAddr = '0xDc59783e7970D5f1313edD06f91baC178E5424bC';
  const web3 = new Web3(Web3.givenProvider);
  const NFTInviteContract = new web3.eth.Contract(NFTInviteAbi, nftInviteAddr, {from: userAddr});
  const [NFTBalance, setNFTBal] = useState()
  new Promise (() => {
    if (userAddr === undefined ) { 
      
    } else if (userAddr === null) {
      
    } else {
      sleep(delay2).then(() => { getNFTBalance() })
    }
  })
  const getNFTBalance = async () => {
    const result = await NFTInviteContract.methods.balanceOf(userAddr).call();
    setNFTBal(result);
  }
  eth.on('accountsChanged', () => {
    sleep(delay2).then(() => { getNFTBalance() })
  });
  return (
    <div>
      
    </div>
  )
}
