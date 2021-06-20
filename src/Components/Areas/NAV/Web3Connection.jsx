import Web3 from './Content/Web3'
import NoWeb3 from './Content/NoWeb3'

export default function Web3Connection() {
  const eth = window.ethereum

  // ========================= RENDER CONDITIONS
  var navmenu = ''
  if (eth === undefined) { navmenu = <NoWeb3></NoWeb3> }
  if (eth !== undefined) { navmenu = <Web3></Web3> }

  return (
    <>
      {navmenu}
    </>
  )
}
