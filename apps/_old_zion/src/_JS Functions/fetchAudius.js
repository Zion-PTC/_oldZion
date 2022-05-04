let getPlaylist = async (playlistId) => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/playlists/' + playlistId + '?app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let getPlaylistTracks = async (playlistId) => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/playlists/' + playlistId + '/tracks?app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let getTrack = async (trackId) => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/tracks/' + trackId + '?app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let getTrailingAppMetrics = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/metrics/app_name/trailing/string?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let getUsers = async (userId) => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/' + userId + '?app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let getUsersFavTracks = async (userId) => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/' + userId + '/favorites?app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let getUsersMostUsedTags = async () => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/string/tags?user_id=string&app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let getUsersRepost = async () => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/string/reposts?app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let resolve = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216&app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let searchPlaylists = async (query) => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/playlists/search?query=' + query + '&app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let searchTracks = async (query) => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/tracks/search?query=' + query + '&app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let searchUsers = async (query) => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/search?query=' + query + '&app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let streamTrack = async (query) => {
  try {
    let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/tracks/' + query + '/stream?app_name=EXAMPLEAPP'
    let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
    let res = await fetch(url, options)
    let json = await res.json()
    return json.data
  } catch (error) {
    console.error(error);
  }
}

let usersTracks = async (userId) => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/'+userId+'/tracks?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let trendingTracks = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/tracks/trending?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

export {
  getPlaylist,
  getPlaylistTracks,
  getTrack,
  getTrailingAppMetrics,
  getUsers,
  getUsersFavTracks,
  getUsersMostUsedTags,
  getUsersRepost,
  resolve,
  searchPlaylists,
  searchTracks,
  searchUsers,
  streamTrack,
  usersTracks,
  trendingTracks
}
