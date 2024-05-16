import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { LogInService } from '../log-in.service';
import { DataTransferService } from '../data-transfer.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-selling-stock-vechile',
  templateUrl: './selling-stock-vechile.component.html',
  styleUrl: './selling-stock-vechile.component.css'
})
export class SellingStockVechileComponent {

  loading:boolean=false
  constructor(private http: HttpClient ,
    private location: Location,
    private logInservice: LogInService,
    private toaster:ToastrService,
    private dataTransferService: DataTransferService

  )
  {

  }
  goBack()
  {
    this.location.back();
  }
  formData = {
    date: new Date().toISOString().split('T')[0],
    comment: '',
    customerName: '',
    tyreSize: '',
    quantity: '',
    phoneNumber:'',
    location:this.dataTransferService.setLocation('location'),
    role:'owner'
  };

  submitForm() {
   
    console.log(this.formData);
    this.loading=true
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.logInservice.get('tocken')}`
      // Add more headers as needed
    });
    console.log(headers);
    const api='https://mrf-tyres-be.onrender.com/special-reports'
    this.http.post(api, this.formData, { headers }).subscribe((response) => {
      console.log(response);
      this.loading=false
      this.toaster.success("Special report successfully",'success')
    },
    (error) => {
      this.loading=false
      console.log(error);
    });
  }

}
