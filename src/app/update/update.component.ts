import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { LogInService } from '../log-in.service';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  userToken:any
  loading:boolean=false
  maxDate:any;
  minDate:any;
  constructor(private http : HttpClient,
                private location: Location,
                private toastr: ToastrService,
                private loginService:LogInService,
                private router:Router,
                private dataTransferService:DataTransferService
  )
  {
    this.userToken=this.loginService.get('tocken');
    const currentDate=new Date();
    const weekAgo=new Date();
    weekAgo.setDate(currentDate.getDate()-7)
    var currentDateIST = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    var currentDates = new Date(currentDateIST);
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDates.getMonth() + 1)).slice(-2); // Adding 1 to month since it's zero-based
    var day = ('0' + currentDates.getDate()).slice(-2);
    var formattedDate = year + '-' + month + '-' + day;
    this.maxDate=formattedDate
    this.minDate=weekAgo.toISOString().split('T')[0];
  }

  calculateCostPerUnit()
  {
   if (this.formData.totalAmount && this.formData.quantity) {
    let pricePerUnit=this.formData.totalAmount/this.formData.quantity
    pricePerUnit = Math.round(pricePerUnit * 1000) / 1000;
    this.formData.pricePerUnit=pricePerUnit
   }
  }

  goBack()
  {
    this.location.back();
  }
  formData = {
    date:'',
    comment: '',
    tyreSize: '',
    quantity: 0,
    SSP: '',
    totalAmount:0,
    pricePerUnit:0,
    location:this.dataTransferService.setLocation('location'),
    role:'worker'
  };

  submitForm() {
    this.loading=true;
    // Here you can send the form data to your backend API
    console.log(this.formData);
    console.log(this.userToken,"token");
    const api='https://mrf-tyres-be.onrender.com/update-open-stock';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userToken}`
      // Add more headers as needed
    });
    console.log(headers);

    this.http.post(api, this.formData, { headers:headers }).subscribe((response) => {
      console.log(response);
      this.loading=false;
      this.toastr.success('product added successfully!', 'success');
    },
    (error) => {
      console.log(error);
      this.loading=false;
      this.toastr.error('Oops! Something went wrong.', 'Error');
      
    });
  }

}
