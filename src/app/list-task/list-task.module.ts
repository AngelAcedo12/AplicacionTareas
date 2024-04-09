import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTaskRoutingModule } from './list-task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LayautTaskComponent } from './layaut-task/layaut-task.component';


@NgModule({
  declarations: [
    NewTaskComponent,
    AllTaskComponent,
    EditTaskComponent,
    LayautTaskComponent
  ],exports:[AllTaskComponent],
  imports: [
    CommonModule,
    ListTaskRoutingModule,
  
  ]
})
export class ListTaskModule { }
