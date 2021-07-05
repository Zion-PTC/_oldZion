import { useSelector } from "react-redux"
import styled from "styled-components"


const MUSICPLAYER = styled.div`
  height: 100%;
  background-color: coral;
  grid-area: content;
  display: grid;
  align-items: flex-end;
`

const PLAYERAREA = styled.div`
  background: cornflowerblue;
  display: grid;
  z-index: 2;
`

const AUDIO = styled.audio`
  width: 100%;
`
let x

export default function MusicPlayer() {
  const source = useSelector(state => state.audioPlayer.selectedTrack)
  let src = 'https://creatornode.audius.co/tracks/stream/'+source
  console.log('source:', source);

  return (
    <MUSICPLAYER id='musicPlayer'>
      <PLAYERAREA>
        <AUDIO controls src={src} autoPlay></AUDIO>
      </PLAYERAREA>
    </MUSICPLAYER>
  )
}
