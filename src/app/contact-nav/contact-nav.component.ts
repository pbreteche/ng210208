import { CONTACTS } from './../../data/contacts';
import { Contact } from './../../model/contact';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.scss']
})
export class ContactNavComponent {
  @Output() onSelect = new EventEmitter<Contact>();

  contacts: Contact[] = CONTACTS;
  selected: Contact = CONTACTS[0];

  select(contact: Contact) {
    this.selected = contact;
    this.onSelect.emit(contact);
  }
}
