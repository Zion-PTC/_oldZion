const types =[
  'FT',
  'NFT'
]

const contractTypeObj = {
  id: 0,
  name: '',
  EIP: 0,
  type: 0,
  description: ''
}

export const createContractTypeObj = (
  _id,
  _EIP,
  _type,
  _description
) => {
  let buildName = 'erc' + _EIP
  contractTypeObj.id = _id;
  contractTypeObj.name = buildName;
  contractTypeObj.EIP = _EIP;
  contractTypeObj.type = types[_type]
  contractTypeObj.eipUrl = _eipURL
  contractTypeObj.description = _description;
  return contractTypeObj
}