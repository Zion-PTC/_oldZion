import { useSelector } from "react-redux"
import styled from "styled-components"
import {
  handlePlay,
  handlePrevious,
  handleNext,
  handleVolume,
  toggleVolume,
  testButton
} from "../../app/audioPlayer"

const MUSICPLAYER = styled.div`
  height: 100%;
  background-color: coral;
  grid-area: content;
  display: grid;
  place-items: center;
`

const PLAYERAREA = styled.div`
  background: cornflowerblue;
  width: 100%;
  display: grid;
  z-index: 2;
`

const AUDIO = styled.audio`
  width: 100%;
`

const PLAY = styled.button`
`

const TRANSPORTBAR = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1.5em 3em 1.5em 1.5em 1.5em auto auto 1.5em 3em;
  z-index: 3;
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

const PROGRESSBAR = styled.progress`
  width: 100%;
`

export default function MusicPlayer() {
  let int

  function counter() {
    let counter = 0
    function incrementCounter() {
      counter++
    }
    int = setInterval(() => {
      incrementCounter()
      console.log(counter);
    }, 100);
  }

  function startCounter() {
    counter()
  }

  let source
  let length
  let selectedTrack = useSelector(state => state.audioPlayer.selectedTrack)
  let playlistTracks = useSelector(state => state.audioPlayer.playlist.tracks)
  let playStatus = useSelector(state => state.audioPlayer.playStatus)
  let autoPlay = playStatus
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
    <MUSICPLAYER id='musicPlayerContainer'>
      <PLAYERAREA id='playerArea'>
        <PROGRESSBAR id='audioProgressBar' value='0' max='1' ></PROGRESSBAR>
        <TRANSPORTBAR id='transportBar'>
          <button onClick={handlePrevious}>&lt;</button>
          <PLAY onClick={handlePlay}>{playStatus}</PLAY>
          <button onClick={handleNext}>&gt;</button>
          <button>∞</button>
          <button>~</button>
          <Div><p id='currentPosition'>{length}</p></Div>
          <input type='range' id='a' name='a' onChange={(e) => handleVolume(e.target.value)}></input>
          <button id='testButton' onClick={testButton}></button>
          <button onClick={toggleVolume}>vol</button>
        </TRANSPORTBAR>
        <AUDIO id='musicPlayer' autoPlay={autoPlay} src={source}></AUDIO>
      </PLAYERAREA>
    </MUSICPLAYER >
  )
}