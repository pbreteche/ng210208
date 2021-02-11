import { Contact } from './../model/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  data: Contact[] = [];

  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.fetch();
    }, 500); 
  }

  private fetch(): void {
    this.http.get<Contact[]>('assets/contacts.json').subscribe(
      (contacts) => {
        this.data.push(...contacts);
      }
    );
  }

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
