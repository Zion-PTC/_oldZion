export {};

class Node {
  children = [];
  constructor(name) {
    this.name = name;
  }
  add = (child) => this.children.push(child);
  get = (i) => this.children[i];
}

function traverse(indent, node) {
  console.log(Array(indent++).join("--") + node.name);
  for (let child of node.children) traverse(indent, child);
}

let tree = new Node("root");
let left = new Node("left");
let right = new Node("right");
let leftleft = new Node("leftleft");
let leftleftleft = new Node("leftleftleft");
let leftright = new Node("leftright");
let rightleft = new Node("rightleft");
let rightright = new Node("rightright");

tree.add(left);
tree.add(right);
left.add(leftleft);
leftleft.add(leftleftleft);
left.add(leftright);

right.add(rightleft);
right.add(rightright);

traverse(1, tree);
