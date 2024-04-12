import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { MatButton, MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
  TaskComponent,
  ],exports:[
    TaskComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class ComponentsModule { }
