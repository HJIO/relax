const showdown = require('showdown');
const Q = require('q');
const fs = require('fs');
const express = require('express');
let app = express();
let converter = new showdown.Converter();

function readFile(file, cb) {
  let deferred = Q.defer();
  fs.readFile(file, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise.nodeify(cb);
}
function readPage(file,cb){
  Q.resolve(readFile(file,cb))
    .then(function (data) {
      return converter.makeHtml(data.toString());
    }, function (err) {
      console.log(err);
    });
}

app.get('/pages', function (req, res) {
  console.log(req);
  res.send(readPage('./pages/start.md'));
});

let server = app.listen(8081,function () {
  
});


