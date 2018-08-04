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

function Element() {
  this.value = undefined;
  this.typle = null;
  this.child = null;
}

// const BTree.prototype = {};

BTree.prototype.add = function(
  value, // number or string
  typle // related data
) {
  const curNode =  this.root;
  if (curNode.elements.length === this.minDegree * 2 - 1) {
    const newRoot = new BTreeNode(false);
    const leftChild = new BTreeNode(curNode.leaf);
    const rightChild = new BTreeNode(curNode.leaf);
    // this.root = new BTreeNode(false);
    // this.root.elements.push()
    rightChild.elements = curNode.elements.slice(this.minDegree);
    rightChild.lastChild = curNode.lastChild;
    
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
