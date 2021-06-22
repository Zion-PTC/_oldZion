import { useEffect, useState } from "react"

// this HOOK returns the url of the best performing content provider on Audius Network
export default function useAudiusContentProviders() {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    async function getProviders() {
      try {
        const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
        const host = await fetch('https://api.audius.co')
          .then(r => r.json())
          .then(j => j.data)
          .then(d => sample(d))
        setProviders(host)
      } catch (error) {

      }

    } getProviders()

  }, [])

  return providers
}
