import r, {
  Action as rAction,
  ActionCreator as rActionCreator,
  ActionCreatorsMapObject as rActionCreatorsMapObject,
  ActionFromReducer as rActionFromReducer,
  ActionFromReducersMapObject as rActionFromReducersMapObject,
  AnyAction as rAnyAction,
  CombinedState as rCombinedState,
  DeepPartial as rDeepPartial,
  Dispatch as rDispatch,
  EmptyObject as rEmptyObject,
  Func0 as rFunc0,
  Func1 as rFunc1,
  Func2 as rFunc2,
  Func3 as rFunc3,
  Middleware as rMiddleware,
  MiddlewareAPI as rMiddlewareAPI,
  Observable as rObservable,
  Observer as rObserver,
  PreloadedState as rPreloadedState,
  Reducer as rReducer,
  ReducerFromReducersMapObject as rReducerFromReducersMapObject,
  ReducersMapObject as rReducersMapObject,
  StateFromReducersMapObject as rStateFromReducersMapObject,
  Store as rStore,
  StoreCreator as rStoreCreator,
  StoreEnhancer as rStoreEnhancer,
  StoreEnhancerStoreCreator as rStoreEnhancerStoreCreator,
  Unsubscribe as rUnsubscribe,
} from 'redux';

export type Action = rAction;
export type ActionCreator<A> = rActionCreator<A>;
export type ActionCreatorsMapObject = rActionCreatorsMapObject;
export type ActionFromReducer<R> = rActionFromReducer<R>;
export type ActionFromReducersMapObject<M> = rActionFromReducersMapObject<M>;
export type AnyAction = rAnyAction;
export type CombinedState<S> = rCombinedState<S>;
export type DeepPartial<T> = rDeepPartial<T>;
export type Dispatch = rDispatch;
export type EmptyObject = rEmptyObject;
export type Func0<R> = rFunc0<R>;
export type Func1<T1, R> = rFunc1<T1, R>;
export type Func2<T1, T2, R> = rFunc2<T1, T2, R>;
export type Func3<T1, T2, T3, R> = rFunc3<T1, T2, T3, R>;
export type Middleware = rMiddleware;
export type MiddlewareAPI = rMiddlewareAPI;
export type Observable<T> = rObservable<T>;
export type Observer<T> = rObserver<T>;
export type PreloadedState<S> = rPreloadedState<S>;
export type Reducer = rReducer;
export type ReducerFromReducersMapObject<M> = rReducerFromReducersMapObject<M>;
export type ReducersMapObject = rReducersMapObject;
export type StateFromReducersMapObject<M> = rStateFromReducersMapObject<M>;
export type Store = rStore;
export type StoreCreator = rStoreCreator;
export type StoreEnhancer = rStoreEnhancer;
export type StoreEnhancerStoreCreator = rStoreEnhancerStoreCreator;
export type Unsubscribe = rUnsubscribe;

export let applyMiddleware = r.applyMiddleware;
export let bindActionCreators = r.bindActionCreators;
export let combineReducers = r.combineReducers;
export let compose = r.compose;
export let createStore = r.createStore;
export let legacy_createStore = r.legacy_createStore;
