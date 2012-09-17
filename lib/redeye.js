// redeye.js
// @author Tim McGowan <dropdownmenu>

var fs = require("fs");
var _ = require("underscore");
var path = require("path");
var cs = require("coffee-script");
var coffee = require("js2coffee");
var IGNORE = ["node_modules"];

var convert = function(dir) {
  fs.readdir(dir, function(err, files) {
    _.each(files, function(file) {
      if (_.indexOf(IGNORE, file) === -1) {
        var loc = path.join(dir, file);
         fs.stat(loc, function(err, stat) {
          if (stat.isDirectory()) {
            convert(loc);
          } else {
            var extension = path.extname(file);
            if (extension === ".js") {
              fs.readFile(loc, "utf8", function(err, str) {
                try {
                  var res = coffee.build(str);
                  file = file.replace(".js", ".coffee");
                  consol.log(cs.compile);
                  console.log(path.join(dir, file));
                  fs.writeFile(path.join(dir, file), res, "utf8", function(err) {
                    if (err) {
                      console.log("could not convert: " + file);
                    }
                  });
                } catch (e) {
                  console.log("could not convert: " + file);
                }
              });
            }
          }
        });
      }
    });
  });
};

module.exports = function(startDir, number) {
  for (var i = 0; i < number; i++) {
    convert(startDir);
  }
}
