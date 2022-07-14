class Node {
    name;
    children = [];
    constructor(name = "") {
        this.name = name;
    }
    add(child) {
        this.children.push(child);
    }
    remove(child) {
        let length = this.children.length;
        for (let i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    }
    getChild(i) {
        return this.children[i];
    }
    hasChildren() {
        return this.children.length > 0;
    }
}
function traverse(indent, node) {
    console.log(Array(indent++).join("--") + node.name);
    for (let i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}
let tree = new Node("root");
let left = new Node("left");
let right = new Node("right");
var leftleft = new Node("leftleft");
var leftright = new Node("leftright");
var rightleft = new Node("rightleft");
var rightright = new Node("rightright");
tree.add(left);
tree.add(right);
tree.remove(right);
tree.add(right);
left.add(leftleft);
left.add(leftright);
right.add(rightleft);
right.add(rightright);
traverse(1, tree);
export {};
