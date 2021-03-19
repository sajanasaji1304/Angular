import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {HomeComponent} from './home/home.component'


const routes: Routes = [{ path: 'user', component: UserComponent}
,{path: 'home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
