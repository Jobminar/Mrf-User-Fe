import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  userToken:any;
  logInStatus:boolean=false;
  constructor() { }
  set(response:any): void {
  const key="tocken";
  const location='location'
  const locationValue=response.user.location
  const value=response.token;
  this.userToken=response.token;
  this.logInStatus=true;
  localStorage.setItem(key, JSON.stringify(value));
  localStorage.setItem(location,JSON.stringify(locationValue))
  }

  get(key: string): any {

    return this.getFromLocalStorage(key);
  }
  
  remove(key: string): void {
    this.logInStatus=false;
      localStorage.removeItem(key);
    
  }
  getFromLocalStorage(key: string): any {
  
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    
  }

}
