import OkWeb3 from './OkWeb3'
import NoWeb3 from './NoWeb3'

export default function Web3Connection({eth}) {

  // ========================= RENDER CONDITIONS
  var navmenu = ''
  if (eth === undefined) { navmenu = <NoWeb3></NoWeb3> }
  if (eth !== undefined) { navmenu = <OkWeb3></OkWeb3> }

  return (
    <>
      {navmenu}
    </>
  )
}
