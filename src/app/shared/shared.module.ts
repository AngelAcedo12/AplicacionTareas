import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatButton, MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    MenuComponent,
    
  ],exports:[
    MenuComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class SharedModule { }
