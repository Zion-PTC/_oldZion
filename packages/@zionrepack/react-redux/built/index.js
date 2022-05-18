import rrdx, { Provider as rrdxProvider, } from 'react-redux';
export let Provider = rrdxProvider;
let { batch, connect, createDispatchHook, createSelectorHook, createStoreHook, shallowEqual, useDispatch, useSelector, useStore, ReactReduxContext, } = rrdx;
export default rrdx;
