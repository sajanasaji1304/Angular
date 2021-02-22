import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  

  constructor() {

}
  ngOnInit(): void {
  }
  value1:string=""
  todo:any[]=[]
  value2:string=""
  s:any[]=[]
  setvalue1(event:any){
  this.value1=(event.target as HTMLInputElement).value
  }
  add(){
  this.todo.push(this.value1)
  console.log(this.value1)
}
onItemClick(){
  {
    console.log(this.todo)
  }
}
remove(){
  {
  this.s=this.todo
  this.s.splice(-1)
  }
}

    }
  
