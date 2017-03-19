import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private http: Http) {
    console.log("Task initialized...");
  }

  getTasks() {
    return this.http.get('/api/tasks')
                    .map((res) => res.json());
  }

  addTask(newTask:any) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log("AAAA", newTask)
    return this.http.post("http://localhost:3000/api/task", newTask)
                    .map(res => res.json())
  }

}