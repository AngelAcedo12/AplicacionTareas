import { Component } from '@angular/core';
import { TaskServiceService } from '../../../services/task-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../../../models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  
  constructor(private TaskService : TaskServiceService, private route :ActivatedRoute){
    
    
  }
  
  ngOnInit(): void {
    
    this.id= (this.route.snapshot.params["id"])
    this.actualTask = this.TaskService.getOneTask(this.id!);
  }

  id: number | undefined;
  
  formTask  = new FormGroup({
    titleTask: new FormControl(''),
    descripcionTask: new FormControl('')
  })
  
  actualTask: Task|undefined;
  
  
  onInputTaskTitle() {

    this.actualTask!.title=this.formTask.value.titleTask || "";
    
  }
  onInputTaskDescription(){
    this.actualTask!.descripcion=this.formTask.value.descripcionTask || "";
    
  }
  postForm() {
    this.TaskService.replaceTask(this.actualTask!,this.id!)
  }
}
