import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {Student} from '../student'
import {UserService} from '../user.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  model=new Student("","")
  user:any
  pass:any
  returnURL:string=""
  loginsuccess:string=""
  constructor(private router:Router,private obb:UserService) { }

  ngOnInit(): void {
  }
  // save(){
  //   this.user=this.model.username
  //   this.pass=this.model.password
  //   if(this.user=="admin" && this.pass=="admin")
  //   {
  //     this.loginsuccess="true"
  //     localStorage.setItem("isLoggedIn","true")
  //     localStorage.setItem("username",this.model.username)
  //     this.router.navigate([this.returnURL])
  //   }
  //   else{
  //     this.loginsuccess="false"

  //   }
  //   if(this.loginsuccess=="false"){
  //     alert("login failed")
  //   }
  // }
  // }
  save(){
    if(this.user=this.user.username && this.user.password){
      this.loginsuccess="true"
    }else{
      this.loginsuccess="false"
    }

  }
}
  
  
  


