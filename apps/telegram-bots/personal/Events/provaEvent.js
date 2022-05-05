import events from "events"
events.captureRejections = true
const EventEmitter = events.EventEmitter

const ee = new EventEmitter();
ee.on('something', async (value) => {
  throw new Error('kaboom');
});

ee.on('error', console.log)

const ee2 = new EventEmitter()
ee2.on('something', async (value)=>{
  throw new Error('kaboom');
})

ee2[Symbol.for('nodejs.rejection')] = console.log

ee.emit('something')