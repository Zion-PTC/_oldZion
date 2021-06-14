import { useState } from "react";

const headers = {
  'Accept': 'application/json'
};
const playlistID = 'LRYPG'
const appName = 'ZION'
const fetchURL = 'https://discoveryprovider2.audius.co/v1/playlists/' + playlistID + '/tracks?app_name=' + appName + ''


export default function ShowData() {
  const [playlistTracks, setplaylistTracks] = useState()
  fetch(fetchURL,
    {
      method: 'GET',
      headers: headers
    })
    .then(function (res) {
      return res.json();
    }).then(function (body) {
      setplaylistTracks(body.data)
    })
  return  <div>{playlistTracks}</div> 
}


