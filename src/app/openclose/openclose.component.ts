import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations'

@Component({
  selector: 'app-openclose',
  templateUrl: './openclose.component.html',
  styleUrls: ['./openclose.component.css'],
  animations:[trigger("openClose",[
    state("open",style({
      backgroundColor:"yellow",
      opacity:1,
      height:"200px"
    })),
    state("closed",style({
      backgroundColor:"green",
      opacity:0.5,
      height:"100px"
    })),
    transition("open=>closed",[
      animate('1s')
    ]),
    transition("closed=>open",[
      animate('0.5s')
    ])
  ])]
})
export class OpencloseComponent implements OnInit {
  isOpen=true

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen=this.isOpen==true?false:true
  }

}
