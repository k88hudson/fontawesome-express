var fontawesome = require("font-awesome");
var path = require("path");
var express = require("express");

module.exports = function(app, options) {
  options = options || {};
  options.baseDir = options.baseDir || "/";
  options.cssDir = options.cssDir || "/css";

  var filename = options.optimize ? "font-awesome.css" : "font-awesome.min.css";
  var cssFilePath = path.join(options.baseDir, options.cssDir, filename);
  var fontsDir = path.join(options.baseDir, "fonts");

  app.use(cssDir, express.static("./node_modules/font-awesome/fonts"));
  app.get(cssFilePath, function(req,res) {
    res.set("Content-Type", "text/css");
    res.sendfile("./node_modules/font-awesome/css/" + filename);
  });
}
