import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor(private fb:FormBuilder) { 
    this.fb=fb
  }

  ngOnInit(): void {
  }
//   profileForm=new FormGroup(
//   {name:new FormControl(''),
//   email:new FormControl(''),
//   password:new FormControl(''),
//   mobilenumber:new FormControl(''),
//   address:new FormGroup({
//     houseno:new FormControl(''),
//     city:new FormControl(''),
//     landmark:new FormControl('')
// })
//   }
// )
profileForm=this.fb.group({
  name:["",[Validators.required,Validators.minLength(4)]],
  email:[""],
  password:[""],
  mobilenumber:[""],
  address:this.fb.group({
    houseno:[""],
    landmark:[""]
})
})
get f(){
  return this.profileForm.controls

}

save(){
console.log(this.profileForm.value)
  }
}


