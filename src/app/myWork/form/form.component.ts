import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: 
  `
  <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)" novalidate>
  
    <input name="firstName" ng Model required #fistName="ngModel">
    <input name="lastName" ng Model required #lastName="ngModel">
  <button>Submit</button>  
  </form>

  <p>First name value: {{firstName.value}}</p>
  <p>First name valid: {{firstName.valid}}</p>
  <p>Form value: {{myForm.value |json}}</p>
  <p>Form valid: {{myForm.valid}}</p>

  `,
styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { 
    
  }
  onSubmit(myForm: NgForm){

    console.log(myForm.value);
    console.log(myForm.valid);

    console.log(myForm.value. firstName);

  }

  ngOnInit() {
  }

}
