import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TestComponent } from './test/test.component';
import {FontAwesomeModule}  from  '@fortawesome/angular-fontawesome'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ClasstestComponent } from './classtest/classtest.component';
import { Classtest1Component } from './classtest1/classtest1.component';
// import { ProductlistComponent } from './productlist/productlist.component';
// import { Productlist1Component } from './productlist1/productlist1.component';
import { ServiceComponent } from './service/service.component'
import {CustomerModule} from './customer/customer.module'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {environment} from '../environments/environment'
import { AngularFireModule } from '@angular/fire';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    CalculatorComponent,
    TodolistComponent,
    TestComponent,
    LoginComponent,
    ProductComponent,
    NameEditorComponent,
    ClasstestComponent,
    Classtest1Component,
    // ProductlistComponent,
    // Productlist1Component,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CustomerModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
