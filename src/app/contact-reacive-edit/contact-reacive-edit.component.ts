import { CONTACTS } from './../../data/contacts';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-reacive-edit',
  templateUrl: './contact-reacive-edit.component.html',
  styleUrls: ['./contact-reacive-edit.component.scss']
})
export class ContactReaciveEditComponent implements OnInit {
  id = 0;
  editForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      this.id = +(map.get('id') || 1);
      this.editForm.reset(CONTACTS[this.id - 1]);
    });
  }

  get name(): AbstractControl|null {
    return this.editForm.get('name');
  }

  get email(): AbstractControl|null {
    return this.editForm.get('email');
  }

  update(): void {
    let contact = this.editForm.value;
    contact.id = this.id;
    CONTACTS[this.id - 1] = contact;
    this.router.navigate(['/detail', contact.id]);
  }
}
