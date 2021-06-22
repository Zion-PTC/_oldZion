import { useEffect, useState } from "react"

export default function useCheckWeb3() {
  const ethereum = window.ethereum
  const [isWeb3, setIsWeb3] = useState()

  useEffect(() => {
    if (ethereum === undefined) {
      setIsWeb3(false)
    } else {
      setIsWeb3(true)
    }
  }, [])

  return isWeb3
}

