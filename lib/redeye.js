(function() {
  var IGNORE, coffee, convert, cs, fs, path, _;

  fs = require("fs");

  _ = require("underscore");

  path = require("path");

  cs = require("coffee-script");

  coffee = require("js2coffee");

  IGNORE = ["node_modules"];

  convert = function(dir, force) {
    return fs.readdir(dir, function(err, files) {
      return _.each(files, function(file) {
        var loc;
        if (_.indexOf(IGNORE, file) === -1) {
          loc = path.join(dir, file);
          return fs.stat(loc, function(err, stat) {
            var extension;
            if (stat.isDirectory()) {
              return convert(loc, force);
            } else {
              extension = path.extname(file);
              if (extension === ".js") {
                return fs.readFile(loc, "utf8", function(err, str) {
                  var comp, csFile, res;
                  try {
                    res = coffee.build(str);
                    csFile = file.replace(".js", ".coffee");
                    fs.writeFile(path.join(dir, csFile), res, "utf8", function(err) {
                      if (err) {
                        return console.log("could not convert: " + file);
                      } else {
                        return console.log(path.join(dir, file));
                      }
                    });
                    if (force) {
                      comp = cs.compile(res);
                      return fs.writeFile(path.join(dir, file), comp, function(err) {
                        if (err) {
                          return console.log("unable to write new js");
                        }
                      });
                    }
                  } catch (e) {
                    return console.log("could not convert: " + file);
                  }
                });
              }
            }
          });
        }
      });
    });
  };

  module.exports = function(startDir, number, force) {
    var i, _results;
    i = 0;
    _results = [];
    while (i < number) {
      convert(startDir, force);
      _results.push(i++);
    }
    return _results;
  };

}).call(this);
