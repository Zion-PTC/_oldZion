import Connected from './Connected'
import NotConnected from './NotConnected'
import { useSelector } from 'react-redux'

export default function OkWeb3() {
  // const eth = window.ethereum
  // var userAddr = useWeb3()[2]
  
  // var userStatus = useWeb3()[3]
  let isUserConnected = useSelector(state => state.ethereum.isUserConnected)
  let userAddr = useSelector(state => state.ethereum.userAddr)
  // qui prima c'era dialogue message, che era un messaggio che arrivava da useGetAccounts, 
  // il quale doveva essere una sorta di comunicazione con il componente

  var web3Conn = ''
  if (isUserConnected) { web3Conn = <Connected userAddr={userAddr}></Connected> }
  else { web3Conn = <NotConnected></NotConnected> }

  return (
    <>
      {web3Conn}
    </>
  )
}