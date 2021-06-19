import Explanation from '../../../Explanation'

export default function NFTInvite({userAddr, netID, balance, NFTBalance}) {
  let chainInfo
  if (netID === 'rinkeby') {
    chainInfo = <p>which is the right chain, here you can mint NFT Invitation tokens</p>
  } else {
    chainInfo = <p>it is the wrong chain</p>
  }

  return (
    <div>
      <p>Your Address is: {userAddr}</p>
      <p>Your Balance: {balance}</p>
      <p>Your NFTBalance: {NFTBalance}</p>
      <p>Your you are connected to {netID} chain</p>
      {chainInfo}
      <p>Great job!!! You reached level 1</p>
      <p>Since you hold NFT Invitation tokens, you can mint new ones and invite someone you know</p>
      <NFTInvite userAddr={userAddr} />
      <p>Send this invitation only to someone you really like and with whom you enjoy spending time with!</p>
      <Explanation />
    </div>
  )
}
