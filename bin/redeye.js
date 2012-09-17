var program = require('commander');

program
  .version('0.0.4')
  .option('-n, --number <number>', 'number of times to convert from js to coffee [1]', Number, 1)
  .option('-p, --path <path>', 'root directory path [./]', String, './')
  .option('-o, --overwrite', 'overwrite existing javascript with compiled coffee script')
  .parse(process.argv);

var redeye = require('../lib/redeye');

redeye(program.path, program.number, program.overwrite);
