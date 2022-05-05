import fetch from 'node-fetch'

export let audius = {
  createHashtagPlaylist: async (query) => {
    console.log("createPlaylist called");
    let createdPlaylist
    let host = await audius.getFastestHost()
    let hashtag = await fetch(host + "/search/tags?kind=all&limit=15&offset=0&query=" + query + "&user_tag_count=1")
    let res = await hashtag.json()
    let data = res.data
    let { tracks: trackNames, users } = await data
    let titles = trackNames.map(track => track.title)
    if (titles) {
      console.log("titles ready", titles.length);
      let tracks = []
      for (let index = 0; index < titles.length; index++) {
        const title = titles[index];
        let res = await audius.fetchAudius("searchTrack", title)
        let data = res.data
        let obj
        if (data) {
          let stream = await audius.fetchAudius("streamTrack", await data[0].id)
          obj = {
            data: data[0],
            stream
          }
          tracks.push(obj)
          console.log("counter",tracks.length);
        }
      }
      if (tracks) {
        console.log("tracks ready", tracks.length);
        let playlist = []
        for (let index = 0; index < tracks.length; index++) {
          const res = tracks[index];
          let { data: track, stream } = res
          let trackData = track
          let { id, title, mood, user, duration, artwork } = trackData
          let { handle, name } = user
          let trackObj = {
            id,
            title,
            duration,
            handle,
            name,
            mood,
            thumb: artwork["150x150"],
            stream
          }
          playlist.push(trackObj)
        }
        createdPlaylist = playlist
      }
    }
    return createdPlaylist
  },
  fetchAudius: async (type, query) => { /* FATTO */
    try {
      let fetchAttrObj = await audius.makeUrl(type, query)
      let res = await fetch(fetchAttrObj.url, fetchAttrObj.options)
      let data
      if (type === "streamTrack") {
        let url = res[Object.getOwnPropertySymbols(res)[1]].url
        let obj = {
          url,
          stream: res
        }
        data = obj
      } else {
        data = await res.json()
      }
      return data
    } catch (error) {
      return error.message
    }
  },
  getFastestHost: async () => { /* FATTO */
    try {
      const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
      return fetch('https://api.audius.co')
        .then(r => r.json())
        .then(j => j.data)
        .then(d => sample(d))
    } catch (e) {
      // console.log(e);
    }
  },
  makeUrl: async (type, query) => { /* FATTO */
    try {
      let host = await audius.getFastestHost()
      let version = "/v1"
      let USERS = "/users"
      let TRACKS = "/tracks"
      let PLAYLISTS = "/playlists"
      let FAVORITES = "/favorites"
      let REPOSTS = "/reposts"
      let TRENDING = "/trending"
      let TAGS = "/tags"
      let USERID = "?user_id="
      let URL = "?url="
      let STRING = "/string"
      let RESOLVE = "/resolve"
      let METRICS = "/metrics/app_name/trailing"
      let SEARCH = "/search?query="
      let STREAM = "/stream"
      let APP = "zion_dapp"
      let APPNAMESEARCH = "&app_name=" + APP
      let APPNAME = "?app_name=" + APP
      let QUERY = "/" + query

      let method = "GET"
      let headers = { "Accept": "application/json" }

      let getPlaylist = {
        url: host + version + PLAYLISTS + QUERY,
        options: { method, headers }
      }

      let getPlaylistTracks = {
        url: host + version + PLAYLISTS + QUERY + TRACKS + APPNAME,
        options: { method, headers }
      }
      let getTrack = {
        url: host + version + TRACKS + QUERY + APPNAME,
        options: { method, headers }
      }

      let getUser = {
        url: host + version + USERS + QUERY + APPNAME,
        options: { method, headers }
      }
      let getUserFavoriteTracks = {
        url: host + version + USERS + QUERY + FAVORITES + APP,
        options: { method, headers }
      }
      let getUserMostUsedTags = {
        url: host + version + USERS + STRING + TAGS + USERID + query + APPNAMESEARCH,
        options: { method, headers }
      }
      let getUserRepost = {
        url: host + version + USERS + STRING + REPOSTS + APPNAME,
        options: { method, headers }
      }

      let searchPlaylist = {
        url: host + version + PLAYLISTS + SEARCH + query + APPNAMESEARCH,
        options: { method, headers }
      }
      let searchTrack = {
        url: host + version + TRACKS + SEARCH + query + APPNAMESEARCH,
        options: { method, headers }
      }
      let searchUsers = {
        url: host + version + USERS + SEARCH + query + APPNAMESEARCH,
        options: { method, headers }
      }

      let streamTrack = {
        url: host + version + TRACKS + QUERY + STREAM + APPNAME,
        options: { method }
      }
      let userTracks = {
        url: host + version + USERS + QUERY + TRACKS + APPNAME,
        options: { method, headers }
      }
      let trendingTracks = {
        url: host + version + TRACKS + TRENDING + APPNAME,
        options: { method, headers }
      }

      let getTrailingMetrics = {
        url: host + version + METRICS + QUERY + APPNAME,
        options: { method, headers }
      }
      let resolveUrl = "https://audius.co/camouflybeats/hypermantra-86216"
      let resolve = {
        url: host + version + RESOLVE + URL + resolveUrl + APPNAMESEARCH + APP,
        options: { method, headers: { "Accept": "text/plain" } }
      }


      let result

      switch (type) {
        case "getPlaylist":
          result = getPlaylist
          break;
        case "getPlaylistTracks":
          result = getPlaylistTracks
          break;
        case "getTrack":
          result = getTrack
          break;
        case "getUser":
          result = getUser
          break;
        case "getUserFavoriteTracks":
          result = getUserFavoriteTracks
          break;
        case "getUserMostUsedTags":
          result = getUserMostUsedTags
          break;
        case "getUserRepost":
          result = getUserRepost
          break;
        case "searchPlaylist":
          result = searchPlaylist
          break;
        case "searchTrack":
          result = searchTrack
          break;
        case "searchUsers":
          result = searchUsers
          break;
        case "streamTrack":
          result = streamTrack
          break;
        case "userTracks":
          result = userTracks
          break;
        case "trendingTracks":
          result = trendingTracks
          break;
        case "getTrailingMetrics":
          result = getTrailingMetrics
          break;
        case "resolve":
          result = resolve
          break;

        default:
          break;
      }
      return result
    } catch (error) {
      console.log(error);
    }
  }
}