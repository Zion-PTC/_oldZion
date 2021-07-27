import detectEthereumProvider from '@metamask/detect-provider'

import { store } from "./store";
import { startSession } from "../features/ethereum/ethereumSlice";


// =======


// let audiusEnpoints = audiusApi.endpoints

// let dispatchSearchTracks = (e) => store.dispatch(audiusEnpoints.searchTracks.initiate(e))
// let dispatchSearchTags = (e) => store.dispatch(audiusEnpoints.searchTags.initiate(e))
// let dispatchStreamTrack = (e) => store.dispatch(audiusEnpoints.streamTrack.initiate(e))
// let dispatchSetPlaylist = (e) => store.dispatch(setPlaylist(e))

export default async function appLogic() {
  // ============================ETHERUM============================
  
  const provider = await detectEthereumProvider()
  store.dispatch(startSession(provider))

  // ============================TAG PLAYLIST============================

  // let searchTags = 'tnlDAO'
  // let trackNames = await createTracksArrayFromTag(searchTags)
  // let playlistObj = await createPlaylistFromTrackNames(trackNames)

  // ============================NAVBAR============================

  // const dispatchSetNavBarH = (e) => store.dispatch(setMenuBarH(e))
  // defineNavBarH(dispatchSetNavBarH)

  // ============================PLAYLIST============================
  // let getPlaylistTracksRes = await store.dispatch(audiusApi.endpoints.getPlaylistTracks.initiate('LRYPG'))
  // let datas = getPlaylistTracksRes.data
  // let playlistTracks = datas.data
  // let tracks = createTracksArrayFromAudiusPlaylist(playlistTracks)
  // let playlist = createPlaylistObjectFromAudiusTracksArray(tracks)
  // dispatchSetPlaylist(playlist)
  // let firstTrack = store.getState().audioPlayer.playlist.tracks[0].id
  // set default playlist track
  // handleSelectedTrack(firstTrack)
  // let audioPlayer = document.getElementById('musicPlayer')
  // // pass to next track on end
  // audioPlayer.addEventListener('ended', (e) => listenEnded(e))
  // audioPlayer.addEventListener('play', (e) => listenPlay(e, audioPlayer))
  // audioPlayer.addEventListener('pause', (e) => listenPause(e))
  // audioPlayer.addEventListener('progress', (e) => listenProgress(e, audioPlayer))
  // audioPlayer.addEventListener('playing', (e) => listenPlaying(e, audioPlayer))
  // audioPlayer.addEventListener('timeupdate', (e) => listenTimeUpdate(e))
  // audioPlayer.addEventListener('seeking', (e) => listenSeeking(e, audioPlayer))
  // // audioProgressBarr scroll
  // document.getElementById('currentPosition').innerHTML = '00:00 ' + timeFormat(~~audioPlayer.duration)

  // document.addEventListener('keydown', (e) => listenKeyDown(e))


  // ============================RESPONSIVENESS============================
  // const breakPointsMql = responsiveObject.breakPointsMql
  // const orientationMql = responsiveObject.orientationMql

  // const dispatchSetDeviceType = (e) => store.dispatch(setDeviceType(e))
  // const dispatchSetScreenDimensions = (e) => store.dispatch(setScreenDimensions(e))
  // const dispatchSetDisplayOrientation = (e) => store.dispatch(setDisplayOrientation(e))
  // const dispatchSetIsFullScreen = (e) => store.dispatch(setIsFullscreen(e))
  // const dispatchSetDisplay = (e) => store.dispatch(setDisplay(e))
  // const dispatchSetColSize = (e) => store.dispatch(setColSize(e))
  // const dispatchSetGridPa = (e) => store.dispatch(setGridPa(e))

  // // RUN ONCE
  // defineDeviceType(dispatchSetDeviceType)
  // defineScreenDimensions(dispatchSetScreenDimensions)
  // defineColSize(dispatchSetColSize)
  // defineDisplayOrientation(dispatchSetDisplayOrientation)
  // defineIsFullscreen(dispatchSetIsFullScreen)
  // breakPointsMql.map(breakPoint => defineDisplay(breakPoint, dispatchSetDisplay))
  // // subscribe to onChange event of breakpoints
  // breakPointsMql.map(breakPoint => {
  //   breakPoint.onchange = () => {
  //     defineDisplay(breakPoint, dispatchSetDisplay)
  //     defineIsFullscreen(dispatchSetIsFullScreen)
  //     defineGridPa(dispatchSetGridPa)
  //   }
  //   return breakPoint
  // })
  // defineGridPa(dispatchSetGridPa)
  // // subscribe to onChange event of orientation
  // orientationMql.onchange = () => {
  //   defineDisplayOrientation(dispatchSetDisplayOrientation)
  // }
  // ========================================================
}



