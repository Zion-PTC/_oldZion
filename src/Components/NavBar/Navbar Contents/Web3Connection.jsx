import MetamaskBtn from "./Web3/MetamaskBtn";

export default function Web3Connection({metamask, metaOK}) {
  console.log(metaOK);
  return (
    <div id='web3'
    style={{
      gridArea:'web3',
      display: 'grid'
    }}
    >
      {metamask}
    </div>
  )
}
