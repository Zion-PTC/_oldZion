async function fetchAudius(message) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(message);
    }, 2000);
  });
}

class AudiusPlaylist {
  fetch(endpoint) {
    if (endpoint == 1) return fetchAudius("endpoint 1");
    if (endpoint == 2) return fetchAudius("endpoint 2");
    if (endpoint == 3) return fetchAudius("endpoint 3");
    if (endpoint == 4) return fetchAudius("endpoint 4");
  }
}

class AudiusPlaylistProxy {
  static audiusPlaylist = new AudiusPlaylist();
  static cache = {};
  async fetch(endpoint) {
    if (!AudiusPlaylistProxy.cache[endpoint])
      AudiusPlaylistProxy.cache[endpoint] =
        await AudiusPlaylistProxy.audiusPlaylist.fetch(endpoint);
    console.log(AudiusPlaylistProxy.cache[endpoint]);
    return AudiusPlaylistProxy.cache[endpoint];
  }
}

const proxy = new AudiusPlaylistProxy();
await proxy.fetch(1);
await proxy.fetch(1);
await proxy.fetch(2);
await proxy.fetch(3);
await proxy.fetch(4);
await proxy.fetch(1);
await proxy.fetch(2);
await proxy.fetch(3);
await proxy.fetch(4);
