import { store } from "../app/store";
import { audiusApi } from "../services/audius";

let loadToLocalStorage = (stringKey, value) => {
  try {
    let stringValue = JSON.stringify(value)
    localStorage.setItem(stringKey, stringValue)
  } catch (error) {
    console.error(error);
  }
  return 'success'
}

let getFromLocalStorate = (stringKey) => {
  let jsonString = localStorage.getItem(stringKey)
  return JSON.parse(jsonString)
}

function timeFormat(duration) {
  let hrs = ~~(duration / 3600);
  let mins = ~~((duration % 3600) / 60);
  let secs = ~~duration % 60
  let time
  if (hrs > 0) {
    time = hrs + ':' +
      (
        mins < 10 ? '0' + mins : mins
      ) + ':' +
      (
        secs < 10 ? '0' + secs : secs
      )
  }
  time =
    (
      mins < 10 ? '0' + mins : mins
    ) + ':' +
    (
      secs < 10 ? '0' + secs : secs
    )
  return time
}

// ==========INTERACTION WITH AUDIUS=============

let audiusEnpoints = audiusApi.endpoints
let dispatchSearchTracks = (e) => store.dispatch(audiusEnpoints.searchTracks.initiate(e))
let dispatchStreamTrack = (e) => store.dispatch(audiusEnpoints.streamTrack.initiate(e))
let dispatchSearchTags = (e) => store.dispatch(audiusEnpoints.searchTags.initiate(e))

async function createPlaylistFromTrackNames(trackNames) {
  let trackDatas = trackNames.map((trackName) => {
    let searchTracksRes = getFirstResultFromSearchTracks(trackName)
    return searchTracksRes
  })
  let tracks = createTracksArrayFromAudiusPlaylistWithUrl(trackDatas)
  let tagPlaylistObj = createPlaylistObjectFromAudiusTracksArray(tracks)
  return tagPlaylistObj
}

let getFirstResultFromSearchTracks = async (e) => {
  let res = await dispatchSearchTracks(e)
  return res.data.data[0]
}

let createTracksArrayFromAudiusPlaylistWithUrl = (trackDatas) => {
  let tracks = []
  trackDatas.forEach(async (element) => {
    let track = await element
    let urlRes = await dispatchStreamTrack(track.id)
    let url = urlRes.data
    let trackObj = {
      'id': track.id,
      'title': track.title,
      'artist': track.user.name,
      'artwork': track.artwork["1000x1000"],
      'length': timeFormat(track.duration),
      'tags': track.tags,
      'url': url
    }
    tracks.push(trackObj)
  });
  return tracks
}

let createTracksArrayFromAudiusPlaylist = (playlistTracks) => {
  let tracks = playlistTracks.map(track => {
    let trackObj = {
      'id': track.id,
      'title': track.title,
      'artits': track.user.name,
      'artwork': track.artwork["1000x1000"],
      'length': timeFormat(track.duration),
      'tags': track.tags,
      'url': null
    }
    return trackObj
  })
  return tracks
}

let createPlaylistObjectFromAudiusTracksArray = (tracks) => {
  return {
    'name': 'TNL25',
    tracks: tracks,
    'tracksCount': tracks.length
  }
}

let createTracksArrayFromTag = async (query) => {
  let searchTagRes = await dispatchSearchTags(query)
  let json = await searchTagRes.data
  let data = await json.data
  let tracks = await data.tracks
  // let users = await data.users
  let trackNames = tracks.map(track => track.title)
  // let userNames = users.map(track => track.handle)
  return trackNames
}

// ======================================================

export {
  loadToLocalStorage,
  getFromLocalStorate,
  timeFormat,
  // AUDIUS
  createPlaylistFromTrackNames,
  getFirstResultFromSearchTracks,
  createTracksArrayFromAudiusPlaylistWithUrl,
  createTracksArrayFromAudiusPlaylist,
  createPlaylistObjectFromAudiusTracksArray,
  createTracksArrayFromTag
}