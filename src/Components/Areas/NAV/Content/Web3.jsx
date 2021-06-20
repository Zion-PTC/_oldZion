import useGetAccounts from '../../../Hooks/useGetAccounts'
import Connected from './Connected'
import NotConnected from './NotConnected'

export default function Web3() {
  // var userAddr = useGetAccount()[0]
  const eth = window.ethereum
  var userAddr = useGetAccounts()[0]

  var connected = useGetAccounts()[1]
  var dialogMessage = useGetAccounts()[2]

  var web3Conn = ''
  if (connected) { web3Conn = <Connected userAddr={userAddr}></Connected> }
  else { web3Conn = <NotConnected></NotConnected> }

  return (
    <>
      {web3Conn}
    </>
  )
}