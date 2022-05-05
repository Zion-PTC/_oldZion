import rrdx, {
  AdvancedComponentDecorator as rrdxAdvancedComponentDecorator,
  AnyIfEmpty as rrdxAnyIfEmpty,
  Connect as rrdxConnect,
  ConnectProps as rrdxConnectProps,
  ConnectedComponent as rrdxConnectedComponent,
  ConnectedProps as rrdxConnectedProps,
  DispatchProp as rrdxDispatchProp,
  DistributiveOmit as rrdxDistributiveOmit,
  EqualityFn as rrdxEqualityFn,
  FixTypeLater as rrdxFixTypeLater,
  GetLibraryManagedProps as rrdxGetLibraryManagedProps,
  GetProps as rrdxGetProps,
  HandleThunkActionCreator as rrdxHandleThunkActionCreator,
  InferThunkActionCreatorType as rrdxInferThunkActionCreatorType,
  InferableComponentEnhancer as rrdxInferableComponentEnhancer,
  InferableComponentEnhancerWithProps as rrdxInferableComponentEnhancerWithProps,
  MapDispatchToProps as rrdxMapDispatchToProps,
  MapDispatchToPropsFactory as rrdxMapDispatchToPropsFactory,
  MapDispatchToPropsFunction as rrdxMapDispatchToPropsFunction,
  MapDispatchToPropsNonObject as rrdxMapDispatchToPropsNonObject,
  MapDispatchToPropsParam as rrdxMapDispatchToPropsParam,
  MapStateToProps as rrdxMapStateToProps,
  MapStateToPropsFactory as rrdxMapStateToPropsFactory,
  MapStateToPropsParam as rrdxMapStateToPropsParam,
  Matching as rrdxMatching,
  MergeProps as rrdxMergeProps,
  Provider as rrdxProvider,
  ProviderProps as rrdxProviderProps,
  ReactReduxContextValue as rrdxReactReduxContextValue,
  ResolveThunks as rrdxResolveThunks,
  Selector as rrdxSelector,
  SelectorFactory as rrdxSelectorFactory,
  Shared as rrdxShared,
  Subscription as rrdxSubscription,
  TypedUseSelectorHook as rrdxTypedUseSelectorHook,
} from 'react-redux';

export type AdvancedComponentDecorator<TProps, TOwnProps> =
  rrdxAdvancedComponentDecorator<TProps, TOwnProps>;
export type AnyIfEmpty<T extends object> = rrdxAnyIfEmpty<T>;
export type Connect = rrdxConnect;
export type ConnectProps = rrdxConnectProps;
// export type ConnectedComponent<
//   C extends ComponentType<any>,
//   P
// > = rrdxConnectedComponent<C, P>;
export type ConnectedProps<TConnector> = rrdxConnectedProps<TConnector>;
export type DispatchProp = rrdxDispatchProp;
export type DistributiveOmit<T, K extends keyof T> = rrdxDistributiveOmit<T, K>;
export type EqualityFn<T> = rrdxEqualityFn<T>;
export type FixTypeLater = rrdxFixTypeLater;
export type GetLibraryManagedProps<C> = rrdxGetLibraryManagedProps<C>;
export type GetProps<C> = rrdxGetProps<C>;
export type HandleThunkActionCreator<TActionCreator> =
  rrdxHandleThunkActionCreator<TActionCreator>;
export type InferThunkActionCreatorType<
  TActionCreator extends (...args: any[]) => any
> = rrdxInferThunkActionCreatorType<TActionCreator>;
export type InferableComponentEnhancer<TInjectedProps> =
  rrdxInferableComponentEnhancer<TInjectedProps>;
export type InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> =
  rrdxInferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps>;
export type MapDispatchToProps<TDispatchProps, TOwnProps> =
  rrdxMapDispatchToProps<TDispatchProps, TOwnProps>;
export type MapDispatchToPropsFactory<TDispatchProps, TOwnProps> =
  rrdxMapDispatchToPropsFactory<TDispatchProps, TOwnProps>;
export type MapDispatchToPropsFunction<TDispatchProps, TOwnProps> =
  rrdxMapDispatchToPropsFunction<TDispatchProps, TOwnProps>;
export type MapDispatchToPropsNonObject<TDispatchProps, TOwnProps> =
  rrdxMapDispatchToPropsNonObject<TDispatchProps, TOwnProps>;
export type MapDispatchToPropsParam<TDispatchProps, TOwnProps> =
  rrdxMapDispatchToPropsParam<TDispatchProps, TOwnProps>;
export type MapStateToProps<TStateProps, TOwnProps, State> =
  rrdxMapStateToProps<TStateProps, TOwnProps, State>;
export type MapStateToPropsFactory<TStateProps, TOwnProps, State> =
  rrdxMapStateToPropsFactory<TStateProps, TOwnProps, State>;
export type MapStateToPropsParam<TStateProps, TOwnProps, State> =
  rrdxMapStateToPropsParam<TStateProps, TOwnProps, State>;
export type Matching<InjectedProps, DecorationTargetProps> = rrdxMatching<
  InjectedProps,
  DecorationTargetProps
>;
export type MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> =
  rrdxMergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>;
export let Provider = rrdxProvider;
export type ProviderProps = rrdxProviderProps;
export type ReactReduxContextValue = rrdxReactReduxContextValue;
export type ResolveThunks<TDispatchProps> = rrdxResolveThunks<TDispatchProps>;
export type Selector<S, TProps, TOwnProps = null> = rrdxSelector<
  S,
  TProps,
  TOwnProps
>;
export type SelectorFactory<S, TProps, TOwnProps, TFactoryOptions> =
  rrdxSelectorFactory<S, TProps, TOwnProps, TFactoryOptions>;
export type Shared<InjectedProps, DecorationTargetProps> = rrdxShared<
  InjectedProps,
  DecorationTargetProps
>;
export type Subscription = rrdxSubscription;
export type TypedUseSelectorHook<TState> = rrdxTypedUseSelectorHook<TState>;

let {
  batch,
  connect,
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
  shallowEqual,
  useDispatch,
  useSelector,
  useStore,
  ReactReduxContext,
} = rrdx;

export default rrdx;
