import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {

}
todo:any[]=[]
x:any[]=[]
task:string=''
s:any
addtask(event:any){
this.task=(event.target as HTMLInputElement).value
}
add(){
this.todo.push(this.task)
console.log( this.todo);
}
remove(a:any){
this.s=this.todo.indexOf(a)
this.todo.splice(this.s,1)
console.log(this.todo)
}
move( a:any){
this.x.push(a)
this.remove(a)
}
del(a:any){
this.s=this.x.indexOf(a)
this.x.splice(this.s,1)
console.log(this.x)
}
clear()
{
this.task=""
}
}

 

  



