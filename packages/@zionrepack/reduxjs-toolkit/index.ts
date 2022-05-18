import rdjsToolkit, {
  Action as rdjsAction,
  ActionCreator as rdjsActionCreator,
  ActionCreatorWithNonInferrablePayload as rdjsActionCreatorWithNonInferrablePayload,
  ActionCreatorWithOptionalPayload as rdjsActionCreatorWithOptionalPayload,
  ActionCreatorWithPayload as rdjsActionCreatorWithPayload,
  ActionCreatorWithPreparedPayload as rdjsActionCreatorWithPreparedPayload,
  ActionCreatorWithoutPayload as rdjsActionCreatorWithoutPayload,
  ActionCreatorsMapObject as rdjsActionCreatorsMapObject,
  ActionFromReducer as rdjsActionFromReducer,
  ActionFromReducersMapObject as rdjsActionFromReducersMapObject,
  ActionMatchingAllOf as rdjsActionMatchingAllOf,
  ActionMatchingAnyOf as rdjsActionMatchingAnyOf,
  ActionReducerMapBuilder as rdjsActionReducerMapBuilder,
  AnyAction as rdjsAnyAction,
  AsyncTaskExecutor as rdjsAsyncTaskExecutor,
  AsyncThunk as rdjsAsyncThunk,
  AsyncThunkAction as rdjsAsyncThunkAction,
  AsyncThunkOptions as rdjsAsyncThunkOptions,
  AsyncThunkPayloadCreator as rdjsAsyncThunkPayloadCreator,
  AsyncThunkPayloadCreatorReturnValue as rdjsAsyncThunkPayloadCreatorReturnValue,
  Actions as rdjsActions,
  CaseReducer as rdjsCaseReducer,
  CaseReducerActions as rdjsCaseReducerActions,
  CaseReducerWithPrepare as rdjsCaseReducerWithPrepare,
  CombinedState as rdjsCombinedState,
  Comparer as rdjsComparer,
  ConfigureEnhancersCallback as rdjsConfigureEnhancersCallback,
  ConfigureStoreOptions as rdjsConfigureStoreOptions,
  CreateListenerMiddlewareOptions as rdjsCreateListenerMiddlewareOptions,
  CreateSliceOptions as rdjsCreateSliceOptions,
  CaseReducers as rdjsCaseReducers,
  DeepPartial as rdjsDeepPartial,
  Dictionary as rdjsDictionary,
  Dispatch as rdjsDispatch,
  Draft as rdjsDraft,
  EmptyObject as rdjsEmptyObject,
  EnhancedStore as rdjsEnhancedStore,
  EntityAdapter as rdjsEntityAdapter,
  EntityId as rdjsEntityId,
  EntitySelectors as rdjsEntitySelectors,
  EntityState as rdjsEntityState,
  EntityStateAdapter as rdjsEntityStateAdapter,
  ForkedTask as rdjsForkedTask,
  ForkedTaskAPI as rdjsForkedTaskAPI,
  ForkedTaskExecutor as rdjsForkedTaskExecutor,
  Func0 as rdjsFunc0,
  Func1 as rdjsFunc1,
  Func2 as rdjsFunc2,
  Func3 as rdjsFunc3,
  IdSelector as rdjsIdSelector,
  ImmutableStateInvariantMiddlewareOptions as rdjsImmutableStateInvariantMiddlewareOptions,
  ListenerEffect as rdjsListenerEffect,
  ListenerEffectAPI as rdjsListenerEffectAPI,
  ListenerErrorHandler as rdjsListenerErrorHandler,
  ListenerMiddleware as rdjsListenerMiddleware,
  ListenerMiddlewareInstance as rdjsListenerMiddlewareInstance,
  Middleware as rdjsMiddleware,
  MiddlewareAPI as rdjsMiddlewareAPI,
  MiddlewareArray as rdjsMiddlewareArray,
  Observable as rdjsObservable,
  Observer as rdjsObserver,
  OutputParametricSelector as rdjsOutputParametricSelector,
  OutputSelector as rdjsOutputSelector,
  ParametricSelector as rdjsParametricSelector,
  PayloadAction as rdjsPayloadAction,
  PayloadActionCreator as rdjsPayloadActionCreator,
  PreloadedState as rdjsPreloadedState,
  PrepareAction as rdjsPrepareAction,
  Reducer as rdjsReducer,
  ReducerFromReducersMapObject as rdjsReducerFromReducersMapObject,
  ReducersMapObject as rdjsReducersMapObject,
  Selector as rdjsSelector,
  SerializableStateInvariantMiddlewareOptions as rdjsSerializableStateInvariantMiddlewareOptions,
  SerializedError as rdjsSerializedError,
  Slice as rdjsSlice,
  SliceCaseReducers as rdjsSliceCaseReducers,
  StateFromReducersMapObject as rdjsStateFromReducersMapObject,
  Store as rdjsStore,
  StoreCreator as rdjsStoreCreator,
  StoreEnhancer as rdjsStoreEnhancer,
  StoreEnhancerStoreCreator as rdjsStoreEnhancerStoreCreator,
  SyncTaskExecutor as rdjsSyncTaskExecutor,
  SliceActionCreator as rdjsSliceActionCreator,
  TaskAbortError as rdjsTaskAbortError,
  TaskCancelled as rdjsTaskCancelled,
  TaskRejected as rdjsTaskRejected,
  TaskResolved as rdjsTaskResolved,
  TaskResult as rdjsTaskResult,
  ThunkAction as rdjsThunkAction,
  ThunkDispatch as rdjsThunkDispatch,
  TypedAddListener as rdjsTypedAddListener,
  TypedRemoveListener as rdjsTypedRemoveListener,
  TypedStartListening as rdjsTypedStartListening,
  TypedStopListening as rdjsTypedStopListening,
  Unsubscribe as rdjsUnsubscribe,
  UnsubscribeListener as rdjsUnsubscribeListener,
  UnsubscribeListenerOptions as rdjsUnsubscribeListenerOptions,
  Update as rdjsUpdate,
  ValidateSliceCaseReducers as rdjsValidateSliceCaseReducers,
} from '@reduxjs/toolkit';

export type Action = rdjsAction;
export type ActionCreator<A> = rdjsActionCreator<A>;
export type ActionCreatorWithNonInferrablePayload =
  rdjsActionCreatorWithNonInferrablePayload;
export type ActionCreatorWithOptionalPayload<
  P,
  T extends string = string
> = rdjsActionCreatorWithOptionalPayload<P, T>;
export type ActionCreatorWithPayload<
  P,
  T extends string = string
> = rdjsActionCreatorWithPayload<P, T>;
export type ActionCreatorWithPreparedPayload<
  Args extends unknown[],
  P,
  T extends string = string,
  E = never,
  M = never
> = rdjsActionCreatorWithPreparedPayload<Args, P, T, E, M>;
export type ActionCreatorWithoutPayload = rdjsActionCreatorWithoutPayload;
export type ActionCreatorsMapObject = rdjsActionCreatorsMapObject;
export type ActionFromReducer<R> = rdjsActionFromReducer<R>;
export type ActionFromReducersMapObject<M> = rdjsActionFromReducersMapObject<M>;
export type ActionMatchingAllOf<
  Matchers extends [Matcher<any>, ...Matcher<any>[]]
> = rdjsActionMatchingAllOf<Matchers>;
export type ActionMatchingAnyOf<
  Matchers extends [Matcher<any>, ...Matcher<any>[]]
> = rdjsActionMatchingAnyOf<Matchers>;
export type ActionReducerMapBuilder<State> = rdjsActionReducerMapBuilder<State>;
export type AnyAction = rdjsAnyAction;
export type AsyncTaskExecutor<T> = rdjsAsyncTaskExecutor<T>;
export type AsyncThunk<
  Returned,
  ThunkArg,
  ThunkApiConfig extends AsyncThunkConfig
> = rdjsAsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
export type AsyncThunkAction<
  Returned,
  ThunkArg,
  ThunkApiConfig extends AsyncThunkConfig
> = rdjsAsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>;
export type AsyncThunkOptions = rdjsAsyncThunkOptions;
export type AsyncThunkPayloadCreator<
  Returned,
  ThunkArg = void,
  ThunkApiConfig extends AsyncThunkConfig = {}
> = rdjsAsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>;
export type AsyncThunkPayloadCreatorReturnValue<
  Returned,
  ThunkApiConfig extends AsyncThunkConfig
> = rdjsAsyncThunkPayloadCreatorReturnValue<Returned, ThunkApiConfig>;
export type Actions = rdjsActions;
export type CaseReducer = rdjsCaseReducer;
export type CaseReducerActions<CaseReducers extends SliceCaseReducers<any>> =
  rdjsCaseReducerActions<CaseReducers>;
export type CaseReducerWithPrepare = rdjsCaseReducerWithPrepare;
export type CombinedState = rdjsCombinedState;
export type Comparer = rdjsComparer;
export type ConfigureEnhancersCallback = rdjsConfigureEnhancersCallback;
export type ConfigureStoreOptions = rdjsConfigureStoreOptions;
export type CreateListenerMiddlewareOptions =
  rdjsCreateListenerMiddlewareOptions;
export type CreateSliceOptions = rdjsCreateSliceOptions;
export type CaseReducers = rdjsCaseReducers;
export type DeepPartial = rdjsDeepPartial;
export type Dictionary = rdjsDictionary;
export type Dispatch = rdjsDispatch;
export type Draft = rdjsDraft;
export type EmptyObject = rdjsEmptyObject;
export type EnhancedStore = rdjsEnhancedStore;
export type EntityAdapter = rdjsEntityAdapter;
export type EntityId = rdjsEntityId;
export type EntitySelectors = rdjsEntitySelectors;
export type EntityState = rdjsEntityState;
export type EntityStateAdapter = rdjsEntityStateAdapter;
export type ForkedTask = rdjsForkedTask;
export type ForkedTaskAPI = rdjsForkedTaskAPI;
export type ForkedTaskExecutor = rdjsForkedTaskExecutor;
export type Func0 = rdjsFunc0;
export type Func1 = rdjsFunc1;
export type Func2 = rdjsFunc2;
export type Func3 = rdjsFunc3;
export type IdSelector = rdjsIdSelector;
export type ImmutableStateInvariantMiddlewareOptions =
  rdjsImmutableStateInvariantMiddlewareOptions;
export type ListenerEffect = rdjsListenerEffect;
export type ListenerEffectAPI = rdjsListenerEffectAPI;
export type ListenerErrorHandler = rdjsListenerErrorHandler;
export type ListenerMiddleware = rdjsListenerMiddleware;
export type ListenerMiddlewareInstance = rdjsListenerMiddlewareInstance;
export type Middleware = rdjsMiddleware;
export type MiddlewareAPI = rdjsMiddlewareAPI;
export type MiddlewareArray = rdjsMiddlewareArray;
export type Observable = rdjsObservable;
export type Observer = rdjsObserver;
export type OutputParametricSelector = rdjsOutputParametricSelector;
export type OutputSelector = rdjsOutputSelector;
export type ParametricSelector = rdjsParametricSelector;
export type PayloadAction = rdjsPayloadAction;
export type PayloadActionCreator = rdjsPayloadActionCreator;
export type PreloadedState = rdjsPreloadedState;
export type PrepareAction = rdjsPrepareAction;
export type Reducer = rdjsReducer;
export type ReducerFromReducersMapObject = rdjsReducerFromReducersMapObject;
export type ReducersMapObject = rdjsReducersMapObject;
export type Selector = rdjsSelector;
export type SerializableStateInvariantMiddlewareOptions =
  rdjsSerializableStateInvariantMiddlewareOptions;
export type SerializedError = rdjsSerializedError;
export type Slice = rdjsSlice;
export type SliceCaseReducers = rdjsSliceCaseReducers;
export type StateFromReducersMapObject = rdjsStateFromReducersMapObject;
export type Store = rdjsStore;
export type StoreCreator = rdjsStoreCreator;
export type StoreEnhancer = rdjsStoreEnhancer;
export type StoreEnhancerStoreCreator = rdjsStoreEnhancerStoreCreator;
export type SyncTaskExecutor = rdjsSyncTaskExecutor;
export type SliceActionCreator = rdjsSliceActionCreator;
export type TaskAbortError = rdjsTaskAbortError;
export type TaskCancelled = rdjsTaskCancelled;
export type TaskRejected = rdjsTaskRejected;
export type TaskResolved = rdjsTaskResolved;
export type TaskResult = rdjsTaskResult;
export type ThunkAction = rdjsThunkAction;
export type ThunkDispatch = rdjsThunkDispatch;
export type TypedAddListener = rdjsTypedAddListener;
export type TypedRemoveListener = rdjsTypedRemoveListener;
export type TypedStartListening = rdjsTypedStartListening;
export type TypedStopListening = rdjsTypedStopListening;
export type Unsubscribe = rdjsUnsubscribe;
export type UnsubscribeListener = rdjsUnsubscribeListener;
export type UnsubscribeListenerOptions = rdjsUnsubscribeListenerOptions;
export type Update = rdjsUpdate;
export type ValidateSliceCaseReducers = rdjsValidateSliceCaseReducers;

export let addListener = rdjsToolkit.addListener;
export let applyMiddleware = rdjsToolkit.applyMiddleware;
export let bindActionCreators = rdjsToolkit.bindActionCreators;
export let clearAllListeners = rdjsToolkit.clearAllListeners;
export let combineReducers = rdjsToolkit.combineReducers;
export let compose = rdjsToolkit.compose;
export let configureStore = rdjsToolkit.configureStore;
export let createAction = rdjsToolkit.createAction;
export let createAsyncThunk = rdjsToolkit.createAsyncThunk;
export let createDraftSafeSelector = rdjsToolkit.createDraftSafeSelector;
export let createEntityAdapter = rdjsToolkit.createEntityAdapter;
export let createImmutableStateInvariantMiddleware =
  rdjsToolkit.createImmutableStateInvariantMiddleware;
export let createListenerMiddleware = rdjsToolkit.createListenerMiddleware;
export let createNextState = rdjsToolkit.createNextState;
export let createReducer = rdjsToolkit.createReducer;
export let createSelector = rdjsToolkit.createSelector;
export let createSerializableStateInvariantMiddleware =
  rdjsToolkit.createSerializableStateInvariantMiddleware;
export let createSlice = rdjsToolkit.createSlice;
export let current = rdjsToolkit.current;
export let createStore = rdjsToolkit.createStore;
export let findNonSerializableValue = rdjsToolkit.findNonSerializableValue;
export let freeze = rdjsToolkit.freeze;
export let getType = rdjsToolkit.getType;
export let getDefaultMiddleware = rdjsToolkit.getDefaultMiddleware;
export let isAllOf = rdjsToolkit.isAllOf;
export let isAnyOf = rdjsToolkit.isAnyOf;
export let isAsyncThunkAction = rdjsToolkit.isAsyncThunkAction;
export let isDraft = rdjsToolkit.isDraft;
export let isFulfilled = rdjsToolkit.isFulfilled;
export let isImmutableDefault = rdjsToolkit.isImmutableDefault;
export let isPending = rdjsToolkit.isPending;
export let isPlain = rdjsToolkit.isPlain;
export let isPlainObject = rdjsToolkit.isPlainObject;
export let isRejected = rdjsToolkit.isRejected;
export let isRejectedWithValue = rdjsToolkit.isRejectedWithValue;
export let legacy_createStore = rdjsToolkit.legacy_createStore;
export let miniSerializeError = rdjsToolkit.miniSerializeError;
export let nanoid = rdjsToolkit.nanoid;
export let original = rdjsToolkit.original;
export let removeListener = rdjsToolkit.removeListener;
export let unwrapResult = rdjsToolkit.unwrapResult;
