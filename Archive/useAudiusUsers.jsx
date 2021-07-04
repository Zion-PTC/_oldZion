import { useEffect, useState } from "react"
import { fetchAudiusUsers } from '../Audius/fetchAudius'

export default function useAudiusUsers(query) {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const json = await fetchAudiusUsers(query)
        setResults(
          json.data.map(item => item.name)
        )
      } finally {
        setLoading(false)
      }
    }
    if (query !== '') {fetchData()}
  }, [query])
  return [results, loading]
}
