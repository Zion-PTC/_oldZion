new Promise(() => {
  // if metamask is not installed we do nothing
  if (eth === undefined) {
    metamask = <div>no metamask</div>
  }
  // now we chech if the user address is undefinded, which means user is not connected
  else if (userAddr == undefined) {
    // if use address is undefined we show metamask button
    metaOK = eth.isMetaMask
    metamask = <MetamaskBtn />
    // console.log(userAddr);
  } else {
    eth.on('connect', () => { userAddr = eth.selectedAddress })

    // if use address is not undefined we set the state for the user eth address
    onAccountChange(() => {
      userEthAddr = eth.selectedAddress
      var part1 = userEthAddr.slice(0,5)
      var part2 = userEthAddr.slice(38, 42)
      var addr = part1 + '...' + part2
      setuserEthAddr(addr)
    })
    // we hide Metamask button
    metamask = ''
    // and when the user changed address on his metamask
    onEthAccountChange(() => {
      userEthAddr = eth.selectedAddress
      var part1 = userEthAddr.slice(0,5)
      var part2 = userEthAddr.slice(38, 42)
      var addr = part1 + '...' + part2
      setuserEthAddr(addr)
    })
    // now we have to check the network connection
    const provider = new ethers.providers.Web3Provider(eth)
    setTimeout(() => {
      setNetID(provider.network.name)
    }, 1000);
    // same thing on Network change we update the state
    eth.on('chainChanged', () => {
      setTimeout(() => {
        setNetID(provider.network.name)
      }, 1000);
      // now we check user MAINNET BALANCE
      setTimeout(() => {
        getBalance()
      }, 1000);
      async function getBalance() {
        const balance = await provider.getBalance(userAddr)
        const decBalance = ethers.utils.formatEther(balance)
        setBalance(decBalance);
      }
    })
    // now we check NFT BALANCE
    const nftInviteAddr = database.accounts[0].nftInviteAddr
    const web3 = new Web3(Web3.givenProvider)
    const NFTInviteContract = new web3.eth.Contract(NFTInviteAbi, nftInviteAddr, { from: userAddr })
    new Promise(() => {
      if (userAddr === undefined) {

      } else if (userAddr === null) {

      } else {
        setTimeout(() => {
          getNFTBalance()
        }, 1000);
      }
    })
    const getNFTBalance = async () => {
      const result = await NFTInviteContract.methods.balanceOf(userAddr).call();
      setNFTBal(result);
    }
    eth.on('accountsChanged', () => {
      setTimeout(() => {
        getNFTBalance()
      }, 1000);
    });
    new Promise(() => {
      if (NFTBalance === '0') {

      } else {
        // invite = <NFTInvite
        //   userAddr={userAddr}
        //   balance={balance}
        //   NFTBalance={NFTBalance}
        //   netID={netID}
        // />
      }
    })

  }
})