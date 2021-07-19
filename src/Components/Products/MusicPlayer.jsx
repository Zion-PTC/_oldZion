import { useSelector } from "react-redux"
import styled from "styled-components"
import { handlePlay, handlePrevious, handleNext } from "../../app/audioPlayer"

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

const PLAY = styled.button`
`

const TRANSPORTBAR = styled.div`
  position: absolute;
  top: -2em;
  height: 2em;
  width: 100%;
  display: grid;
  grid-template-columns: 1.5em 3em 1.5em auto auto 3em;
`

const Div = styled.div`
  background-color: white;
  display: grid;
  place-items: center;
  p {
    margin: 0;
    color: black;
  }
`

export default function MusicPlayer() {

  let source
  let length
  let selectedTrack = useSelector(state => state.audioPlayer.selectedTrack)
  let playlistTracks = useSelector(state => state.audioPlayer.playlist.tracks)
  let playStatus = useSelector(state => state.audioPlayer.playStatus)
  let currentPosition = useSelector(state => state.audioPlayer.currentPosition)

  let selectedTrackIndex = selectedTrack
  if (playlistTracks[0].id !== undefined) {
    if (playlistTracks[selectedTrackIndex] !== undefined) {
      let selectedTrackUrl = playlistTracks[selectedTrackIndex].url
      let selectedTrackLength = playlistTracks[selectedTrackIndex].length
      source = selectedTrackUrl
      length = selectedTrackLength
    }
  }

  return (
    <MUSICPLAYER>
      <PLAYERAREA>
        <TRANSPORTBAR>
          <button onClick={handlePrevious}>&lt;</button>
          <PLAY onClick={handlePlay}>{playStatus}</PLAY>
          <button onClick={handleNext}>&gt;</button>
          <Div><p> {currentPosition} {length}</p></Div>
          <progress value='10' max='100' ></progress>
          <button>Vol</button>
        </TRANSPORTBAR>
        <AUDIO id='musicPlayer' controls src={source} autoPlay></AUDIO>
      </PLAYERAREA>
    </MUSICPLAYER >
  )
}