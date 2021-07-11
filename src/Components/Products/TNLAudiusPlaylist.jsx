import ProductTrack from './ProductTrack';
import { useGetPlaylistTracksQuery } from '../../services/audius';



export default function TNLAudiusPlaylist() {

  //// REDUX STATE IMPORT
  const playlistID = 'LRYPG'
  // const { data, error, isLoading }
  const { data, error, isLoading } = useGetPlaylistTracksQuery(playlistID)
  var playlistTracks = data

  if (error) {console.log(error);}
  // console.log(error, isLoading);
  if (!isLoading) {
    // ======== SPLITTING THE TAGS ========
    // const track1Tags = playlistTracks.data[0].tags
    // console.log(track1Tags);
    // const regexpTag = /(\w+)/g;
    // const splittedTags = track1Tags.match(regexpTag)
    // console.table(splittedTags);
    // ========== FINDING EXACT MATCH ==========
    // const regexpTagExactMatch = /tnl25/
    // const tnl25Tagged = track1Tags.match(regexpTagExactMatch)
    // console.log(tnl25Tagged);
  }




  var userTrackMap = ''

  if (playlistTracks === undefined) {
    userTrackMap = <div>LOADING SOME GOOD MUSIC =)</div>
  } else {
    userTrackMap = playlistTracks.data.map((userTrack) =>
      <ProductTrack
        key={userTrack.id}
        trackID={userTrack.id}
        artwork={userTrack.artwork["1000x1000"]}
        title={userTrack.title}
        artist={userTrack.user.handle}
        duration={userTrack.duration}
        tags={userTrack.tags}
      >
      </ProductTrack>)
  }
  return (
    <>
      {userTrackMap}
    </>
  )
}


/* 
- - ta glio
QUA - ta glio
LA - piu di
Pra - da - 
- - sen ti
CO - me pi
CCHIA - sound di
QUE -  sti m
CI - di stra
DA




*/