import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { LogInService } from '../log-in.service';
import { DataTransferService } from '../data-transfer.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-selling-stocks',
  templateUrl: './selling-stocks.component.html',
  styleUrl: './selling-stocks.component.css'
})
export class SellingStocksComponent {

  locations:any;
  loading:boolean=false
  maxDate:any;
  minDate:any;
  constructor(private http: HttpClient,
            private location: Location,
            private logInservice:LogInService,
            private toaster:ToastrService,
            private dataTransfer:DataTransferService)
  {
    this.locations=this.dataTransfer.location
   
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
    quantity: 0,
    totalAmount:0,
    pricePerUnit:0,
    location:this.logInservice.getFromLocalStorage('location'),
  };

  calculateTotalAmount()
  {
    if (this.formData.quantity && this.formData.pricePerUnit) {
      this.formData.totalAmount=this.formData.quantity*this.formData.pricePerUnit;
    }
  }
  submitForm() {
    this.loading=true;
    // Here you can send the form data to your backend API
    console.log(this.formData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.logInservice.get('tocken')}`
      // Add more headers as needed
    });
    console.log(this.logInservice.get('tocken'),"tocken");
    console.log(headers);
    const requestBody={
      date:this.formData.date,
      comment:this.formData.comment,
      customerName:this.formData.customerName,
      tyreSize: this.formData.tyreSize,
      quantity: this.formData.quantity,
      
      pricePerUnit:this.formData.pricePerUnit,
      location:this.formData.location
    }
    const api='https://mrf-tyres-be.onrender.com/update-stock'
    this.http.post(api, this.formData,{ headers: headers }).subscribe((response) => {
      console.log(response);
      this.toaster.success("Stock selled successfully",'success')
      this.loading=false;
    },
    (error) => {
      console.log(error);
      if (error.error.message==="Item not found in stock") {
        this.toaster.error("Item not found in stock",'error')
      }
      this.loading=false;
    });
  }

}
