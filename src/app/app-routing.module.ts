import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ClasstestComponent } from './classtest/classtest.component';


const routes: Routes = [{
  path:"calculator",
  component:CalculatorComponent
},{path:"todolist",
  component:TodolistComponent
},{path:"classtest",
component:ClasstestComponent
},

  { path: 'user', loadChildren: () => import('./customer/user/user.module').then(m => m.UserModule), }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
