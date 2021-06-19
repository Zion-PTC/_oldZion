import { connectMetamask } from "../../../../_JS Functions/web3Function";

export default function MetamaskBtn() {
  return (
    <button
      onClick={connectMetamask}
      style={{
        id: 'metamaskbtn',
        gridArea: 'web3',
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
