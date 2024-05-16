import { Component } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

  constructor(private dataTransferService: DataTransferService,
               private router: Router  
  )
  {

  }

  location(location: string)
  {
    this.dataTransferService.setLocation(location);
    this.router.navigate(['language']);
  }


}
