import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AllTaskComponent } from './page/list-task/all-task/all-task.component';
import { ListTaskModule } from './page/list-task/list-task.module';
import { LayautTaskComponent } from './page/list-task/layaut-task/layaut-task.component';

const routes: Routes = [
  {
    path:'task', loadChildren: () => import('./page/list-task/list-task-routing.module').then(m => m.ListTaskRoutingModule)
  },
  {
    path:'',
    redirectTo:'task',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
