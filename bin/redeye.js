var program = require('commander');

program
  .version('0.0.1')
  .option('-n, --number', 'number of times to convert from js to coffee [1]', Number, 3000)
  .option('-p, --path', 'root directory path [./]', String, './')
  .parse(process.argv);

var redeye = require('../lib/redeye');

console.log(program.path);
console.log(program.number);

//redeye(program.p, program.n);
