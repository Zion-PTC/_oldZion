import { useEffect, useState } from "react";
import { fetchAudiusPlaylists } from "../Audius/fetchAudius";


// ============= HOOKS
// To import a hook:
// 1) import useAudiusUsers from '../Hooks/useAudiusUsers'
// 2) const [results, loading] = useAudiusUsers(query)
// 3) map results to desired displayer

export default function useAudiusPlaylists(query) {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const json = await fetchAudiusPlaylists(query)
        console.log(json);
        setResults(
          json.data.map(item => item.playlist_name)
        )
      } finally {
        setLoading(false)
      }
    }
    if (query !== '') {fetchData()}
  }, [query])
  return [results, loading]
}