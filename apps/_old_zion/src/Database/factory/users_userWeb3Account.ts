export const userWeb3AccountObj = {
  id: null,
  isEth: null,
  isConnected: null,
  userAddr: null,
  userChain: null,
  web3Balance: null,
  isLoading: false
}

export const createUserWeb3Account = (
  _id,
  _isEth,
  _isConnected,
  _userAddr,
  _userChain,
  _web3Balance,
  _isLoading
) => {
  userWeb3AccountObj.id = _id
  userWeb3AccountObj.isEth = _isEth
  userWeb3AccountObj.isConnected = _isConnected
  userWeb3AccountObj.userAddr = _id
  userWeb3AccountObj.userChain = _userChain
  userWeb3AccountObj.web3Balance = _web3Balance
  userWeb3AccountObj.isLoading = _isLoading
  return userWeb3AccountObj
}