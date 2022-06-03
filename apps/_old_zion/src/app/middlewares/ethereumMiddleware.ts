import { isEth, isConnected } from "../../features/ethereum/ethereumSlice";

export const ethereumMiddleware = store => next => action => {
  if (action.type === 'ethereum/setUserWeb3Infos') {
    // let eth = window.ethereum
    action.payload = 'works';
    // let isEthOn = store.dispatch(isEth(eth))
    // store.dispatch(isConnected(eth))
    return next(action)
  }
  return next(action)
}