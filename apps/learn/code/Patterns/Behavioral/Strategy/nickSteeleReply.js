// https://dev.to/carlillo/understanding-design-patterns-abstract-factory-23e7

const events = {
  heartBeat: { id: 0, process: (e) => ({}) },
  mediatimeupdate: {
    id: 1,
    ignore: true,
    process: (e) => e,
  },
  mediaplay: {
    id: 1,
    process: (e) => ({ t: e.detail.plys.currentTime }),
  },
  mediaplyaing: {
    id: 9,
    process: (e) => ({ t: e.detail.plyr.currentTime }),
  },
  touch: {
    id: 13,
    update: 'lookingAt',
    process: (e) => ({ x: e.x, y: e.y }),
  },
  focus: {
    id: 14,
    update: 'lookingAt',
    process: (e) => ({ x: e.x, y: e.y }),
  },
  cartAdd: { id: 19, process: (e) => ({ p: e.id }) },
  cartUpdateQty: { id: 20, process: (e) => ({ p: e.id }) },
  cartClear: { id: 21, process: (e) => ({}) },
};

const $event = (name, payload, stream = defaultStream) => {
  stream(events[name].process(payload));
};

const bla = {
  foo: (x) => ({
    c: x,
  }),
};

console.log(bla.foo(10));
