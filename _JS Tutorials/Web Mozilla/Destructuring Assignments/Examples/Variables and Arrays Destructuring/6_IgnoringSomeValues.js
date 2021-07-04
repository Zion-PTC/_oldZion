// ==== IGNORING SOME RETURED VALUES

// You can ignore return values that you're not interested in:

function f() {
  return [1,2,3];
}

const [a, , b] = f();
console.log(a,b);

// You can also ignore all returned values:

[,,] = f()