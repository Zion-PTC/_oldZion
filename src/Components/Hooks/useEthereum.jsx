import { useState } from "react"

export default function useEthereum() {
  const [metaConnectionMessage, setMetaConnectionMessage] = useState()
  async function connect() {
    const eth = window.ethereum
    await eth.enable()
      .then(res => setMetaConnectionMessage('Congratulation motherfucker'))
      .catch(err => setMetaConnectionMessage('You rejected the connection, try again'))
  }
  return [metaConnectionMessage, connect]
}