const fs = require("fs");
const pathUtil = require("path");

function myFunction(filepath, ext, callback) {
  ext = "." + ext;
  fs.readdir(filepath, (err, data) => {
    if (err) callback(err);
    else {
      let items = [];
      data.forEach((item) => {
        if (pathUtil.extname(item) === ext) {
          items.push(item);
        }
      });
      callback(null, items)
    }
  });
}

module.exports = myFunction;
