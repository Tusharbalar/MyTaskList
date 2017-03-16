import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  selector: 'tasks',
  moduleId: module.id
})

export class TaskComponent {

  constructor(private taskService: TaskService) {
    
  }

}