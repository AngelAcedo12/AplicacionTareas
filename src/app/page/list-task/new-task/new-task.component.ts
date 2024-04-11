import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Task } from '../../../models/task';
import { TaskServiceService } from '../../../services/task-service.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  constructor(private TaskService: TaskServiceService){

  }
  
  formTask  = new FormGroup({
      titleTask: new FormControl(''),
      descripcionTask: new FormControl('')
  })

  actualTask : Task  ={
    descripcion:"",
    title:""
  };


  onInputTask(){
    this.actualTask.descripcion=this.formTask.value.descripcionTask || "";
    this.actualTask.title=this.formTask.value.titleTask || "";
  }

  postForm(){
      var tasks = this.TaskService.loadAllTask();

      if(tasks.length==0){
       
        tasks=[]
        tasks.push(this.actualTask)
       
      }
      tasks.push(this.actualTask)
      this.TaskService.saveTasks(tasks);
      window.alert("Task guardada")
  }


}
