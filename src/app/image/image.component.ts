import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  animations:[trigger("rotatedState",[
    state('default',style({ transform:'rotate(0)'})),
    state('rotated',style({ transform:'rotate(360deg)'})),
    transition('rotated <=> default', animate('2000ms')),
    
  ])
]
})
export class ImageComponent implements OnInit {
  isDefault=true

  constructor() { }

  ngOnInit(): void {
  }
  rotate(){
    this.isDefault=this.isDefault==true?false:true

  }

}
