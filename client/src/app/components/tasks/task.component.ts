import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css']
})

export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService) {
    
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((res) => {
      console.log("DSDSDS", res)
    })
  }

}