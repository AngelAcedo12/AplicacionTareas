import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LayautTaskComponent } from './layaut-task/layaut-task.component';

const routes: Routes = [{
  path:'', children:[
    {
      path:'',component: AllTaskComponent
    },
    {
    path:'newTask', component:NewTaskComponent
    },
    {
      path:'editTask/:id',component:EditTaskComponent
    }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTaskRoutingModule { }
