import { Contact } from './../model/contact';
import { CONTACTS } from './../data/contacts';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  data = CONTACTS;

  find(id: number): Contact {
    return this.data[id - 1];
  }

  findAll(): Contact[] {
    return this.data;
  }

  add(contact: Contact): void {
    contact.id = this.data.length + 1;
    this.data.push(contact);
  }

  update(id: number, contact: Contact): void {
    this.data[id - 1] = contact;
  }
}
