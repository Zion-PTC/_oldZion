import React, { useEffect, useState } from 'react'
import ProductTrack from './ProductTrack';
import showData from '../../_JS Functions/Audius Fetch/Playlist Tracks';

const list = showData

export default function TNLAudiusPlaylist() {
  const [playlistTracks, setplaylistTracks] = useState()
  const playlistID = 'LRYPG'
  const appName = 'ZION'
  var playlistTracksObject = { playlistTracks }
  localStorage.setItem("playlistTracksObject", JSON.stringify(playlistTracksObject));
  var jsonString = localStorage.getItem("playlistTracksObject");
  var retrievedObject = JSON.parse(jsonString);
  var userTrackMap = ''


  useEffect(() => {
    const headers = {
      'Accept': 'application/json'
    };
    fetch('https://discoveryprovider2.audius.co/v1/playlists/' + playlistID + '/tracks?app_name=' + appName + '',
      {
        method: 'GET',
        headers: headers
      })
      .then(function (res) {
        return res.json();
      }).then(function (body) {
        setplaylistTracks(body.data)
      })
  }, [])

  if (retrievedObject.playlistTracks == undefined) {
    userTrackMap = <div>LOADING SOME GOOD MUSIC =)</div>
  } else {
    userTrackMap = retrievedObject.playlistTracks.map((userTrack) =>
      <ProductTrack
        key={userTrack.id}
        trackID={userTrack.id}
        artwork={userTrack.artwork["1000x1000"]}
        title={userTrack.title}
        artist={userTrack.user.handle}
        duration={userTrack.duration}
      >
      </ProductTrack>)
  }
  return (
    <>
      {userTrackMap}
    </>
  )
}
