import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from './task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css']
})

export class TaskComponent implements OnInit {

  public tasks: Task[];
  public title: string;

  constructor(private taskService: TaskService) {
    
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      console.log("DSDSDS", tasks);
      this.tasks = tasks;
    })
  }

  addTask(event:any) {
    event.preventDefault();
    var newTask = {
      title: this.title,
      isDone: false
    }
    this.taskService.addTask(newTask).subscribe((task) => {
      this.tasks.push(task);
      this.title = "";
    })
  }

  deleteTask(taskId: any) {
    var tasks = this.tasks;
    console.log(taskId)
    this.taskService.deleteTask(taskId).subscribe((res) => {
      if (res.n === 1) {
        for(var i = 0; i < tasks.length; i++) {
          if (tasks[i]._id === taskId) {
            tasks.splice(i, 1);
          }
        }
      }
    })
  }

  updateStatus(task:any) {
    var _task = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };
    this.taskService.updateStatus(_task).subscribe((res) => {
      task.isDone = !task.isDone;
    })
  }

}