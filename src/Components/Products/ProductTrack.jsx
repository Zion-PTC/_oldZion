import styled from "styled-components"
import { handleSelection, selectTrack } from "../../app/audioPlayer"

var productTrackObj ={
  'productTrackArea': {
    'heigth': '97%'
  }
}

const PRODUCTTRACKAREA = styled.div`
  height: 92%;
  width: 97%;
  max-width: 600px;
  grid-row: span 2;
  grid-column: span 2;
  align-self: center;
  justify-self: center;
`

const PRODUCTGRID = styled.div`
  height: 100%;
  width: 100%;
  background: #1C4A72;
  border: 1px solid inset rgb(13, 46, 65);
  font-size: 70%;
  border-radius: 5px;
  justify-self: center;
  display: grid;
  grid-template-columns: ${props => props.gridColInA};
  grid-template-rows: ${props => props.gridRowInA};
  grid-template-areas: ${props => props.gridAreaInA};
`

const FIELD = styled.div`
  grid-area: ${props => props.area};
  align-self: end;
  padding: 1px;
  color: #03090E;
  font-size: 90%;
  `

const DATA = styled.div`
  grid-area: ${props => props.area};
  padding: 1px;
  color: #EEF4FA;
  `

const TAGS = styled(DATA)`
  width: 100%;
  overflow: auto;
  `

const BADGE = styled.div`
  grid-area: ${props => props.area};
  background: rgb(13, 46, 65);
  border-radius: 100%;
  height: 74%;
  width: 74%;
  place-self: center;
`

const TRKLOGOTHUMBNAIL = styled.img`
  grid-area: logo;
  border-radius: 10px;
  height:  89%;
  place-self: center;
  border: solid 1px #334653;
  overflow: hidden;
  :hover{
    opacity: 0.5;
  }
`

const LIKEBAR = styled.input`
  background-color: rgb(13, 46, 65, 0.167);
  grid-area: likebar;
  padding: 0;
  margin: 0;
  appearance: none;
  -webkit-appearance: slider-vertical;
`

export default function ProductTrack({ track }) {

  let trackID = track.id
  let title = track.title
  let artist = track.artist
  let artwork = track.artwork
  let tags = track.tags

  const gridColInA = '110px 2fr 1fr 1fr 55px 6%'
  const gridRowInA = '50% 50%'
  const gridAreaInA = ' "logo _title _artist _tags badge1 likebar" "logo title artist tags badge2 likebar"'

  function handleClickThumbnail() {
    console.log(trackID);
    selectTrack(trackID)
    handleSelection()
  }

  return (
    <PRODUCTTRACKAREA>
      <PRODUCTGRID id='productTrackGrid'
        gridColInA={gridColInA}
        gridRowInA={gridRowInA}
        gridAreaInA={gridAreaInA}
      >
        <TRKLOGOTHUMBNAIL
          onClick={handleClickThumbnail}
          src={artwork}
        />
        <FIELD area='_title'>Track Title</FIELD>
        <DATA area='title'>{title}</DATA>
        <FIELD area='_artist'>Artist</FIELD>
        <DATA area='artist'>{artist}</DATA>
        <FIELD area='_tags'>Tags/Style</FIELD>
        <TAGS area='tags'><p>{tags}</p></TAGS>
        <BADGE area='badge1'></BADGE>
        <LIKEBAR type='range'>
        </LIKEBAR>
        <BADGE area='badge2'></BADGE>
      </PRODUCTGRID>
    </PRODUCTTRACKAREA>
  )
}

// onClick={handleSelectedTrack(trackID)}
