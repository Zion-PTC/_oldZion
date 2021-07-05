import Connected from './Connected'
import NotConnected from './NotConnected'
import { useSelector } from 'react-redux'

export default function OkWeb3() {
  let isUserConnected = useSelector(state => state.ethereum.isUserConnected)
  let userAddr = useSelector(state => state.ethereum.userAddr)

  var web3Conn = ''
  if (isUserConnected) { web3Conn = <Connected userAddr={userAddr}></Connected> }
  else { web3Conn = <NotConnected></NotConnected> }

  return (
    <>
      {web3Conn}
    </>
  )
}