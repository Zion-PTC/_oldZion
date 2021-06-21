import { useState, useEffect } from 'react'

function Eth() {
  const eth = window.ethereum
  const [addr, setaddr] = useState()
  const [isMetaMask, setisMetaMask] = useState(eth.isMetaMask)
  eth.on('accountsChanged', () => setaddr(eth.selectedAddress))
  function setAddr() { setaddr(eth.selectedAddress) }
  setTimeout(() => {
    setAddr()
  }, 100);
  return [addr, isMetaMask]
}

// =========================== PROMISES ==============================
function UserAddress() {
  var myPromise = new Promise((res) => {
    var addr = Eth()[0]
    if (addr === null || addr === undefined) {} else { res(addr) }
  })
  return myPromise
}

function UserConnected() {
  var myPromise = new Promise((res,rej) => {
    var addr = Eth()[0]
    if (addr === null || addr === undefined) {rej(false)} else { res(true) }
  })
  return myPromise
}

function IsMetaMask() {
  var myPromise = new Promise((res, rej) => {
    var isMetaMask = Eth()[1]
    if (isMetaMask) {res(true)} else { rej(false) }
  })
  return myPromise
}
// ===================================================================

export default function useGetAccounts() {
  const eth = window.ethereum
  var [user, setUser] = useState()
  var [connected, setConnected] = useState(false)
  var [dialogMessage, setDialogMessage] = useState()
  var [isMetaMask, setIsMetaMask] = useState(eth.isMetaMask)
  console.log(connected);

  UserAddress().then(res => setUser(res))
  UserConnected().then(res => setConnected(res)).catch(rej => setConnected(rej))
  IsMetaMask().then(res => setIsMetaMask(res)).catch(rej => setIsMetaMask(rej))

  setTimeout(() => {
    setUser(eth.selectedAddress)
  }, 100)

  return [user, connected, dialogMessage, isMetaMask]
}


