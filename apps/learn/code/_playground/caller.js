function foo() {
  // arguments.callee.caller.name; // cant do this
  return 'foo.caller';
}
function goo() {
  return foo();
}
console.log(goo());
