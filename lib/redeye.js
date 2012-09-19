// redeye.js
// @author Tim McGowan <dropdownmenu>

var fs = require("fs");
var _ = require("underscore");
var path = require("path");
var cs = require("coffee-script");
var coffee = require("js2coffee");
var IGNORE = ["node_modules"];

var convert = function(dir, force, cb) {
  fs.readdir(dir, function(err, files) {
    _.each(files, function(file) {
      if (_.indexOf(IGNORE, file) === -1) {
        var loc = path.join(dir, file);
         fs.stat(loc, function(err, stat) {
          if (stat.isDirectory()) {
            convert(loc, force, cb);
          } else {
            var extension = path.extname(file);
            if (extension === ".js") {
              fs.readFile(loc, "utf8", function(err, str) {
                try {
                  var res = coffee.build(str);
                  var comp;
                  if (force) {
                    // compile up here to avoid multiple try/catch
                    comp = cs.compile(res);
                  }
                  console.log(file);
                  var csFile = file.replace(".js", ".coffee");
                  fs.writeFile(path.join(dir, csFile), res, "utf8", function(err) {
                    if (err) {
                      console.log("could not convert: " + file);
                      cb();
                    } else {
                      console.log(path.join(dir, file));
                      if (force) {
                        fs.writeFile(path.join(dir, file), comp, function(err) {
                          if (err) {
                            console.log('unable to write new js');
                          }
                          cb();
                        });
                      } else {
                        cb();
                      }
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

function wrapper(dir, force) {

}

module.exports = function(startDir, number, force) {
 var cb = function() {
    number--;
    if (number >= 0) {
      convert(startDir, force, cb);
    }
  }
  convert(startDir, force, cb);
}
