const slowFunction = () => {
  let counter = 0;
  while (counter < 5000000000) {
    counter++;
  }
  return counter;
};

function processify(fn) {
  process.on("message", (message) => {
    if (message == "START") {
      console.log("Child process received START message");
      let slowResult = fn();
      let message = `{"totalCount":${slowResult}}`;
      process.send(message);
    }
  });
}

process.on("message", (message) => {
  if (message == "START") {
    console.log("Child process received START message");
    let slowResult = slowFunction();
    let message = `{"totalCount":${slowResult}}`;
    process.send(message);
  }
});
