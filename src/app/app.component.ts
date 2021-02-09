import { CONTACTS } from './../data/contacts';
import { Component } from '@angular/core';
import { Contact } from './../model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carnet d\'adresse';
  
  contacts: Contact[] = CONTACTS;

  current: Contact = CONTACTS[0];

  select(contact: Contact) {
    this.current = contact;
  }
}
