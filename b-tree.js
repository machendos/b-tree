'use strict';

const DEFAULT_DEGREE = 6; // min degree of b-tree.
// All vertices except the root have [degree - 1 ... 2 * degree + 1] child nodes

function BTree(degree = DEFAULT_DEGREE) {
  this.root = null;
  this.minDegree = degree;
}

function BTreeNode() {
  this.elements = [];
  this.leaf = true;
  this.lastChild = null;
}

function Element() {
  this.value = undefined;
  this.typle = null;
  this.child = null;
}

const methods = {};

methods.add = function(
  value, // number or string
  typle // related data
) {

};

methods.delete = function(value) {

};

methods.getEqual = function(value) {
  
};

methods.getLarger = function(value) {

};

methods.getLess = function(value) {
  
};

methods.getBetween = function(
  startValue,
  finishValue
) {

}

BTree.prototype = Object.assign({}, methods);
