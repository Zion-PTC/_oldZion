export const zionLoggerMiddleware = store => next => action => {
  let returnValue = next(action)
  const Style = {
    type: [
      "color: #eef606",
      "background-color: #444",
      "padding: 2px 4px",
      "border-radius: 2px"
    ],
    payload: [
      "color: black",
      "background-color: grey"
    ],
    fulfilled: [
      "color: black",
      "background-color: green"
    ],
    rejected: [
      "color: black",
      "background-color: red"
    ],
    pending: [
      "color: black",
      "background-color: #eef606"
    ]
  }
  const log = (text, extra = [], payload) => {
    let style = Style.type.join(';') + ';';
    style += extra.join(';');
    console.log(`%c${text}`, style, payload);
  };
  if (action === undefined) { log('undefined action', Style.warning, undefined) }
  switch (true) {
    case (action.type === 'audiusApi/config/middlewareRegistered'): break;
    case (action.type === '__rtkq/focused'): break;
    case (action.type.includes('fulfilled')):
      log('type:', undefined, returnValue.type);
      log('payload', Style.fulfilled, returnValue.payload);
      break;
    case (action.type.includes('rejected')):
      log('type:', undefined, returnValue.type);
      log('payload', Style.rejected, returnValue.payload);
      break;
    case (action.type.includes('pending')):
      log('type:', undefined, returnValue.type);
      log('payload', Style.pending, returnValue.payload);
      break;
    default:
      log('type:', undefined, returnValue.type);
      log('payload', Style.payload, returnValue.payload);
      break;
  }
  return returnValue

}