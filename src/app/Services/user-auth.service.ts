import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private isLoggedSub:BehaviorSubject<boolean>;

  constructor() { 
   this.isLoggedSub=new BehaviorSubject<boolean>(this.isUserLogged);
  }
  login(email:string,password:string){
    let uToken='123654789'
    localStorage.setItem("token",uToken);
    this.isLoggedSub.next(true)
  }

  logout(){
    localStorage.removeItem("token");
    this.isLoggedSub.next(false)
  }
 get isUserLogged():boolean {
  return (localStorage.getItem('token'))?true:false;
 }
 getLoggedStatus():Observable<boolean>{
  return this.isLoggedSub.asObservable();
 }
}
