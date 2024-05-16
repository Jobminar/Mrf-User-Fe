import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  location:any;
  constructor(private loginservice:LogInService) { }

  setLocation(location:string):Observable<any>{
    // this.location=location;
   this.location= this.loginservice.get('location')
    return this.location;
  }
}
