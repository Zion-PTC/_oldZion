import ProductTrack from './ProductTrack';

export default function TNLAudiusPlaylist({ isLoading, playlist }) {
  var trackMap = ''
  if (isLoading) {
    trackMap = <div>LOADING SOME GOOD MUSIC =)</div>
  } else {
    trackMap = playlist.tracks.map((track) =>
      <ProductTrack
        key={track.id}
        track={track}
      >
      </ProductTrack>)
  }
  return (
    <>
      {trackMap}
    </>
  )
}