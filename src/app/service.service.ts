import { Injectable } from '@angular/core';

 

import{ HttpClient} from '@angular/common/http';

 

@Injectable({

  providedIn: 'root'

})

export class ServiceService {

 

  constructor(private http:HttpClient) { 

     this.http=http

  }

  getlist(){

    return this.http.get("http://localhost:4200/assets/productlist.json")

  }

}
