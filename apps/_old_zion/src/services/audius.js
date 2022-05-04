import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

///// PROMISE
const audiusVersion = `/v1`
const appName = `app_name=ZION`
const section = [`/users`, `/playlists`, `/tracks`, `/search`]
const search = `/search?query=`
const tagsQuery = `/tags?&query=`
const tagsQueryEnd = `&user_tag_count=1`

const getAudiusBestContentProvider = new Promise((res, rej) => {
  const getHost = async () => {
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    let res = await fetch('https://api.audius.co')
    let json = await res.json()
    let data = await json.data
    let bestHost = sample(data)
    return bestHost
  }
  if (getHost !== undefined) {
    res(getHost())
  }
  else { rej('error') }
})

const rawBaseQuery = fetchBaseQuery({
  baseUrl: ''
})

const dynamicBaseQuery = async (args, api) => {
  let host = await getAudiusBestContentProvider
  const urlEnd = args.url
  const adjustedUrl = host + urlEnd
  args.url =  adjustedUrl
  // console.log(adjustedUrl);          handy to check the endpoint url
  return rawBaseQuery(args, api)
}

export const audiusApi = createApi({
  reducerPath: 'audiusApi',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    // SEARCH USERS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/search?query=Brownies&app_name=EXAMPLEAPP
    searchUsers: builder.query({
      query: (searchQuery) => ({
        url: `${audiusVersion}${section[0]}${search}${searchQuery}${appName}`
      })
    }),
    // GET USER
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe?app_name=EXAMPLEAPP
    getUser: builder.query({
      query: (userID) => ({
        url: `${audiusVersion}${section[0]}/${userID}?${appName}`
      })
    }),
    // GET USER'S FAVORITE TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP
    getUsersFavTracks: builder.query({
      query: (userID) => ({
        url: `${audiusVersion}${section[0]}/${userID}/favorites?${appName}`
      })
    }),
    // GET USER'S REPOSTS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/string/reposts?app_name=EXAMPLEAPP
    getUsersReposts: builder.query({
      query: (userID) => ({
        url: `${audiusVersion}${section[0]}/${userID}/reposts?${appName}`
      })
    }),
    // GET USER MOST USED TRACK TAGS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/string/tags?user_id=string&app_name=EXAMPLEAPP
    getUserMostUsedTags: builder.query({
      query: (userID) => ({
        url: `${audiusVersion}${section[0]}/${userID}/tags?user_id=string&${appName}`
      })
    }),
    // GET USER TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP
    getUserTracks: builder.query({
      query: (userID) => ({
        url: `${audiusVersion}${section[0]}/${userID}${section[2]}?${appName}`
      })
    }),
    // SEARCH PLAYLIST
    // https://discovery-a.mainnet.audius.radar.tech/v1/playlists/search?query=Hot & New&app_name=EXAMPLEAPP
    searchPlaylist: builder.query({
      query: (searchQuery) => ({
        url: `${audiusVersion}${section[1]}${search}${searchQuery}&${appName}`
      })
    }),
    // GET PLAYLIST
    // https://discovery-a.mainnet.audius.radar.tech/v1/playlists/DOPRl?app_name=EXAMPLEAPP
    getPlaylist: builder.query({
      query: (playlistID) => ({
        url: `${audiusVersion}${section[1]}/${playlistID}?${appName}`
      })
    }),
    // GET PLAYLIST TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP
    getPlaylistTracks: builder.query({
      query: (playlistID) => ({
        url: `${audiusVersion}${section[1]}/${playlistID}${section[2]}?${appName}`
      })
    }),
    // SEARCH TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP
    searchTracks: builder.query({
      query: (searchQuery) => ({
        url: `${audiusVersion}${section[2]}${search}${searchQuery}&${appName}`
      })
    }),
    // TRENDING TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/trending?app_name=EXAMPLEAPP
    trendingTracks: builder.query({
      query: () => ({
        url: `${audiusVersion}${section[2]}/trending?${appName}`
      })
    }),
    // GET TRACK
    // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD?app_name=EXAMPLEAPP
    getTrack: builder.query({
      query: (trackID) => ({
        url: `${audiusVersion}${section[2]}/${trackID}?${appName}`
      })
    }),
    // STREAM TRACK
    // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP
    // this one gets Tracks stream link
    streamTrack: builder.query({
      query: (trackID) => ({
        url: `${audiusVersion}${section[2]}/${trackID}/stream?${appName}`,
        responseHandler: (response) => response.url,
      })
    }),
    // SEARCH TAGS
    // https://audius-dp.nuremberg.creatorseed.com/v1/search/tags?kind=all&limit=15&offset=0&query=tnl25&user_tag_count=1
    // this one gets Tracks stream link
    searchTags: builder.query({
      query: (query) => ({
        url: `${section[3]}${tagsQuery}${query}${tagsQueryEnd}`
      })
    })
  })
})

export const {
  useSearchUsersQuery,
  useGetUserQuery,
  useGetUsersFavTracksQuery,
  useGetUsersRepostsQuery,
  useGetUserMostUsedTagsQuery,
  useGetUserTracksQuery,
  useSearchPlaylistQuery,
  useGetPlaylistQuery,
  useGetPlaylistTracksQuery,
  useSearchTracksQuery,
  useTrendingTracksQuery,
  useGetTrackQuery,
  useStreamTrackQuery,
  useSearchTagsQuery
} = audiusApi
export default audiusApi.reducer 