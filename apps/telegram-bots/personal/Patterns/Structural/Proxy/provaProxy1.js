import { Audius } from '../../../../Classes/Audius.js';

function AudiusProxy() {
  let audius = new Audius();
  let audiuscache = {};
  return {
    fetchAudius: async function (type, query) {
      if (!audiuscache[type]) {
        audiuscache[type] = {};
        if (!audiuscache[type][query]) {
          audiuscache[type][query] =
            await audius.fetchAudius(type, query);
          return audiuscache[type][query];
        }
      }
      console.log('returned from cache');
      return audiuscache[type][query];
    },
    getCount: function () {
      let count = 0;
      for (let code in audiuscache) {
        count++;
      }
      return count;
    },
  };
}

let encode = (string) => {
  return Buffer.from(string).toString('base64');
};
let decode = (base64) => {
  return Buffer.from(base64, 'base64').toString('ascii');
};

let encoded = encode('Ciao');
let decoded = decode(encoded);
console.log(encoded);
console.log(decoded);

let pro = new AudiusProxy();
// await pro.fetchAudius("searchTag", "tnldao")
// // console.log(res);
// console.log(pro.getCount());
// let res2 = await pro.fetchAudius("searchTag", "tnldao")
// console.log(res2);
