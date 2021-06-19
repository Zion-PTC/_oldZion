import { useState, useEffect } from "react"

export default function useGetUserAddr() {
  const eth = window.ethereum
  const [userAddr, setUserAddr] = useState(eth.selectedAddress)
  const [toggle, setToggle] = useState(false)
  eth.on('accountsChanged',() => setToggle(!toggle))

  useEffect(() => {
    eth.on('accountsChanged', () => setUserAddr(eth.selectedAddress))
  }, [toggle])


  return userAddr
}
