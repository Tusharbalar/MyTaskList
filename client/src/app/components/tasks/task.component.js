"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('../../services/task.service');
var TaskComponent = (function () {
    function TaskComponent(taskService) {
        this.taskService = taskService;
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) {
            console.log("DSDSDS", tasks);
            _this.tasks = tasks;
        });
    };
    TaskComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };
        this.taskService.addTask(newTask).subscribe(function (task) {
            _this.tasks.push(task);
            _this.title = "";
        });
    };
    TaskComponent.prototype.deleteTask = function (taskId) {
        var tasks = this.tasks;
        console.log(taskId);
        this.taskService.deleteTask(taskId).subscribe(function (res) {
            if (res.n === 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id === taskId) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    TaskComponent.prototype.updateStatus = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateStatus(_task).subscribe(function (res) {
            task.isDone = !task.isDone;
        });
    };
    TaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tasks',
            templateUrl: 'task.component.html',
            styleUrls: ['task.component.css']
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map