import { CONTACTS } from './../../data/contacts';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.scss']
})
export class ContactReactiveFormComponent {
  createForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  get name(): AbstractControl|null {
    return this.createForm.get('name');
  }

  get email(): AbstractControl|null {
    return this.createForm.get('email');
  }

  add(): void {
    CONTACTS.push(this.createForm.value);
    this.createForm.reset();
  }
}
