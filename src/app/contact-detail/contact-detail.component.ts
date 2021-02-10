import { CONTACTS } from './../../data/contacts';
import { Contact } from './../../model/contact';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  contact: Contact = CONTACTS[0]; // temporary, we will get real contact from path

}
