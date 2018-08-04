'use strict';

const BTree = require(__dirname + '/..');

// numbers:

const numbersIndexes = new BTree(2);

numbersIndexes
  .add(40)
  .add(30)
  .add(80)
  .add(20)
  .add(100)
  .add(110)
  .add(18)
  .add(135)
  .add(50)
  .add(25)
  .add(62)
  .add(64)
;

console.dir(numbersIndexes, { depth: null, showHidden: true });

// strings:

const strIndexes = new BTree(2);

strIndexes
  .add('40')
  .add('30')
  .add('80')
  .add('20')
  .add('100')
  .add('110')
  .add('18')
  .add('135')
  .add('50')
  .add('25')
  .add('62')
  .add('64')
;

console.dir(strIndexes, { depth: null, showHidden: true });
