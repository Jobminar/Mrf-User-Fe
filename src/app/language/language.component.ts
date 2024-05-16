import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent implements OnInit{
  buttons=[
    {
      name:'Search For Stock',
      navTo:'search'
    },
    {
    name:'Stocks Update/input stocks',
    navTo:'StockUpdate'
  },{
    name:'Selling Stock Report',
    navTo:'SeelingStock'
  },
  {
    name:'Special Request',
    navTo:'Report'
  },
  {
    name:'Log Out',
    navTo:'login'
  }
  
]


form: FormGroup;

  constructor(private fb: FormBuilder,
              private router:Router,
              private location:Location
  ) {
    // Initialize the form group with three checkboxes
    this.form = this.fb.group({
      eng: [false],
      tel: [false],
      hin: [false]
    });
  }

  ngOnInit() {
    // No need to subscribe to value changes in ngOnInit because we handle the event in onCheckboxChange
  }
  goBack()
  {
    this.location.back();
  }
  onCheckboxChange(changedCheckbox: string) {
    // Iterate through each control in the form group
    for (const controlName in this.form.controls) {
      if (controlName === changedCheckbox) {
        // If the control matches the changedCheckbox, console log its value
        if (this.form.get(controlName)?.value) {
          console.log(controlName.toUpperCase());
        }
      } else {
        // Otherwise, uncheck the other checkboxes
        this.form.get(controlName)?.setValue(false, { emitEvent: false });
      }
    }
  }


  navigateTo(nav:string)
  {
    switch(nav)
    {
      case 'StockUpdate':
       this.router.navigate(['stock-Update']);
        break;
        case 'search':
       this.router.navigate(['search']);
        break;
      
      case 'SeelingStock':
       this.router.navigate(['selling-stocks']);
        break;
      case 'Report':
       this.router.navigate(['selling-Stock-Vechile']);
        break;
      case 'login':
        this.logOut();
        break;
    }
  }

  logOut()
  {
    localStorage.removeItem('tocken');
    localStorage.removeItem('location')
    this.router.navigate(['login'])
  }
}
