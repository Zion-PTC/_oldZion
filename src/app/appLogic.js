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
import {
  handleSelectedTrack,
  listenPlay,
  listenPause,
  listenProgress,
  listenEnded,
  listenPlaying,
  listenTimeUpdate,
  listenSeeking
} from "./audioPlayer";
import { responsiveObject } from "./defineFunctions/responsiveDesignDashboard";
import { setPlaylist } from "../features/audioPlayer/audioPlayerSlice";
import { audiusApi } from "../services/audius";
import $ from 'jquery'
import { timeFormat } from "../_JS Functions/utils";

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
        'length': timeFormat(track.duration),
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
    let audioPlayer = document.getElementById('musicPlayer')
    // pass to next track on end
    audioPlayer.addEventListener('ended', (e) => listenEnded(e))
    audioPlayer.addEventListener('play', (e) => listenPlay(e, audioPlayer))
    audioPlayer.addEventListener('pause', (e) => listenPause(e))
    audioPlayer.addEventListener('progress', (e) => listenProgress(e, audioPlayer))
    audioPlayer.addEventListener('playing', (e) => listenPlaying(e, audioPlayer))
    audioPlayer.addEventListener('timeupdate', (e) => listenTimeUpdate(e))
    audioPlayer.addEventListener('seeking', (e) => listenSeeking(e, audioPlayer))
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



