// this function makes a requests based on a playlist ID

// this function makes it easy to fetch URLs with fetch() method

// export default function audiusGetPlaylistTracks(url) {
//   const headers = { 'Accept': 'application/json' };
//   var list = fetch(url,
//     { method: 'GET', headers: headers })
//     .then(function (res) {
//       return res.json();
//     }).then(body => list = body.data)
//   return (
//     { list }
//   )
// }

// for track stream link use this

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});


export default function audiusGetPlaylistTracks(url) {
  var list = fetch(url,
    { method: 'GET' })
    .then(function (res) {
      return res.json();
    }).then(body => list = body)
    console.log(list);
  return (
    { list }
  )
}