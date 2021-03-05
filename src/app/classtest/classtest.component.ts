import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classtest',
  templateUrl: './classtest.component.html',
  styleUrls: ['./classtest.component.css']
})
export class ClasstestComponent implements OnInit {

  constructor() {}
  

  ngOnInit(): void {
  }
  task:any
  a:any[]=[]
  addtask(event:any){
    this.task=(event.target as HTMLInputElement).value
    }

  save(){
    this.a.push(this.task)
    console.log(this.task)
  }
  
}
