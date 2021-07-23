const eipObj = {
  id = 0,
  name = '',
  url = ''
}

const baseName = 'eip-'
const baseUrl = 'https://eips.ethereum.org/EIPS/eip-'

export const createEip = (
  _id,
  _name,
  _url
) => {
  let buildName = baseName + _id
  let buildUrl = baseUrl + _id
  eipObj.id = _id;
  eipObj.name = buildName;
  eipObj.url = buildUrl;
  return eipObj
}