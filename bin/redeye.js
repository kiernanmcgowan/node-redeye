(function() {

  (function() {
    return (function() {
      var program, redeye;
      program = void 0;
      redeye = void 0;
      program = void 0;
      redeye = void 0;
      program = require("commander");
      program.version("0.0.3").option("-n, --number <number>", "number of times to convert from js to coffee [1]", Number, 1).option("-p, --path <path>", "root directory path [./]", String, "./").option("-o, --overwrite", "overwrite existing javascript with compiled coffee script").parse(process.argv);
      redeye = require("../lib/redeye");
      return redeye(program.path, program.number, program.overwrite);
    }).call(this);
  }).call(this);

}).call(this);
