import { contractTypes } from "../tokens/contractTypes"

const chains = [
  'MainNetwork',
  'Ropstein',
  'Kovan',
  'Rinkeby',
  'Goerli',
  'xDai',
  'BSX',
  'Polygon-Matic'
]

const tokenObj = {
  id: 0,
  name: '',
  symbol: '',
  chainId: '',
  address: 'hash',
  contractType: 0,
  logoURL: '',
  isZionToken: false,
  zionTokenType: ''
}

export const createToken = (
  _id,
  _name,
  _symbol,
  _chainId,
  _address,
  _contractType,
) => {
  tokenObj.id = _id;
  tokenObj.name = _name;
  tokenObj.symbol = _symbol;
  tokenObj.chainId = chains[_chainId];
  tokenObj.address = _address;
  tokenObj.contractType = _contractType;
  tokenObj.logoURL = _logoURL;
  return tokenObj
}