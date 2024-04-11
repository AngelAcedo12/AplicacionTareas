import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TaskComponent } from './task/task.component';
import { MatButton, MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    MenuComponent,
    TaskComponent
  ],exports:[
    MenuComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class SharedModule { }
