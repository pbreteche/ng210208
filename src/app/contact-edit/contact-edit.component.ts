import { ActivatedRoute, Router } from '@angular/router';
import { CONTACTS } from './../../data/contacts';
import { Contact } from './../../model/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit{
 
  contact: Contact = CONTACTS[0];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      const id = +(map.get('id') || 1);
      this.contact = Object.assign({}, CONTACTS[id - 1]);
    });
  }

  update(): void {
    const id = +(this.contact.id || 0) - 1;
    console.log(this.contact);
    CONTACTS[id] = Object.assign({}, this.contact);
    this.router.navigate(['/detail', this.contact.id]);
  }
}
