var playlistTracks = []
const playlistID = 'LRYPG'
const appName = 'ZION'
var playlistTracksObject = { playlistTracks }
localStorage.setItem("playlistTracksObject", JSON.stringify(playlistTracksObject));
var jsonString = localStorage.getItem("playlistTracksObject");
var retrievedObject = JSON.parse(jsonString);
const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider2.audius.co/v1/playlists/'+playlistID+'/tracks?app_name='+appName+'',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    playlistTracks = body.data
    console.log(body.data);
});


// questa funzione era allinterna del componente TNL playlist, ed avevo utilizzato il metodo per
// trasformare larray in un oggetto, e metterlo nel local storage