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

// SAVE TASK
router.post("/task", function(res, res, next) {
  var task = req.body;
  if (!task.title || (task.isDone + "")) {
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  } else {
    db.task.save(task, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
});

//DELETE TASK
router.delete("/tasks/:id", function(req, res, next) {
  db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  })
});

// UPDATE TASK
router.put("/tasks/:id", function(req, res, next) {

  var task= req.body;
  var updTask= {};

  if (task.isDone) {
    updTask.isDone = task.isDone;
  }

  if(task.title) {
    updTask.title = task.title;
  }

  if (!updTask) {
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  } else {
    db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
  
});

module.exports = router;