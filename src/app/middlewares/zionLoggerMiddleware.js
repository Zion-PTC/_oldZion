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
      "background-color: #eef606",
      "padding: 2px 4px",
      "border-radius: 2px"
    ],
    fulfilled: [
      "color: black",
      "background-color: green",
      "padding: 2px 4px",
      "border-radius: 2px"
    ],
    rejected: [
      "color: black",
      "background-color: red",
      "padding: 2px 4px",
      "border-radius: 2px"
    ],
    pending: [
      "color: black",
      "background-color: grey",
      "padding: 2px 4px",
      "border-radius: 2px"
    ]
  }
  const log = (text, extra = [], payload) => {
    let style = Style.type.join(';') + ';';
    style += extra.join(';');
    console.log(`%c${text}`, style, payload);
  };
  let defineStyle =  () => {
    return 
    
  }
  if (action === undefined) { log('undefined action', Style.warning, undefined) }
  else if (action.type !== 'audiusApi/config/middlewareRegistered' && action.type !==  '__rtkq/focused') {
    
    if (action.type.includes('fulfilled')) {
      log('type:', undefined, returnValue.type);
      log('payload', Style.fulfilled, returnValue.payload);
    }
    if (action.type.includes('rejected')) {
      log('type:', undefined, returnValue.type);
      log('payload', Style.rejected, returnValue.payload);
    }
    if (action.type.includes('pending')) {
      log('type:', undefined, returnValue.type);
      log('payload', Style.pending, returnValue.payload);
    }
    else {
      log('type:', undefined, returnValue.type);
      log('payload', Style.payload, returnValue.payload);
    }

    return returnValue
  };
}