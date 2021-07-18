import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

///// PROMISE
const audiusVersion = `/v1`
const appName = `app_name=ZION`
const section = [`/users`, `/playlists`, `/tracks`]
const search = `/search?query=`

const getAudiusBestContentProvider = new Promise((res, rej) => {
  const getHost = async () => {
    let bestHost;
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    await fetch('https://api.audius.co')
      .then(r => r.json())
      .then(j => j.data)
      .then(d => sample(d))
      .then(r => bestHost = r)
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
  const adjustedUrl = host + audiusVersion + urlEnd
  args.url =  adjustedUrl
  return rawBaseQuery(args, api)
}

export const audiusApi = createApi({
  reducerPath: 'audiusApi',
  // baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    // SEARCH USERS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/search?query=Brownies&app_name=EXAMPLEAPP
    searchUsers: builder.query({
      query: (searchQuery) => ({
        url: `${section[0]}${search}${searchQuery}${appName}`
      })
    }),
    // GET USER
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe?app_name=EXAMPLEAPP
    getUser: builder.query({
      query: (userID) => ({
        url: `${section[0]}/${userID}?${appName}`
      })
    }),
    // GET USER'S FAVORITE TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP
    getUsersFavTracks: builder.query({
      query: (userID) => ({
        url: `${section[0]}/${userID}/favorites?${appName}`
      })
    }),
    // GET USER'S REPOSTS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/string/reposts?app_name=EXAMPLEAPP
    getUsersReposts: builder.query({
      query: (userID) => ({
        url: `${section[0]}/${userID}/reposts?${appName}`
      })
    }),
    // GET USER MOST USED TRACK TAGS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/string/tags?user_id=string&app_name=EXAMPLEAPP
    getUserMostUsedTags: builder.query({
      query: (userID) => ({
        url: `${section[0]}/${userID}/tags?user_id=string&${appName}`
      })
    }),
    // GET USER TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP
    getUserTracks: builder.query({
      query: (userID) => ({
        url: `${section[0]}/${userID}${section[2]}?${appName}`
      }),
    }),
    // SEARCH PLAYLIST
    // https://discovery-a.mainnet.audius.radar.tech/v1/playlists/search?query=Hot & New&app_name=EXAMPLEAPP
    searchPlaylist: builder.query({
      query: (searchQuery) => ({
        url: `${section[1]}${search}${searchQuery}&${appName}`
      })
    }),
    // GET PLAYLIST
    // https://discovery-a.mainnet.audius.radar.tech/v1/playlists/DOPRl?app_name=EXAMPLEAPP
    getPlaylist: builder.query({
      query: (playlistID) => ({
        url: `${section[1]}/${playlistID}?${appName}`
      })
    }),
    // GET PLAYLIST TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP
    getPlaylistTracks: builder.query({
      query: (playlistID) => ({
        url: `${section[1]}/${playlistID}${section[2]}?${appName}`
      }),
    }),
    // SEARCH TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP
    searchTracks: builder.query({
      query: (searchQuery) => ({
        url: `${section[2]}${search}${searchQuery}&${appName}`
      })
    }),
    // TRENDING TRACKS
    // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/trending?app_name=EXAMPLEAPP
    trendingTracks: builder.query({
      query: () => ({
        url: `${section[2]}/trending?${appName}`
      })
    }),
    // GET TRACK
    // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD?app_name=EXAMPLEAPP
    getTrack: builder.query({
      query: (trackID) => ({
        url: `${section[2]}/${trackID}?${appName}`
      })
    }),
    // STREAM TRACK
    // https://discovery-a.mainnet.audius.radar.tech/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP
    // this one gets Tracks stream link
    streamTrack: builder.query({
      query: (trackID) => ({
        url: `${section[2]}/${trackID}/stream?${appName}`,
        responseHandler: (response) => response.url,
      })
      //   ({
      //   method: 'GET',
      //   headers: '',
      // })

    })
  }),
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
  useStreamTrackQuery
} = audiusApi
export default audiusApi.reducer 