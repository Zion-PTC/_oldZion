function test1() {
  let obj = {
    id: 'id',
    bot: 'bot',
  };
  type OBJ = typeof obj;

  let b: OBJ = {
    id: '',
    bot: '',
  };
  Object.defineProperty(b, 'prototype.name', { value: 'bob' });
  console.log(b.constructor);
}
