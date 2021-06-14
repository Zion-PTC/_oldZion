const headers = {
  'Accept':'application/json'
};

fetch('https://discovery-a.mainnet.audius.radar.tech/v1/users/string/tags?user_id=string&app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});