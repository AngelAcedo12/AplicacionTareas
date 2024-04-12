import { Component } from '@angular/core';
import { TaskServiceService } from '../../../services/task-service.service';
import { Task } from '../../../models/task';
import { AllTask } from '../../../models/DtoAllTask';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.css'
})
export class AllTaskComponent {

  constructor(private TaskService : TaskServiceService, private route : ActivatedRoute){
  }
  ngOnInit(): void {
   this.tasks=this.TaskService.loadAllTask();

    this.filterStatus = this.route.snapshot.params["status"]
    if(this.filterStatus==undefined){
      this.filterStatus="NONE"
    }


  }

  filterStatus : string | undefined;


  tasks : AllTask | undefined
 
  refrestList(){
    this.tasks=this.TaskService.loadAllTask()
  }


}
