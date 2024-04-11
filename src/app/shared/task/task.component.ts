import { Component, Input, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  
  @Input({required:true}) task : Task| undefined;
  


}