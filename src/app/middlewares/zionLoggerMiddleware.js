export const zionLoggerMiddleware = store => next => action => {
  let returnValue = next(action)
  const Style = {
    base: [
      "color: #eef606",
      "background-color: #444",
      "padding: 2px 4px",
      "border-radius: 2px"
    ],
    payload: [
      "color: black",
      "background-color: #eef606",
      "padding: 2px 4px",
      "border-radius: 2px"
    ],
    warning: [
      "color: #eee",
      "background-color: red"
    ],
    success: [
      "background-color: green"
    ]
  }
  const log = (text, extra = [], payload) => {
    let style = Style.base.join(';') + ';';
    style += extra.join(';');
    console.log(`%c${text}`, style, payload);
  };
  if (action === undefined) { log('undefined action', Style.warning, undefined) }
  else if (action.type !== 'audiusApi/config/middlewareRegistered') {
    log('type:', undefined, returnValue.type);
    log('payload', Style.payload, returnValue.payload);
    return returnValue
  };
}