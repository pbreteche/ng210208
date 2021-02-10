import { ContactListService } from './../contact-list.service';
import { CONTACTS } from './../../data/contacts';
import { Contact } from './../../model/contact';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-new-form',
  templateUrl: './contact-new-form.component.html',
  styleUrls: ['./contact-new-form.component.scss']
})
export class ContactNewFormComponent {

  newContact: Contact = {id: null, name: '', email: ''};

  constructor(private contactList: ContactListService) {}

  add(): void {
    this.contactList.add(this.newContact);
    this.newContact = {id: null, name: '', email: ''};
  }
}
