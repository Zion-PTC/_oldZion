export default function MetamaskBtn() {
  function connectMetamask() {
    window.ethereum.request({ method: 'eth_requestAccounts' })
  }

  return (
    <button
      onClick={connectMetamask}
      style={{
        id: 'metamask-btn',
        fontSize: '60%',
        border: 'solid 1px #174666',
        background: '#E36E1A',
        borderRadius: '3px',
        placeSelf: 'center'
      }}>
      Connect Wallet
    </button>
  )
}
