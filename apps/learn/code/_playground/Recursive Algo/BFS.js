function traverseBFS(root) {
  let queue = [root];
  let res = [];

  while (queue.length) {
    let curr = queue.shift();
    res.push(curr.key);

    if (curr.right) {
      queue.push(curr.right);
    }

    if (curr.left) {
      queue.push(curr.left);
    }
  }

  return res;
}
