import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ClasstestComponent } from './classtest/classtest.component';
import {AuthService} from './authguard.service'


const routes: Routes = [{
  path:"calculator",
  component:CalculatorComponent,
  canActivate:[AuthService]
},{path:"todolist",
  component:TodolistComponent
},{path:"classtest",
component:ClasstestComponent
},{path:"service",
component:ClasstestComponent
},

  { path: 'user', loadChildren: () => import('./customer/user/user.module').then(m => m.UserModule), }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
