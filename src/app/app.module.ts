import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LanguageComponent } from './language/language.component';
import { LocationComponent } from './location/location.component';
import { SellingStockVechileComponent } from './selling-stock-vechile/selling-stock-vechile.component';
import { SellingStocksComponent } from './selling-stocks/selling-stocks.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { LogInComponent } from './log-in/log-in.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LanguageComponent,
    LocationComponent,
    SellingStockVechileComponent,
    SellingStocksComponent,
    SignUpComponent,
    StockUpdateComponent,
    LogInComponent,
    UpdateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
