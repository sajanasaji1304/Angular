import { Injectable } from '@angular/core';
import {ActivatedRoute,ActivatedRouteSnapshot,CanActivate,RouterStateSnapshot,Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router:Router) { }

canActivate(snapshot:ActivatedRouteSnapshot,
  router:RouterStateSnapshot):boolean{
    if(this.isLoggedIn()){
      return true
    }
    this.router.navigate(['/service'])
    return false
  }
  isLoggedIn(){
    let status=false
    if(localStorage.getItem("isLoggedIn")=="true"){
      status=true
    }
    else{
      status=false
    }
    return status
}
}
