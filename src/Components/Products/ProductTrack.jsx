import { useState, useRef, useEffect } from "react";
import TrkLogoThumbNail from "./Thumbnails/TrkLogoThumbnail"


export default function ProductTrack({ trackID, title, artist, artwork }) {
  const [tracksStreamLink, setTracksStreamLink] = useState()
  var playlistTrack = useRef(null)

  useEffect(() => {
    console.log(playlistTrack);
  }, [])

  setTimeout(() => {
    // clickHandle()
  }, 1000);

  async function clickHandle() {
    const response = await fetch('https://dp01.audius.endl.net/v1/tracks/' + trackID + '/stream?app_name=EXAMPLEAPP');
    setTracksStreamLink(response.url)
    console.log(trackID);
    console.log(response.url);
  }
  const gridColInA = '110px 2fr 1fr 1fr 55px 6%'
  const gridRowInA = '50% 50%'
  const gridAreaInA = ' "logo _title _artist _tags badge1 likebar" "logo title artist tags badge2 likebar"'

  return (
    <div
      ref={l => playlistTrack = l }
      style={{
        height: '97%',
        width: '97%',
        maxWidth: '600px',
        gridRow: 'span 2',
        gridColumn: 'span 2',
        alignSelf: 'center',
        justifySelf: 'center',
        transition: 'ease 0.5s',
      }}>
      <div id='productTrackGrid' style={{
        height: '100%',
        width: '100%',
        background: '#1C4A72',
        border: '1px solid inset rgb(13, 46, 65)',
        fontSize: '75%',
        borderRadius: '5px',
        justifySelf: 'center',
        display: 'grid',
        gridTemplateColumns: `${gridColInA}`,
        gridTemplateRows: `${gridRowInA}`,
        gridTemplateAreas: `${gridAreaInA}`
      }}>
        <TrkLogoThumbNail coverURL={artwork}></TrkLogoThumbNail>
        <div style={{ gridArea: '_title', alignSelf: 'end', padding: '1px', color: '#03090E', fontSize: '90%' }}>Track Title</div>
        <div style={{ gridArea: 'title', padding: '1px', color: '#EEF4FA' }}>{title}</div>
        <div style={{ gridArea: '_artist', alignSelf: 'end', padding: '1px', color: '#03090E', fontSize: '90%' }}>Artist</div>
        <div style={{ gridArea: 'artist', padding: '1px', color: '#EEF4FA' }}>{artist}</div>
        <div style={{ gridArea: '_tags', alignSelf: 'end', padding: '1px', color: '#03090E', fontSize: '90%' }}>Tags/Style</div>
        <div style={{ gridArea: 'tags', padding: '1px', color: '#EEF4FA' }}>#tekno</div>
        <div style={{ gridArea: 'badge1', background: 'rgb(13, 46, 65)', borderRadius: '100%', height: '74%', width: '74%', placeSelf: 'center' }}></div>
        <div style={{ background: 'rgb(13, 46, 65, 0.167)', gridArea: 'likebar', display: 'grid' }}>
          <div style={{ background: 'yellow', borderRadius: '15px', height: '90%', width: '21px', placeSelf: 'center' }}></div>
        </div>
        <div style={{ gridArea: 'badge2', background: 'rgb(13, 46, 65)', borderRadius: '100%', height: '74%', width: '74%', placeSelf: 'center' }}></div>
      </div>
    </div>
  )
}
