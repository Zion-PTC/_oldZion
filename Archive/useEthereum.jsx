import { useState } from "react"
// function to ask user to show accounts, and connect metamask



export default function useEthereum() {
  const [metaConnectionMessage, setMetaConnectionMessage] = useState()
  async function connect() {
    const eth = window.ethereum
    await eth.request({ method: 'eth_requestAccounts' })
      .then(res => setMetaConnectionMessage('Congratulation motherfucker'))
      .catch(err => setMetaConnectionMessage('You rejected the connection, try again'))
  }
  return [metaConnectionMessage, connect]
}