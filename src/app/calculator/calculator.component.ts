import { Component, OnInit } from '@angular/core';
import {DateService} from '../date.service'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1:any
  value2:any
  value3:any=0
  operator:string=""
  numbers:any
  

  operat(opr:any){
    if(opr=="+"){
      this.operator='+'
    }
    if(opr=="-"){
      this.operator='-'
    }
    if(opr=="*"){
      this.operator='*'
    }
    if(opr=="/"){
      this.operator='/'
    }

  }
  setnumber(num:any){
    if(this.operator==""){

      this.value1=num
      //console.log(this.value1)
      //this.value1=this.number
    }
    else{
      this.value2=num
      //console.log(this.value2)
    }
   
  }
  
   

  constructor(private obj:DateService) {
    this.obj=obj
   }
  add(cal:any){
    if(cal=="+"){
    this.value3=parseInt(this.value1)+parseInt(this.value2)
    //console.log(this.value3) 
  }
  else if(cal=="-"){
    this.value3=parseInt(this.value1)-parseInt(this.value2)
    //console.log(this.value3)
  } 
  else if(cal=="*"){
    this.value3=parseInt(this.value1)*parseInt(this.value2)
    //console.log(this.value3)
  }
  else if(cal=="/"){
    this.value3=parseInt(this.value1)/parseInt(this.value2)
    //console.log(this.value3)
  }
  }
 

  ngOnInit(): void {
    console.log("inside calculator" ,this.obj.getDate())
  }
  
  
 


  setvalue1(event:any){
    this.value1=(event.target as HTMLInputElement).value
    
  }
  setvalue2(event:any){
    this.value2=(event.target as HTMLInputElement).value
  }
  setvalue(event:any){
    this.value3=(event.target as HTMLInputElement).value
  }
  
  

}
