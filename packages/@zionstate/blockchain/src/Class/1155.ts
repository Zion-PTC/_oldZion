type tuple = [number | undefined, string | undefined];
type map = [tuple];
class erc1155 {
  map: map = [[undefined, undefined]];
  supply: [[number | undefined, number | undefined]] = [[undefined, undefined]];
  tokenName: string = "";
  tokenSymbol: string = "";
  constructor() {}
  mint(to: string, id: number, amount: number, data: string) {
    const tokenIdSupply = this.supply.find((tuple) => tuple[0] === id);
    if (tokenIdSupply === undefined) return;
    if (tokenIdSupply[0] === undefined) return;
    if (tokenIdSupply[1] === undefined) return;
    if (tokenIdSupply[1] > 1) return;
    this.#mint(to, id, 1, data);
  }
  #mint(to: string, id: number, amount: number, data: string) {
    if (this.map[0] === undefined) this.map.pop();
    this.map.push([id, to]);
  }
}
