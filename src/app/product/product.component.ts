import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model=new Product(123,"book",12,"abc")
  save(){
    console.log("productid",this.model.productid)
    console.log("name",this.model.name)
    console.log("price",this.model.price)
    console.log("description",this.model.description)
  }


}
