async function slow(message) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(message);
    }, 1000);
  });
}

class ToBeProxied {
  constructor() {
    this.fetch = async function (endpoint) {
      if (endpoint == "1") return slow("response from 1");
      if (endpoint == "2") return slow("response from 2");
      if (endpoint == "3") return slow("response from 3");
      if (endpoint == "4") return slow("response from 4");
    };
  }
}

class Proxy {
  #proxied = new ToBeProxied();
  #cache = {};
  constructor() {}
  async fetch(endpoint) {
    if (!this.#cache[endpoint])
      this.#cache[endpoint] = await this.#proxied.fetch(endpoint);
    console.log(this.#cache[endpoint]);
    return this.#cache[endpoint];
  }
}

async function run() {
  let proxied = new Proxy();

  await proxied.fetch("1");
  await proxied.fetch("2");
  await proxied.fetch("1");
  await proxied.fetch("3");
  await proxied.fetch("2");
  await proxied.fetch("1");
  await proxied.fetch("4");
  await proxied.fetch("3");
  await proxied.fetch("1");
  await proxied.fetch("3");
  await proxied.fetch("2");
  await proxied.fetch("1");
  await proxied.fetch("4");
  await proxied.fetch("3");
}

await run();
