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
    console.log("Guardadando")
    localStorage.setItem("Tasks",JSON.stringify(task))
  }
  removeTask(position : number): Task[]{

    var actualTask  : Task[]= this.loadAllTask();
    console.log(actualTask[position])
    actualTask= actualTask.filter(obj => {return obj !==  actualTask[position]})
    console.log(actualTask)
    this.saveTasks(actualTask)
    return this.loadAllTask();
  }

  getOneTask(position: number) : Task {
    return this.loadAllTask()[position]
  }
  replaceTask(newTask:Task, position: number){

    var tasks = this.loadAllTask()
    tasks[position].descripcion=newTask.descripcion;
    tasks[position].title=newTask.title;
    this.saveTasks(tasks)
    window.alert("Edit succesful")
  }
 

}
