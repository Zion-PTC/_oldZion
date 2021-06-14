// this function makes a requests based on a playlist ID

// this function makes it easy to fetch URLs with fetch() method

export default function audiusGetPlaylistTracks(playlistURL) {
  const headers = { 'Accept': 'application/json' };
  var list = fetch(playlistURL,
    { method: 'GET', headers: headers })
    .then(function (res) {
      return res.json();
    }).then(body => list = body.data)
  return (
    { list }
  )
}