import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
      setTimeout(()=>{
        console.log(this.logInService.logInStatus);
        const token=localStorage.getItem('tocken')
        if (token) {
          this.router.navigate(['language'])
        } else {
          this.router.navigate(['login'])
        }
       
      },4000)
  }
  constructor(private router:Router,private logInService:LogInService)
  {

  }
}
