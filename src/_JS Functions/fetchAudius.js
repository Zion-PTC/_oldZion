let getPlaylist = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/playlists/DOPRl?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let getPlaylistTracks = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let getTrack = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let getTrailingAppMetrics = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/metrics/app_name/trailing/string?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let getUsers = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let getUsersFavTracks = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let getUsersMostUsedTags = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/string/tags?user_id=string&app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let getUsersRepost = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/string/reposts?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let resolve = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216&app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let searchPlaylists = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/playlists/search?query=baauer b2b&app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let searchTracks = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let searchUsers = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/search?query=Brownies&app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let streamTrack = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP'
  let options = { method: 'GET', headers: { 'Accept': 'application/json' } }
  let res = await fetch(url, options)
  let json = await res.json()
  return json.data
}

let usersTracks = async () => {
  let url = 'https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP'
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