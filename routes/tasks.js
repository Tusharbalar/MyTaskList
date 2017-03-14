var express = require("express");
var router = express();
var mongojs = require("mongojs");
var db = mongojs("mongodb://tushar:tushar@ds129030.mlab.com:29030/mytasks", ["tasks"]);

router.get("/tasks", function(req, res, next) {
  db.tasks.find(function(err, tasks) {
    if (err) {
      res.send(err);
    }

    res.json(tasks);
  })
});

module.exports = router;