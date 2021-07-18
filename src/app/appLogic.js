import { setColSize, setGridPa } from "../features/productArea/productAreaSlice";
import { setDisplay, setDisplayOrientation, setIsFullscreen } from "../features/responsiveDesign/responsiveDesingSlice";
import { setDeviceType, setScreenDimensions } from "../features/userDevice/userDeviceSlice";
import { store } from "./store";
import defineDeviceType from "./defineFunctions/defineDeviceType";
import defineScreenDimensions from "./defineFunctions/defineScreenDimensions";
import defineDisplayOrientation from "./defineFunctions/defineDisplayOrientation";
import defineIsFullscreen from "./defineFunctions/defineIsFullScreen";
import defineDisplay from "./defineFunctions/defineDisplay";
import defineColSize from "./defineFunctions/defineColSize";
import defineGridPa from "./defineFunctions/defineGridPa";
import { responsiveObject } from "./defineFunctions/responsiveDesignDashboard";
import { setCue, setIndexedToBePrefecthed, setPlaylist, setSelectedTrack, setTrackUrl } from "../features/audioPlayer/audioPlayerSlice";
import { audiusApi } from "../services/audius";
import $ from 'jquery'

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
  console.log(maxIndexValue);
  let indexesToBePrefetched = [
    index,
    index + 1,
    index + 2,
    index + 3,
    index + 4
  ]
  if (index <= maxIndexValue) {
    console.log('trackIndex is in boundaries');
  } else {
    console.log('track index is close to the end');
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
  console.log(storedIndexes);
  if (storedIndexes !== [0, 1, 2, 3, 4]) {
    let reducedStoredIndexs = storedIndexes.reduce(reducer)
    let reducedNewIndexes = indexesToBePrefetched.reduce(reducer)
    let sum = reducedNewIndexes - reducedStoredIndexs
    let boundaryValues = [
      5, -5, 10, -10, 15, -15, 20, -20, 0
    ]
    let inBoundary = boundaryValues.includes(sum)
    let indexZeroDistance = indexesToBePrefetched[0] - storedIndexes[0]

    console.log(reducedStoredIndexs, reducedNewIndexes, sum, inBoundary, indexZeroDistance)
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



export default function appLogic() {
  // fetch playlist
  let playlist = store.dispatch(audiusApi.endpoints.getPlaylistTracks.initiate('LRYPG'))
  playlist.then((res) => {
    let datas = res.data
    let playlistTracks = datas.data
    // create tracks array
    let tracks = playlistTracks.map(track => {
      let trackObj = {
        'id': track.id,
        'title': track.title,
        'artist': track.user.name,
        'artwork': track.artwork["1000x1000"],
        'tags': track.tags,
        'url': null
      }
      return trackObj
    })
    // create playlist obj
    let playlist = {
      'name': 'TNL25',
      tracks: tracks,
      'tracksCount': tracks.length
    }
    // set playlist in the state
    store.dispatch(setPlaylist(playlist))
    let firstTrack = store.getState().audioPlayer.playlist.tracks[0].id
    // set default playlist track
    handleSelectedTrack(firstTrack)
    let player = $("#musicPlayer")[0]
    // pass to next track on end
    player.addEventListener('ended', function () {
      let currentTrackIndex = store.getState().audioPlayer.selectedTrack
      let playlist = store.getState().audioPlayer.playlist.tracks
      let trackCount = store.getState().audioPlayer.playlist.trackCount
      let nextTrackIndex
      if (currentTrackIndex === trackCount - 1) {
        nextTrackIndex = 0
      } else { nextTrackIndex = currentTrackIndex + 1 }
      let nextTrackId = playlist[nextTrackIndex].id
      console.log(nextTrackId);
      handleSelectedTrack(nextTrackId)
    })
    return playlist
  })




  // ========================================================
  const breakPointsMql = responsiveObject.breakPointsMql
  const orientationMql = responsiveObject.orientationMql

  const dispatchSetDeviceType = (e) => store.dispatch(setDeviceType(e))
  const dispatchSetScreenDimensions = (e) => store.dispatch(setScreenDimensions(e))
  const dispatchSetDisplayOrientation = (e) => store.dispatch(setDisplayOrientation(e))
  const dispatchSetIsFullScreen = (e) => store.dispatch(setIsFullscreen(e))
  const dispatchSetDisplay = (e) => store.dispatch(setDisplay(e))
  const dispatchSetColSize = (e) => store.dispatch(setColSize(e))
  const dispatchSetGridPa = (e) => store.dispatch(setGridPa(e))

  // RUN ONCE
  defineDeviceType(dispatchSetDeviceType)
  defineScreenDimensions(dispatchSetScreenDimensions)
  defineColSize(dispatchSetColSize)
  defineDisplayOrientation(dispatchSetDisplayOrientation)
  defineIsFullscreen(dispatchSetIsFullScreen)
  breakPointsMql.map(breakPoint => defineDisplay(breakPoint, dispatchSetDisplay))
  // subscribe to onChange event of breakpoints
  breakPointsMql.map(breakPoint => {
    breakPoint.onchange = () => {
      defineDisplay(breakPoint, dispatchSetDisplay)
      defineIsFullscreen(dispatchSetIsFullScreen)
      defineGridPa(dispatchSetGridPa)
    }
    return breakPoint
  })
  defineGridPa(dispatchSetGridPa)
  // subscribe to onChange event of orientation
  orientationMql.onchange = () => {
    defineDisplayOrientation(dispatchSetDisplayOrientation)
  }
  // ========================================================



}


  //// REDUX STATE IMPORT

  // const playlist = useSelector(state => state.audioPlayer.playlist)

  // if (error) {console.log(error);}
  // // console.log(error, isLoading);
  // if (!isLoading) {
  //   // ======== SPLITTING THE TAGS ========
  //   // const track1Tags = playlistTracks.data[0].tags
  //   // console.log(track1Tags);
  //   // const regexpTag = /(\w+)/g;
  //   // const splittedTags = track1Tags.match(regexpTag)
  //   // console.table(splittedTags);
  //   // ========== FINDING EXACT MATCH ==========
  //   // const regexpTagExactMatch = /tnl25/
  //   // const tnl25Tagged = track1Tags.match(regexpTagExactMatch)
  //   // console.log(tnl25Tagged);
  // }
  // const {data, error, isLoading2} = useStreamTrackQuery(playlist.data[0])



