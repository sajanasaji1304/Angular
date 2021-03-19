import { Component, OnInit } from '@angular/core';
import {Home} from '../../../home'
import {AngularFirestore} from '@angular/fire/firestore'
import {UserService} from '../../../user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor(private store:AngularFirestore) {
constructor(private user:UserService) {}
userlist:Home[]=[]
a:any
  

  ngOnInit(): void {
    this.user.readUser().subscribe(data=>{
      this.userlist=data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data as {}
        } as Home
      })
    })

  }
  home=new Home('','','','')
  save(){
    console.log(this.home)
    // this.store.collection("homes").add({...this.home})
    this.user.saveUser(this.home)
    // this.userlist.push(this.a)
    // console.log(this.a)

  }
  

}
