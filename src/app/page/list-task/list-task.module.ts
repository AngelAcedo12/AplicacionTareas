import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskRoutingModule } from './list-task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LayautTaskComponent } from './layaut-task/layaut-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatLabel} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import { ComponentsModule } from '../../components/components.module';
import {MatSelectModule} from '@angular/material/select';
@NgModule({ 
  declarations: [
    NewTaskComponent,
    AllTaskComponent,
    EditTaskComponent,
    LayautTaskComponent,
    
  ],exports:[AllTaskComponent],
  imports: [
    CommonModule,
    ListTaskRoutingModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    ComponentsModule,
    MatSelectModule

  ],providers:[
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
  }
)
export class ListTaskModule { }
