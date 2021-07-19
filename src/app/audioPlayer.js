import { store } from "./store"
import {
  setPlay,
  setPlayStatus,
  setCurrentPosition,
  setCue,
  playPreviousTrack,
  playNextTrack
} from "../features/audioPlayer/audioPlayerSlice"
import { audiusApi } from "../services/audius"
import $ from 'jquery'
import { timeFormat } from "../_JS Functions/utils"
import {
  setTrackUrl,
  setSelectedTrack,
  setIndexedToBePrefecthed
} from "../features/audioPlayer/audioPlayerSlice"

export function listenSeeking(e, audioPlayer) {
  console.log('scrolled');
  listenProgress(e, audioPlayer)
}

export function listenTimeUpdate(e) {
  setInterval(() => {
    let time = timeFormat(e.target.currentTime)
    store.dispatch(setCurrentPosition(time))
  }, 1000);
}

export function listenPlaying(e, audioPlayer) {
}

export function listenProgress(event, audioPlayer) {
  let current = event.target.currentTime
  let currentTime = timeFormat(current)
  let trackLength = event.target.duration
  let trackLengthTime = timeFormat(trackLength)
  let buffer = audioPlayer.buffered
  if (buffer.length !== 0) {
    let bufferLength = buffer.length
    let bufferStart = buffer.start(0)
    let bufferStartTime = timeFormat(bufferStart)
    let bufferEnd = buffer.end(0)
    let bufferEndTime = timeFormat(bufferEnd)

    let ratio = ~~ ((bufferEnd / trackLength) * 100)
    console.log(buffer, bufferLength, bufferEndTime, ratio);
  }
}

export function listenPlay(event, audioPlayer) {
  store.dispatch(setPlayStatus('play'))

}

export function listenPause() {
  store.dispatch(setPlayStatus('pause'))
}

export function listenEnded() {
  let currentTrackIndex = store.getState().audioPlayer.selectedTrack
  let playlist = store.getState().audioPlayer.playlist.tracks
  let trackCount = store.getState().audioPlayer.playlist.tracksCount
  let nextTrackIndex
  if (currentTrackIndex === trackCount - 1) {
    nextTrackIndex = 0
  } else { nextTrackIndex = currentTrackIndex + 1 }
  let nextTrackId = playlist[nextTrackIndex].id
  handleSelectedTrack(nextTrackId)
}

export function handlePrevious() {
  store.dispatch(playPreviousTrack())
}

export function handleNext() {
  store.dispatch(playNextTrack())
}

export function handlePlay() {
  let musicPlayer = $("#musicPlayer")[0]
  store.dispatch(setPlay())
  let isPlay = store.getState().audioPlayer.play
  switch (isPlay) {
    case true:
      musicPlayer.play()
      break;
    case false:
      musicPlayer.pause()
      break;
    default:
      break;
  }
}

export function handleSelection() {
  let indexesToPrefect = store.getState().audioPlayer.indexesToPrefetch
  indexesToPrefect.map(index => prefetch(index))
}

export function handleCue(indexes) {
  let playlist = store.getState().audioPlayer.playlist.tracks
  if (playlist[0] !== null) {
    let cue = [
      playlist[indexes[0]].url,
      playlist[indexes[1]].url,
      playlist[indexes[2]].url,
      playlist[indexes[3]].url,
      playlist[indexes[4]].url
    ]
    store.dispatch(setCue(cue))
  }
}

export function prefetch(index) {
  let track = store.getState().audioPlayer.playlist.tracks[index].id
  let urlRes = store.dispatch(audiusApi.endpoints.streamTrack.initiate(track))
  urlRes.then((res) => {
    let url = res.data
    let obj = {
      'index': index,
      'url': url
    }
    store.dispatch(setTrackUrl(obj))
    let cueIndexes = store.getState().audioPlayer.indexesToPrefetch
    handleCue(cueIndexes)
  })

}

export function selectTrack(id) {
  let playlist = store.getState().audioPlayer.playlist
  let tracks = playlist.tracks
  let index = tracks.findIndex(track => track.id === id)
  let storedIndexes = store.getState().audioPlayer.indexesToPrefetch
  let reducer = (accumulator, currentValue) => accumulator + currentValue
  store.dispatch(setSelectedTrack(index))
  let tracksCount = store.getState().audioPlayer.playlist.tracksCount
  let maxIndexValue = tracksCount - 6
  let deltaFromPlaylistEnd = tracksCount - index
  let indexesToBePrefetched = [
    index,
    index + 1,
    index + 2,
    index + 3,
    index + 4
  ]
  if (index <= maxIndexValue) {
  } else {
    if (indexesToBePrefetched === undefined) {
      indexesToBePrefetched = [
        index,
        index + 1,
        index + 2,
        index + 3,
        index + 4
      ]
    }
  }
  if (storedIndexes !== [0, 1, 2, 3, 4]) {
    let reducedStoredIndexs = storedIndexes.reduce(reducer)
    let reducedNewIndexes = indexesToBePrefetched.reduce(reducer)
    let sum = reducedNewIndexes - reducedStoredIndexs
    let boundaryValues = [
      5, -5, 10, -10, 15, -15, 20, -20, 0
    ]
    let inBoundary = boundaryValues.includes(sum)
    let indexZeroDistance = indexesToBePrefetched[0] - storedIndexes[0]
    if (inBoundary) {
    } else {
      if (indexZeroDistance >= 5) {
        indexesToBePrefetched = [
          index - 1, index - 2, index - 3, index - 4,
          index,
          index + 1, index + 2, index + 3, index + 4
        ]
        if (deltaFromPlaylistEnd >= 5) {
          indexesToBePrefetched = [
            index - 1, index - 2, index - 3, index - 4,
            index,
            index + 1, index + 2, index + 3, index + 4
          ]
        }
        if (deltaFromPlaylistEnd === 4) {
          indexesToBePrefetched = [
            index - 1, index - 2, index - 3, index - 4,
            index,
            index + 1, index + 2, index + 3
          ]
        }
        if (deltaFromPlaylistEnd === 3) {
          indexesToBePrefetched = [
            index - 1, index - 2, index - 3, index - 4,
            index,
            index + 1, index + 2
          ]
        }
        if (deltaFromPlaylistEnd === 2) {
          indexesToBePrefetched = [
            index - 1, index - 2, index - 3, index - 4,
            index,
            index + 1
          ]
        }
        if (deltaFromPlaylistEnd === 1) {
          indexesToBePrefetched = [
            index - 1, index - 2, index - 3, index - 4,
            index
          ]
        }
      }
      store.dispatch(setIndexedToBePrefecthed(indexesToBePrefetched))
    }
  } else {
    console.log('ooops')
  }
}

export function handleSelectedTrack(trackId) {
  // sent trackId to setSelectedTrack action
  // creates the queue of indexes
  selectTrack(trackId)
  let prefetchIndexes = store.getState().audioPlayer.indexesToPrefetch
  prefetchIndexes.map((index) => {
    prefetch(index)
    return index
  })
}


