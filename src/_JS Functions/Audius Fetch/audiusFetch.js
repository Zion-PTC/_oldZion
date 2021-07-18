const contentProvider = `https://dn-usa.audius.metadata.fyi`
const audiusVersion = `/v1`
const appName = `&app_name=ZION`
// const urlPrefix = contentProvider + audiusVersion
const section = [`/users`, `/playlists`, `/tracks`]
const search = `/search?query=`
// ?????????? da integrare ⬇️
// const fetchAttr = [
//   {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   },
//   {
//     method: 'GET'
//   }
// ]
// ??????????

async function fetchBestHost(args, callback) {
  const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
  const host = await fetch('https://api.audius.co')
    .then(r => r.json())
    .then(j => j.data)
    .then(d => sample(d))
    callback(host, args)
  return host
}

async function fetchAudiusUsers(host, query) {
  const url = host + audiusVersion + section[0] + search + query + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  return json
}

async function fetchAudiusPlaylists(host, query) {
  const url = host + audiusVersion + section[1] + search + query + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  console.log(json);
  return json
}

async function fetchAudiusTracks(host, query) {
  const url = host + audiusVersion + section[2] + search + query + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  console.log(json);
  return json
}

async function fetchAudiusGetPlaylist(host, playlistID) {
  const url = host + audiusVersion + section[1] + `/` + playlistID + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  console.log(json);
  return json
}

async function fetchAudiusGetPlaylistTracks(host, playlistID) {
  const url = host + audiusVersion + section[1] + `/` + playlistID + section[2] + appName
  const fetchAttr = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(url, fetchAttr)
  const json = await response.json()
  console.log(json);
  return json
}

async function fetchStreamTrack(host, trackId) {
  // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP
  const url = host + audiusVersion + section[2] + '/' + trackId + '/stream?app_name=ZION'
  const fetchAttr = {
    method: 'GET'
  }
  const response = await fetch(url, fetchAttr)
  return response.url
}

export {
  fetchBestHost,
  fetchAudiusUsers,
  fetchAudiusPlaylists,
  fetchAudiusTracks,
  fetchAudiusGetPlaylist,
  fetchAudiusGetPlaylistTracks,
  fetchStreamTrack
}
