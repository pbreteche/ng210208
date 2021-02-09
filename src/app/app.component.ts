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

  current: Contact = CONTACTS[0];

  setCurrent(contact: Contact) {
    this.current = contact;
  }
}
