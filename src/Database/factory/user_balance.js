const balanceObj = {
  id: 0,
  token: 0,
  amount: 0,
  userId: 0
}

export const createBalance = (
  _id,
  _token,
  _amount,
  _userId
) => {
  balanceObj.id = _id
  balanceObj.token = _token
  balanceObj.amount = _amount
  balanceObj.userId = _userId
  return balanceObj
}