import { Injectable } from '@angular/core';
import {Home} from '../app/home'
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store:AngularFirestore) { }
  saveUser(user:Home){
    console.log(user)
    this.store.collection("homes").add({...user})
  }
  readUser(){
    return this.store.collection("homes").snapshotChanges()
  }
  editUser(user:Home){
  this.store.doc("homes/").update(user)
  }
  deleteUser(user:Home){
    this.store.doc("homes/"+user.id).delete()
  }

}
