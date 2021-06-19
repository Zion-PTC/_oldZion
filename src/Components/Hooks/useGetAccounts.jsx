import { useState, useEffect } from 'react'

export default function useGetAccounts() {
  const [user, setUser] = useState()
  useEffect(() => {
    async function getAcc() {
      const ethereum = window.ethereum
      const acc = [await ethereum.send('eth_requestAccounts')]
      setUser(acc[0].result[0])
      ethereum.on('accountsChanged',() => setUser(ethereum.selectedAddress))
    }
    getAcc()
  }, [])
  return user
}
