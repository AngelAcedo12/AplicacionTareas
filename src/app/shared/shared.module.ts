import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    MenuComponent,
    TaskComponent
  ],exports:[
    MenuComponent,
    TaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
