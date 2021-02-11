import { Validators as MyValidators } from './../validators';
import { ContactListService } from './../contact-list.service';
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
      Validators.required,
      MyValidators.alphanumeric,
      MyValidators.min(5)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  constructor(private contactList: ContactListService) {}

  get name(): AbstractControl|null {
    return this.createForm.get('name');
  }

  get email(): AbstractControl|null {
    return this.createForm.get('email');
  }

  add(): void {
    this.contactList.add(this.createForm.value);
    this.createForm.reset();
  }
}
