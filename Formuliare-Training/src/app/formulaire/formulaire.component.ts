import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  nomControl: FormControl;
  prenomControl: FormControl;
  telephoneControle: FormControl;
  emailControl: FormControl;
  connaissanceControl:FormControl;
  userForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.nomControl = fb.control('', [Validators.required, Validators.pattern('[A-Z][a-z0-9_-]{3,19}'),]);
    this.prenomControl = fb.control('', [Validators.required]);
    this.telephoneControle = fb.control('', [Validators.minLength(10), Validators.maxLength(10)]);
    this.emailControl = fb.control('', [Validators.email, Validators.required]);
    this.connaissanceControl = fb.control('', [Validators.required]);

    this.userForm = fb.group({
      nom: this.nomControl,
      prenom: this.prenomControl,
      telephone: this.telephoneControle,
      email: this.emailControl,
      connaissance: this.connaissanceControl,
    })
  }

  handleTypeScriptSubmit() {
    console.log(this.userForm.value);
  }

  handleClear() {
    this.nomControl.setValue('');
    this.prenomControl.setValue('');
    this.telephoneControle.setValue('');
    this.emailControl.setValue('');
  }

  ngOnInit() {
  }

}
