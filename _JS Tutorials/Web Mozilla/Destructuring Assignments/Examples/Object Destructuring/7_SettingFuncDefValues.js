// === SETTING A FUNCTION PARAMETER'S DEFAULT VALUE

function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: {x: 18, y: 30},
  radius: 30
});

// Note: In the function signature for drawChart above, the
// destructured left-hand side is assigned to an empty
// object literal on the right-hand side: {size = 'big',
// coords = {x: 0, y: 0}, radius = 25} = {}. You could have
// also written the function without the right-hand side
// assignment. However, if you leave out the right-hand side
// assignment, the function will look for at least one
// argument to be supplied when invoked, whereas in its
// current form, you can call drawChart() without supplying
// any parameters. The current design is useful if you want
// to be able to call the function without supplying any
// parameters, the other can be useful when you want to
// ensure an object is passed to the function.