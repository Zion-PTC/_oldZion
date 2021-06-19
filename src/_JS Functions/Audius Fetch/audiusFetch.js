const contentProvider = `https://dn-usa.audius.metadata.fyi`
const audiusVersion = `/v1`
const appName = `&app_name=ZION`
const urlPrefix = contentProvider + audiusVersion
const section = [`/users`, `/playlists`, `/tracks`]
const search = `/search?query=`
// ?????????? da integrare ⬇️
const fetchAttr = [
  {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  },
  {
    method: 'GET'
  }
]
// ??????????


async function fetchAudiusUsers(query) {
  const url = urlPrefix + section[0] + search + query + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  return json
}

async function fetchAudiusPlaylists(query) {
  const url = urlPrefix + section[1] + search + query + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  console.log(json);
  return json
}

async function fetchAudiusTracks(query) {
  const url = urlPrefix + section[2] + search + query + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  console.log(json);
  return json
}

async function fetchAudiusGetPlaylist(playlistID) {
  const url = urlPrefix + section[1] + `/` + playlistID + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  console.log(json);
  return json
}

async function fetchAudiusGetPlaylistTracks(playlistID) {
  const url = urlPrefix + section[1] + `/` + playlistID + section[2] + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  console.log(json);
  return json
}

export {
  fetchAudiusUsers,
  fetchAudiusPlaylists,
  fetchAudiusTracks,
  fetchAudiusGetPlaylist,
  fetchAudiusGetPlaylistTracks
}
