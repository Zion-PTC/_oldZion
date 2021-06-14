// SELECTIN HOST
// Audius is a decentralized music streaming service.
// To use the API, you first select an API endpoint
// from the list of endpoints returned by:
// https://api.audius.co
// Once you've selected a host, all API requests can be
// sent directly to it. We recommend selecting a host each
// time your application starts up as availability may
// change over time.
// For the following documention, we've selected one for you:
// https://discovery-a.mainnet.audius.radar.tech

// GET TRAILIN APP NAME METRICS
// https://discovery-a.mainnet.audius.radar.tech/v1/metrics/app_name/trailing/string?app_name=EXAMPLEAPP

// RESOLVE
// Resolves and redirects a provided Audius app URL to the
// API resource URL it represents.
// This endpoint allows you to lookup and access API
// resources when you only know the audius.co URL.
// Tracks, Playlists, and Users are supported.
// https://discovery-a.mainnet.audius.radar.tech/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216&app_name=EXAMPLEAPP


// >>> to use this component
// import it
// call the <AudiusFetcher fetch='*'/> and send as prop the desired type of fetching on audius server



import getFetch from "./getFetch"

const endPointsList = {
  '1' : ''
}

export default function AudiusFetcher() {
  const contentProvider2 = 'https://discovery-a.mainnet.audius.radar.tech'
  const contentProvider4 = 'https://audius-metadata-1.figment.io'
  const contentProvider3 = 'https://audius-dp.nuremberg.creatorseed.com'
  const contentProvider5 = 'https://dn-usa.audius.metadata.fyi'
  const contentProvider = 'https://discoveryprovider3.audius.co'


  const appVersion = '/v1'
  const urlPrefix = contentProvider + appVersion
  const search = 'search?query='
  const appName = 'ZION'
  const appNString = 'app_name=' + appName
  var searchQuery = ''
  const endPoints = 'https://api.audius.co'
  var headersOK = 'true'
  const headers = { 'Accept': 'application/json' }


  // this section performs searches within the USERS
  const usersPrefix = 'users'
  const urlUsersPrefix = urlPrefix + usersPrefix
  // SEARCH USERS
  // https://discovery-a.mainnet.audius.radar.tech/v1/users/search?query=Brownies&app_name=EXAMPLEAPP
  var searchUsers = urlUsersPrefix + search + searchQuery + '&' + appNString
  // GET USER
  // https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe?app_name=EXAMPLEAPP
  const userHandle = ''
  var getUsers = urlUsersPrefix + userHandle + '?' + appNString
  // GET USER'S FAVORITE TRACKS
  // https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP
  var getUsersFavTracks = urlUsersPrefix + userHandle + '/favorites?' + appNString
  // GET USER'S REPOSTS
  // https://discovery-a.mainnet.audius.radar.tech/v1/users/string/reposts?app_name=EXAMPLEAPP
  var getUsersReposts = urlUsersPrefix + '/string/reposts?' + appNString
  // GET USER MOST USED TRACK TAGS
  // https://discovery-a.mainnet.audius.radar.tech/v1/users/string/tags?user_id=string&app_name=EXAMPLEAPP
  var userMostUsedTags = urlUsersPrefix + '/string/tags?user_id=string&' + appNString
  // GET USER TRACKS
  // https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP
  var userTracks = urlUsersPrefix + userHandle + '/tracks?' + appNString


  // this section performs searches within the PLAYLISTS
  const urlPlaylistPrefix = urlPrefix + '/playlists'
  // SEARCH PLAYLIST
  // https://discovery-a.mainnet.audius.radar.tech/v1/playlists/search?query=Hot & New&app_name=EXAMPLEAPP
  var playlistSearch = urlPlaylistPrefix + '/search?query=' + searchQuery + '&' + appNString
  const playlistID = '/LRYPG'
  // GET PLAYLIST
  // https://discovery-a.mainnet.audius.radar.tech/v1/playlists/DOPRl?app_name=EXAMPLEAPP
  var playlist = urlPlaylistPrefix + playlistID + '?' + appNString
  // GET PLAYLIST TRACKS
  // https://discovery-a.mainnet.audius.radar.tech/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP
  var playlistTracks = urlPlaylistPrefix + playlistID + '/tracks?' + appNString


  // this section performs searches within the TRACKS
  var urlTracks = urlPrefix + '/tracks'
  // SEARCH TRACKS
  // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP
  var searchTracks = urlTracks + search + searchQuery + '&' + appNString
  // TRENDING TRACKS
  // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/trending?app_name=EXAMPLEAPP
  var trendingTracks = urlTracks + '/trending?' + appNString
  var trackID = '/g6dBx'
  // GET TRACK
  // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD?app_name=EXAMPLEAPP
  var getTrack = urlTracks + trackID + '?' + appNString
  // STREAM TRACK
  // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP
  // this one gets Tracks stream link
  var trackStream = urlTracks + trackID + '/stream?' + appNString
  var trackStream2 = 'https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP'
  console.log(trackStream);

  var playlist = getFetch(playlistTracks).list.then(result => playlist = result)
  setTimeout(() => {
    console.log(playlist);
  }, 1000);

  return (
    <div>
      
    </div>
  )
}
