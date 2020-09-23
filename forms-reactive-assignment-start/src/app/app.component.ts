import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit(){
    this.myForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(this.statuses[2]),
    })
  }

  onFormSubmit(){
    console.log(this.myForm.value)
  }
}
