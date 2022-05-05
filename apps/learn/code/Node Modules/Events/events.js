/**
 * @description
Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

For instance: a net.Server object emits an event each time a peer connects to it; a fs.ReadStream emits an event when the file is opened; a stream emits an event whenever data is available to be read.

All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and discarded.

The following example shows a simple EventEmitter instance with a single listener. The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit() method is used to trigger the event.
 */
console.log('\nEventEmitter Object:');
import { EventEmitter, errorMonitor } from 'events'
console.log(EventEmitter);

console.log('\nMyEmitter:');
class MyEmitter extends EventEmitter { }
console.log(MyEmitter);

console.log('\nExample Event');
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

/**
 * @section Passing arguments and this to listeners
The eventEmitter.emit() method allows an arbitrary set of arguments to be passed to the listener functions. Keep in mind that when an ordinary listener function is called, the standard this keyword is intentionally set to reference the EventEmitter instance to which the listener is attached.
 */
console.log('\nPassing arguments and this to listeners');
myEmitter.on('event2', function (a, b) {
  console.table({ ['this']: this })
  console.table({ a, b, ['Is "this" strictly equal to "myEmitter"']: this === myEmitter });
});
myEmitter.emit('event2', 'a', 'b');
/**
It is possible to use ES6 Arrow Functions as listeners, however, when doing so, the this keyword will no longer reference the EventEmitter instance:
 */

myEmitter.on('event3', (a, b) => {
  console.table({ a, b, ['this']: this });
});
myEmitter.emit('event3', 'a', 'b');

/**
 * @section Asynchronous vs. synchronous
The EventEmitter calls all listeners synchronously in the order in which they were registered. This ensures the proper sequencing of events and helps avoid race conditions and logic errors. When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods:
 */
console.log('\nAsynchronous vs. synchronous');
myEmitter.on('event4', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously, called by event4');
  });
});
myEmitter.emit('event4', 'a', 'b');

/**
 * @section Handling events only once
When a listener is registered using the eventEmitter.on() method, that listener is invoked every time the named event is emitted.
 */
console.log('\nHandling events only once');
let m = 0;
myEmitter.on('event5', () => {
  console.log(++m);
});
myEmitter.emit('event5');
// Prints: 1
myEmitter.emit('event5');
// Prints: 2
/**
Using the eventEmitter.once() method, it is possible to register a listener that is called at most once for a particular event. Once the event is emitted, the listener is unregistered and then called.
 */
let mm = 0;
myEmitter.once('event6', () => {
  console.log(++mm);
});
myEmitter.emit('event6');
// Prints: 1
myEmitter.emit('event6');
// Ignored

/**
 * @section Error events
When an error occurs within an EventEmitter instance, the typical action is for an 'error' event to be emitted. These are treated as special cases within Node.js.

If an EventEmitter does not have at least one listener registered for the 'error' event, and an 'error' event is emitted, the error is thrown, a stack trace is printed, and the Node.js process exits.
 */
// let error = myEmitter.emit('error', new Error('whoops!'));
// Throws and crashes Node.js

/**
To guard against crashing the Node.js process the domain module can be used. (Note, however, that the domain module is deprecated.)

As a best practice, listeners should always be added for the 'error' events.
 */
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error

/**
It is possible to monitor 'error' events without consuming the emitted error by installing a listener using the symbol events.errorMonitor.
 */
myEmitter.on(errorMonitor, (err) => {
  console.log(err);
});
myEmitter.emit('error', new Error('whoops!'));
// Still throws and crashes Node.js