import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
model=new Login("abc@mail.com","abcd")
save(){
  console.log("username",this.model.username)
  console.log("password",this.model.password)
}
}
