'use strict';

const BTree = require(__dirname + '/..');

const numbersIndexes = new BTree(2);

numbersIndexes
  .add(40,  { primaryKey: 40,  data: 'Abu Dhabi'  })
  .add(30,  { primaryKey: 30,  data: 'Ankara'     })
  .add(80,  { primaryKey: 80,  data: 'Jerusalem'  })
  .add(20,  { primaryKey: 20,  data: 'Seoul'      })
  .add(100, { primaryKey: 100, data: 'Kiev'       })
  .add(110, { primaryKey: 110, data: 'Luxembourg' })
  .add(18,  { primaryKey: 18,  data: 'Minsk'      })
  .add(135, { primaryKey: 135, data: 'Oslo'       })
  .add(50,  { primaryKey: 50,  data: 'Stockholm'  })
  .add(25,  { primaryKey: 25,  data: 'Washington' })
  .add(62,  { primaryKey: 62,  data: 'Lima'       })
  .add(64,  { primaryKey: 64,  data: 'Beijing'    });

console.log(numbersIndexes.getLarger(0));
console.log(numbersIndexes.getLarger(64));
console.log(numbersIndexes.getLarger(100));
console.log(numbersIndexes.getLarger(500));
