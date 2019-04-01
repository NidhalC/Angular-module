import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/User";
import {isMyPrefixValidator} from "../model/validator/password.validator";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user:User = new User('monMail' , 'test');

  emailControl:FormControl;
  passwordControl : FormControl;
  userForm: FormGroup;



  constructor(fb: FormBuilder) {


    this.emailControl = fb.control('', [Validators.email, Validators.required]);
    this.passwordControl = fb.control('', [isMyPrefixValidator]);

    this.userForm = fb.group({
      email: this.emailControl,
      password: this.passwordControl
    });
  }

  handleClear(){
    this.emailControl.setValue('');
    this.passwordControl.setValue('');
  }
  handleTypeScriptSubmit() {
    console.log(this.userForm.value);
  }
  handleValidatorSubmit(value){
    console.log('Form Validator Template Value', value);

  }

  handleSubmit(){
    console.log(this.user);
  }

  ngOnInit() {
  }

}
