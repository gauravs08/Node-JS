//https://nodejs.org/api/events.html
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.once('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

//----------------------
//const myEmitter = new MyEmitter();
myEmitter.once('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');
//--------------------------
myEmitter.once('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a', 'b');

//-------------------
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2

//------------
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error

//---------------

myEmitter.once('event', () => {});
//myEmitter.emit('event');
myEmitter.once('event', () => {});
console.log('Count>>'+EventEmitter.listenerCount(myEmitter, 'event'));
// Prints: 2
//------
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event4') {
    // Insert a new listener in front
    myEmitter.on('event4', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event4', () => {
  console.log('A');
});
myEmitter.emit('event4');

//-------Default max listners-
console.log('Default Max Listners:: '+myEmitter.getMaxListeners());
myEmitter.setMaxListeners(myEmitter.getMaxListeners() + 1);
console.log('Default Max Listners +1 :: '+myEmitter.getMaxListeners());

console.log(myEmitter.getMaxListeners());
myEmitter.once('event', () => {
  // do stuff
  myEmitter.setMaxListeners(Math.max(myEmitter.getMaxListeners() - 1, 0));
});
console.log(myEmitter.getMaxListeners());
myEmitter.emit('event');
console.log('Listners -1 after event is emmitted:: '+myEmitter.getMaxListeners());

//---- Print eventName()----
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');

myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]

//---- PrepaidListener
//const myEE = new EventEmitter();
myEE.on('foo', () => console.log('PrepaidListener a'));
myEE.prependListener('foo', () => console.log(' PrepaidListener b'));
myEE.emit('foo');
// Prints:
//   b
//   a

//-----prependOnceListener
console.log('prependOnceListener');
myEE.once('foo', () => console.log(' prependOnceListener a'));
myEE.prependOnceListener('foo', () => console.log('prependOnceListener b'));
myEE.emit('foo');
// Prints:
//   b
//   a
//-------
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
