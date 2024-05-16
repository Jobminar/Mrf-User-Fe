import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LanguageComponent } from './language/language.component';
import { LocationComponent } from './location/location.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { SellingStockVechileComponent } from './selling-stock-vechile/selling-stock-vechile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SellingStocksComponent } from './selling-stocks/selling-stocks.component';
import { LogInComponent } from './log-in/log-in.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'login',component:LogInComponent},
  {path :'landing',component:LandingPageComponent},
  {path:'language',component:LanguageComponent},
  {path:'location',component:LocationComponent},
  {path:'stock-Update',component:StockUpdateComponent},
  {path:'selling-stocks',component:SellingStocksComponent},
  {path:'selling-Stock-Vechile',component:SellingStockVechileComponent},
 {path:'update',component:UpdateComponent},
 {path:'search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
