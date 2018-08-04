'use strict';

const DEFAULT_DEGREE = 6; // min degree of b-tree.
// All vertices except the root have [degree - 1 ... 2 * degree + 1] child nodes

function BTree(degree = DEFAULT_DEGREE) {
  this.root = new BTreeNode();
  this.minDegree = degree;
}

function BTreeNode(leaf = true) {
  this.elements = [];
  this.leaf = leaf;
  this.lastChild = null;
}

function Element(value, typle) {
  this.value = value;
  this.typle = typle;
  this.child = null;
}

// const BTree.prototype = {};
BTree.prototype.add = function(
  value, // number or string
  typle // related data
) {
  let curNode =  this.root;
  if (curNode.elements.length === this.minDegree * 2 - 1) {
    const newRoot = new BTreeNode(false);
    const leftChild = new BTreeNode(curNode.leaf);
    const rightChild = new BTreeNode(curNode.leaf);
    rightChild.elements = curNode.elements.slice(this.minDegree);
    rightChild.lastChild = curNode.lastChild;
    leftChild.elements = curNode.elements.slice(0, this.minDegree - 1);
    leftChild.lastChild = curNode.elements[this.minDegree - 1].child;
    newRoot.elements.push(curNode.elements[this.minDegree - 1]);
    newRoot.elements[0].child = leftChild;
    newRoot.lastChild = rightChild;
    this.root = newRoot;
    curNode = value < this.root.value ? leftChild : rightChild;
  }
  while (!curNode.leaf) {
    for (const curElement of curNode.elements) {
      if (value < curElement.value) {
        if (curElement.child.length === this.minDegree * 2 - 1) {
          const child = curElement.child;
          const newLeftChild = new BTreeNode(child.leaf);
          const newRightChild = new BTreeNode(child.leaf);
          newRightChild.elements = child.elements.slice(this.minDegree);
          newRightChild.lastChild = child.lastChild;
          newLeftChild.elements = child.elements.slice(0, this.minDegree - 1);
          newLeftChild.lastChild = child.elements[this.minDegree - 1].child;
          curElement.child = newRightChild;
          const median = child.elements[this.minDegree - 1];
          median.child = newLeftChild;
          curNode.elements.splice(
            curNode.elements.indexOf(curElement) - 1, 0, median
          );
          curNode = value < median.value ? newLeftChild : newRightChild;
          break;
        }
        curNode = curElement.child;
        break;
      }
    }
  }
  // Now in curNode is node (leaf), in which we need to insert an element
  let curElementIndex = 0;
  for (; curElementIndex < curNode.elements.length; curElementIndex++) {
    if (curNode.elements[curElementIndex].value < value) {
      curNode.elements.splice(curElementIndex, 0, new Element(value, typle));
    }
  }
};

BTree.prototype.delete = function(value) {

};

BTree.prototype.getEqual = function(value) {

};

BTree.prototype.getLarger = function(value) {

};

BTree.prototype.getLess = function(value) {
  
};

BTree.prototype.getBetween = function(
  startValue,
  finishValue
) {

}

// BTree.prototype = Object.assign({}, BTree.prototype);
