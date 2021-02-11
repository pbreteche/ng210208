import { Contact } from './../model/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  data: Map<number, Contact> = new Map();

  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.fetch();
    }, 500); 
  }

  private fetch(): void {
    this.http.get<Contact[]>('assets/contacts.json').subscribe(
      contacts => {
        contacts.forEach((contact: Contact) => {
          this.data.set(contact.id as number, contact);
        });
      }
    );
  }

  find(id: number): Contact|undefined {
    return this.data.get(id);
  }

  findAll(): Iterable<Contact> {
    return this.data.values();
  }

  add(contact: Contact): void {
    if (!contact.id) {
      contact.id = this.data.size + 1;
    }
    
    this.data.set(contact.id, contact);
  }

  update(id: number, contact: Contact): void {
    this.data.set(id, contact);
  }
}
