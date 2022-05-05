import rt, {
  ThunkAction as rtThunkAction,
  ThunkActionDispatch as rtThunkActionDispatch,
  ThunkDispatch as rtThunkDispatch,
  ThunkMiddleware as rtThunkMiddleware,
} from 'redux-thunk';

// export type ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction extends Action<any>> = rtThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>;
// export type ThunkActionDispatch<T> = rtThunkActionDispatch;
// export type ThunkDispatch = rtThunkDispatch;
// export type ThunkMiddleware = rtThunkMiddleware;

let { withExtraArgument } = rt;
