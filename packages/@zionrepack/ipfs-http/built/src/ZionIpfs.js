import * as IPFSHTTP from "ipfs-http-client";
export class ZionIpfs {
    id;
    constructor(id = `I'm going to be coool`) {
        this.id = id;
        this.id = id;
        this.temp = this.#createIpfs();
        this.#load();
    }
    async #createIpfs() {
        return IPFSHTTP.create({
            host: "127.0.0.1",
            port: 5002,
        });
    }
    async #load() {
        const ipfs = await this.temp;
        return ipfs;
    }
    async cat(entry) {
        if (!this.ipfs)
            this.ipfs = await this.#load();
        const res = this.ipfs.cat(entry);
        let data;
        for await (const r of res) {
            data = Buffer.from(r).toString();
        }
        return data;
    }
    async add(entry, options) {
        if (!this.ipfs)
            this.ipfs = await this.#load();
        return this.ipfs.add(entry, options);
    }
    async addPin(cid, options) {
        this.ipfs?.pin.add(cid, options);
    }
    async listPins(options) {
        if (!this.ipfs)
            this.ipfs = await this.#load();
        const res = this.ipfs.pin.ls(options);
        let data = [];
        for await (const r of res) {
            data.push(r);
        }
        return data;
    }
    async deletePin(ipfsPath, options) {
        this.ipfs?.pin.rm(ipfsPath, options);
    }
}
// https://ipfs.io/ipfs/QmZV4Yg9HyX5EnHJfi5KJxEy4MjdYQ9y2i8u8uxm721bWN?filename=QmZV4Yg9HyX5EnHJfi5KJxEy4MjdYQ9y2i8u8uxm721bWN
