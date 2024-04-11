import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }
  
  loadAllTask():Task[]{
    
     return JSON.parse(localStorage.getItem("Tasks")!)


  }

  saveTasks(task : Task[]) {
    localStorage.setItem("Tasks",JSON.stringify(task))
  }
  removeTask(position : number){
    var actualTask  : Task[]= this.loadAllTask();
    actualTask.splice(position)
    this.saveTasks(actualTask)
  }
}
