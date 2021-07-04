import styled from "styled-components"
import { useDispatch } from "react-redux"
import { setSelectedTrack } from "../../features/audioPlayer/audioPlayerSlice"


const PRODUCTTRACKAREA = styled.div`
  height: 97%;
  width: 97%;
  max-width: 600px;
  grid-row: span 2;
  grid-column: span 2;
  align-self: center;
  justify-self: center;
  transition: ease 0.5s;
`
const TRKLOGOTHUMBNAIL = styled.img`
  grid-area: logo;
  border-radius: 10px;
  height:  89%;
  place-self: center;
  border: solid 1px #334653;
`

export default function ProductTrack({ trackID, title, artist, artwork, tags }) {

  const dispatch = useDispatch()

  const gridColInA = '110px 2fr 1fr 1fr 55px 6%'
  const gridRowInA = '50% 50%'
  const gridAreaInA = ' "logo _title _artist _tags badge1 likebar" "logo title artist tags badge2 likebar"'

  return (
    <PRODUCTTRACKAREA>
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
        <TRKLOGOTHUMBNAIL onClick={() => dispatch(setSelectedTrack(trackID))}  src={artwork}></TRKLOGOTHUMBNAIL>
        <div style={{ gridArea: '_title', alignSelf: 'end', padding: '1px', color: '#03090E', fontSize: '90%' }}>Track Title</div>
        <div style={{ gridArea: 'title', padding: '1px', color: '#EEF4FA' }}>{title}</div>
        <div style={{ gridArea: '_artist', alignSelf: 'end', padding: '1px', color: '#03090E', fontSize: '90%' }}>Artist</div>
        <div style={{ gridArea: 'artist', padding: '1px', color: '#EEF4FA' }}>{artist}</div>
        <div style={{ gridArea: '_tags', alignSelf: 'end', padding: '1px', color: '#03090E', fontSize: '90%' }}>Tags/Style</div>
        <div style={{ gridArea: 'tags', padding: '1px', color: '#EEF4FA', width: '100%', overflow: 'auto' }}><p>{tags}</p></div>
        <div style={{ gridArea: 'badge1', background: 'rgb(13, 46, 65)', borderRadius: '100%', height: '74%', width: '74%', placeSelf: 'center' }}></div>
        <div style={{ background: 'rgb(13, 46, 65, 0.167)', gridArea: 'likebar', display: 'grid' }}>
          <div style={{ background: 'yellow', borderRadius: '15px', height: '90%', width: '21px', placeSelf: 'center' }}></div>
        </div>
        <div style={{ gridArea: 'badge2', background: 'rgb(13, 46, 65)', borderRadius: '100%', height: '74%', width: '74%', placeSelf: 'center' }}></div>
      </div>
    </PRODUCTTRACKAREA>
  )
}
