import { Component } from '@angular/core';
import { TaskServiceService } from '../../../services/task-service.service';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.css'
})
export class AllTaskComponent {

  constructor(private TaskService : TaskServiceService){
  }
  ngOnInit(): void {
   this.tasks=this.TaskService.loadAllTask();

  }

  tasks : Task[] | undefined
 

  

}
