import Connected from './Connected'
import NotConnected from './NotConnected'
import useWeb3 from '../../../Hooks/useWeb3'

export default function Web3() {
  const eth = window.ethereum
  var userAddr = useWeb3()[1]

  var userStatus = useWeb3()[2]
  // qui prima c'era dialogue message, che era un messaggio che arrivava da useGetAccounts, 
  // il quale doveva essere una sorta di comunicazione con il componente

  var web3Conn = ''
  if (userStatus) { web3Conn = <Connected userAddr={userAddr}></Connected> }
  else { web3Conn = <NotConnected></NotConnected> }

  return (
    <>
      {web3Conn}
    </>
  )
}