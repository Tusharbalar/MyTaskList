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

  constructor(private taskService: TaskService) {
    
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      console.log("DSDSDS", tasks);
      this.tasks = tasks;
    })
  }

}