import Web3 from "web3"

let doit = async () => {
  let web3 = new Web3

  web3.setProvider(new Web3.providers.HttpProvider("http://2.236.249.42:8545/rpc"))
  let eth = web3.eth

  let bal = web3.utils.fromWei(await eth.getBalance("0x164e8dbE80776b53f702E169F3753BCAf1945Ad3").catch(e => console.log(e.message)))
  let bal2 = web3.utils.fromWei(await eth.getBalance("0x89281c6c6b6609eef8b5d7e7aa38c4993a08702e").catch(e => console.log(e.message)))
  let coinbase = await eth.getCoinbase().catch(e=>console.log(e))
  // await web3.eth.sendTransaction({
  //   from: '0x89281c6c6b6609eef8b5d7e7aa38c4993a08702e',
  //   to: '0x164e8dbE80776b53f702E169F3753BCAf1945Ad3',
  //   value: '625697166532776746648320380374280103671755200316906558262375061821325312'
  // }).then(e=>console.log("receipt",e))

  console.log("io", bal);
  console.log("coin", bal2);
  console.log("coinbase", coinbase);

  return true

}

doit()