var express = require("express");
var router = express();
var mongojs = require("mongojs");
var db = mongojs("mongodb://tushar:tushar@ds129030.mlab.com:29030/mytasks", ["tasks"]);

// GET ALL TASKS
router.get("/tasks", function(req, res, next) {
  db.tasks.find(function(err, tasks) {
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  })
});

// GET SINGLE TASK
router.get("/tasks/:id", function(req, res, next) {
  db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  })
});

module.exports = router;