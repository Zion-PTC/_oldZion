import { useSearchTracksQuery } from "../../services/audius";

export default function TNL25Tags() {
  const tags = `baauer`
  const { data, error, isLoading } = useSearchTracksQuery(tags)
  console.log(data, error, isLoading);
  
  return (
    <div>
      
    </div>
  )
}
