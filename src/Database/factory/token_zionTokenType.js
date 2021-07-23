const zionTokenTypeObj = {
  id: '',
  name: '',
  contractType: '',
  description: '',
}

export const createZionTokenType = (
  _id,
  _name,
  _contractType,
  _description
) => {
  zionTokenTypeObj.id = _id;
  zionTokenTypeObj.name = _name;
  zionTokenTypeObj.contractType = _contractType;
  zionTokenTypeObj.description = _description;
  return zionTokenTypeObj
}
