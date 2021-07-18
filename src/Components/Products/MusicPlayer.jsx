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

export default function MusicPlayer() {
  let source
  let selectedTrack = useSelector(state => state.audioPlayer.selectedTrack)
  let playlistTracks = useSelector(state => state.audioPlayer.playlist.tracks)
  let selectedTrackIndex = selectedTrack
  if (playlistTracks[0].id !== undefined ) {
    if (playlistTracks[selectedTrackIndex] !== undefined) {
      let selectedTrackUrl = playlistTracks[selectedTrackIndex].url
      source = selectedTrackUrl
    }
  }

  return (
    <MUSICPLAYER>
      <PLAYERAREA>
        <AUDIO id='musicPlayer' controls src={source} autoPlay></AUDIO>
      </PLAYERAREA>
    </MUSICPLAYER>
  )
}