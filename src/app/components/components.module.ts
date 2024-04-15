import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ListTaskComponent } from './list-task/list-task.component';



@NgModule({
  declarations: [
  TaskComponent,
  ListTaskComponent,
  ],exports:[
    TaskComponent,
    ListTaskComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class ComponentsModule { }
